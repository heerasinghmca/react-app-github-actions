module.exports = {
	branches: "master",
	repositoryUrl: "https://github.com/heerasinghmca/react-app-github-actions"
	plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "@semantic-release/npm"
  ]
}