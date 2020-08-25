exports.handler = function(context, event, callback) {
	let actions = [];
    let respObj = {
    	"actions": [
            {
                    "say": "25/08(Tuesday) - Raspberry pie \n26/08(Wednesday) - Computer Network \n27/08(Thursday) - Digital Image processing \n28/08(Friday) - Discrete Mathematics for Engineers \n29/08(Saturday) - Information Storage and Management \n31/08(Monday) - Analytical and Logical Thinking Skills\n01/09(Tuesday) - Formal Language and Automata ",
            },
    ]
    };
    callback(null, respObj);	
};