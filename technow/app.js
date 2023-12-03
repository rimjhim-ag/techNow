const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const https = require("https");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/feed.html");
});

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Signup Route
app.post('/', (req, res) => {
  const email = req.body.email;
  

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed'
        
      }
    ]
  };



  const postData = JSON.stringify(data);

  const url = 'https://us13.api.mailchimp.com/3.0/lists/88325585c6';
  const options = {  
    method: 'POST',
    headers: {
      Authorization: 'auth 377b931d055b1e7b99f37074563c2084-us13'
    }
    
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/public/subscribe.html");
      console.log("success");
      
    } else {
      res.sendFile(__dirname + "/public/join.html");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(postData);
  request.end();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));







