const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw new Error("some error message");
  core.debug("Debug message");
  core.warning("Warn message");
  core.error("Error message");
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  core.setFailed(error.message);
}
