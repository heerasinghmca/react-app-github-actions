const core = require('@actions/core');
const github = require('@actions/github');

try{
	const name = core.geInput('who-to-greet');
	console.log('Hello ${name}');
	const time = new Data();
	core.setOutput("time", time.toTimeString());
	console.log(JSON.stringify(github, null, '\t'));
}
catch(error){
	core.setFailed(error.message);
}