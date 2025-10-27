# Android App Credentials

Sensitive Android signing keys and service configuration files have been
removed from version control. Provide your own copies before building a
release build:

- `google-services.json` (Firebase configuration)
- `fabric.properties` (if Crashlytics/Fabric is still required)
- `my-release-key.keystore` and associated key passwords
- Any other signing material (`efrs.key`, `efrs_upload.pem`)

Store these files securely and keep them out of source control.
