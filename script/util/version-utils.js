const packageJson = require('../../package.json');
const path = require("path");
const fs = require("fs");

function readVersionFromTmpDir() {
    const workingDir = path.join(__dirname, '..', '..');
    const grammarVersionFile = path.join(workingDir, 'tmp', 'version.json');

    if (!fs.existsSync(grammarVersionFile)) {
        throw new Error('Grammar version file is not existing.')
    }

    const versionFileContent = fs.readFileSync(grammarVersionFile).toString('utf-8');
    const parsedVersionFile = JSON.parse(versionFileContent);
    return `${parsedVersionFile.major}.${parsedVersionFile.minor}.${parsedVersionFile.patch}`;
}

function getCurrentVersion() {
    const editorVersion = packageJson.version;
    const grammarVersion = readVersionFromTmpDir();
    return `${editorVersion}_${grammarVersion}`;
}

module.exports = {getCurrentVersion};
