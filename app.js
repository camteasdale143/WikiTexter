// Download the Node helper library from twilio.com/docs/node/install
// These consts are your accountSid and authToken from https://www.twilio.com/console
const express = require('express');
var app = express();
const accountSid = 'AC1ee1090580f2bcc5d31e4a2283158689';
const authToken = '69118d4b62def7d2777b1809c5f78bc8';
const client = require('twilio')(accountSid, authToken);
const request = require('request');
var wtf = require('wtf_wikipedia');


requestWikiPage('whistling', 1, false)


async function requestWikiPage(query, page, categories) {
  wtf.fetch(query).then(doc => {
    if (categories) {
      console.log(doc.categories());
    } else {
      console.log(doc.sections('As communication').plaintext().substring(-1 + 1*page,917 + 1*page - 1));
    }
  });
}

app.listen(8081, function(req, res){
  console.log('running');
})

app.get('/', (req, res) => {
  res.send("this is the home page")
})

// async function sendMessage(content) {
//   client.messages
//     .create({
//       body: "This is another Test",
//       to: '+15193010463',
//       from: '+12262429706',
//     })
//     .then(message => process.stdout.write(message.sid));
// }
