# Certificate Placeholders

This directory previously contained production certificates and service
credentials. They have been removed for the open‑source release.

Provide your own credentials at runtime instead of committing them to the
repository. Suggested files that may live here (all optional and managed by
you):

- `codepush/private.pem` – CodePush private key
- `google-service-account.json` – Google service account used by the API
- Any other platform certificates required for your deployment

Keep these files out of source control and document the required environment
variables in your deployment tooling.
