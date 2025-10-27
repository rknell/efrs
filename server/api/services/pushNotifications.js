const firebaseAdmin = require('firebase-admin')
const serviceAccount = require('../../certificates/firebase.json')

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://efrs-c04a9.firebaseio.com'
})

function sendPush (registrationToken, message, title, badge) {
  console.log('Sending push', registrationToken, message, title, badge)

  // See the "Defining the message payload" section below for details
  // on how to define a message payload.
  const payload = {
    data: {
      show_in_foreground: 'true'
    },
    notification: {
      title: title,
      body: message,
      badge: badge || '0',
      sound: 'default',
      tag: 'EFRS'
    }
  }

  var options = {
    priority: 'high',
    timeToLive: 60 * 60 * 24
  }

  // Send a message to the device corresponding to the provided
  // registration token.
  firebaseAdmin.messaging().sendToDevice(registrationToken, payload, options)
    .then(function (response) {
      // See the MessagingDevicesResponse reference documentation for
      // the contents of response.
      console.log('Successfully sent message:', response)
    })
    .catch(function (error) {
      console.log('Error sending message:', error)
    })
}

// function sendPush(appId, tokens, message, title, badge) {
//   if (tokens && tokens.forEach) {
//     console.log("Sending push", appId, tokens, message, title, badge);
//     tokens.forEach(token=> {
//       switch (token.os) {
//         case "ios":
//           return sendIOS(appId, token.token, message, badge);
//         case "android":
//           return sendAndroid(appId, title, message, token.token);
//       }
//     });
//   } else {
//     console.error("No token specified", message, title, tokens);
//     console.trace();
//   }
//
// }

module.exports = {
  sendPush: sendPush
}

sendPush('cRPCyxInmyY:APA91bEZD4iFT9bFV5vGQuLaWWxa-AKmOuhkDGrEBz8cloLBWtYrVwTdHsn8GT21dGJMoeF0Tow0yHtAsXR2S552b2-bX_gMRxU8STrNn0zWfetgMx1RZ5FeN2zlUPxaay1G6FuXwRyy', 'eFRS Server Started', 'Server Started')
