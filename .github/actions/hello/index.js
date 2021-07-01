const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw new Error("some error message");
  core.debug("Debug message");
  core.warning("Warn message");
  core.error("Error message");
  core.setSecret("SecretMesssage");
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);
  core.setSecret(name);
  console.log(`Hello ${name}`);
  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup("Starting Group");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup("Ending Group");
  core.exportVariable("HELLO", "hello");
} catch (error) {
  core.setFailed(error.message);
}
