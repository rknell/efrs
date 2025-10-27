#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${SOURCE_MONGO_URI:-}" || -z "${TARGET_MONGO_URI:-}" ]]; then
  echo "Set SOURCE_MONGO_URI and TARGET_MONGO_URI environment variables before running this script." >&2
  exit 1
fi

BACKUP_DIR=${BACKUP_DIR:-./dump}
mkdir -p "${BACKUP_DIR}"

mongodump --uri="${SOURCE_MONGO_URI}" --out "${BACKUP_DIR}"

mongorestore \
  --uri="${TARGET_MONGO_URI}" \
  --drop \
  "${BACKUP_DIR}"
