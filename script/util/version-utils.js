const packageJson = require('../../package.json');
const path = require("path");
const fs = require("fs");

function getCurrentVersion() {
    const editorVersion = packageJson.version;
    const grammarVersion = packageJson.grammarVersion ?? 'null';
    return `${editorVersion}_${grammarVersion}`;
}

module.exports = {getCurrentVersion};
