const axios =  require('axios');
const {stripIndent} = require('common-tags');
const {escape} = require('querystring');
exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.MessagingResponse();
	let query = escape(event.Body);
	console.log(event);
    var config = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos/' + query,
      headers: { 
        'Cookie': '__cfduid=d84856f24d7bed8fcefed4f7f2c2057e51597843626'
      }
    };
    
    axios(config)
    .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    return stripIndent`
     😄 *${JSON.stringify(response.data.title)}* '⭐️' Day Order: (${JSON.stringify(response.data.id)})
        `;
    })
    .catch((err)=>{
	        console.error(err);
	        return "Enter a valid integer starting from 1";
	})
	.then(response =>{
	        twiml.message(response)
	        callback(null, twiml);
	    });
	    
};