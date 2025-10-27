# Mongo Replica Set Key

The replica set key file (`repl.keyfile`) has been removed from version control.
Generate your own key before running MongoDB in replica set mode, for example:

```bash
openssl rand -base64 756 > repl.keyfile
chmod 600 repl.keyfile
```

Keep the file private and out of source control.
