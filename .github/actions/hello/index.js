const core = require("@actions/core");
const github = require("@actions/github");

try {
  // run npm install @actions/core   npm install @actions/github
  // compile code everything whenn you change thie file npx ncc build .github/actions/hello/index.js -o .github/actions/hello/dist
  // throw new Error("some error message");
  // debugging purpose
  core.debug("Debug message");
  core.warning("Warn message");
  core.error("Error message");
  core.setSecret("SecretMesssage");
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);
  // will add mask here
  core.setSecret(name);
  console.log(`Hello ${name}`);
  const time = new Date();
  core.setOutput("time", time.toTimeString());

  // will put inside group
  core.startGroup("Starting Group");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup("Ending Group");

  // setting an environment variable
  core.exportVariable("HELLO", "hello");
} catch (error) {
  core.setFailed(error.message);
}
