exports.handler = function(context, event, callback) {
	let actions = [];
    // let say = {
    //     "say": "Hello World!"
    // }
    // actions.push(say);
    let respObj = {
    	"actions": [
            {
                    "say": "Hi there! Thanks for reaching out to your friendly TimeTable Bot. Please let me know what can I do for you.😄😄😄"
            }, 
            {
                        "listen": true
            }
    ]
    };
    callback(null, respObj);	
};