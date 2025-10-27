#!/usr/bin/env bash
if [[ -z "${SSH_KEY_PATH:-}" || -z "${SSH_TARGET:-}" ]]; then
  echo "Set SSH_KEY_PATH and SSH_TARGET before running this helper." >&2
  exit 1
fi

ssh -i "${SSH_KEY_PATH}" "${SSH_TARGET}" "sudo reboot"
