const {stripIndent} = require('common-tags');
exports.handler = function(context, event, callback) {
    	const timeTable = [
	    {
          "day":1,
          "classes":4,
          "classSubject":[ "Computer Network", "Computer Network", "Embedded System Design Raspberry Pi", "Formal Language and Automata" ],
          "labs": 0
        },
	    {
          "day":2,
          "classes":4,
          "classSubject":["Digital Image Processing", "Digital Image Processing", "Computer Networks", "Formal Language and Automata"],
          "labs": 0
        },
	    {
          "day":3,
          "classes":4,
          "classSubject":[ "Discrete Mathematics for Engineers", "Discrete Mathematics for Engineers", "Digital Image Processing", "Indian Traditional Knowledge" ],
          "labs": 0
        },
	    {
          "day":4,
          "classes":4,
          "classSubject":[ "Information Storage and Managemen", "Information Storage and Managemen", "Discrete Mathematics for Engineers", "	Computer Networks" ],
          "labs": 0
        },
	    {
          "day":5,
          "classes":4,
          "classSubject":[ "Analytical and Logical Thinking Skills", "Analytical and Logical Thinking Skills", "Information Storage and Managemen", "Digital Image Processing" ],
          "labs": "Computer Network"
        },
	    {
          "day":6,
          "classes":4,
          "classSubject":[ "Formal Language and Automata", "Formal Language and Automata", "Analytical and Logical Thinking Skills", "Discrete Mathematics for Engineers" ],
          "labs": "Embedded System Design Raspberry Pi"
        },
	 ];
	let responseObject = {};
	let memory = JSON.parse(event.Memory);
	let query = memory.twilio.collected_data.collect_comments.answers.day_order.answer || 1;
	let strip = stripIndent`
     '📚' *${JSON.stringify(timeTable[query-1].classSubject)}* 
     '⭐️' labs:*${JSON.stringify(timeTable[query-1].labs)}* 
     '⭐️'Day Order: (${JSON.stringify(query)}) 
        `
    let actions = [];
        let say = {
            "say": strip
        }
        actions.push(say);
        let respObj = {
        	"actions": actions
        };
        callback(null, respObj);	
};