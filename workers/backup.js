const mongoS3 = require('mongo-s3')

mongoS3({
  log: console.log,
  uri: process.env.DB_URI,
  s3: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    bucket: process.env.S3_BACKUP_BUCKET || 'your-s3-backup-bucket',
    key: process.env.S3_BACKUP_KEY || 'efrs-backup.zip'
  }
}).then(function (result) { console.log('EVERYTHING IS AWESOME', result) })
  .catch(function (err) { console.error('Snap, something went wrong :(', err) })
