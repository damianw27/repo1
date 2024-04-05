const path = require('path');
const ghPages = require('gh-pages');
const { removeDirectory } = require('./util/remove-directory');
const fs = require('fs');
const {getCurrentVersion} = require("./util/version-utils");
const {getTags, createTag} = require("./util/tag-utils");

require('dotenv').config();

(async () => {
  const workingDir = path.join(__dirname, '..');

  console.log('Validating environment...');

  const versionFilePath = path.join(workingDir, 'tmp', 'version.json');

  if (!fs.existsSync(versionFilePath)) {
    console.log('Environment is not ready for grammar source code generation.');
    console.log('Perform following command to get latest data from opengql/grammar repository:');
    console.log('>\tyarn grammar:download');
    return;
  }

  console.log('Creating new tag if not exists...');

  const currentVersion = getCurrentVersion();
  const existingTags = getTags('damianw27', 'repo1');

  if (!existingTags.includes(currentVersion)) {
    await createTag('damianw27', 'repo1', currentVersion);
  }

  console.log('Clearing build directory...');

  const buildDir = path.join(workingDir, 'build');

  removeDirectory(buildDir);

  console.log('Building worker and editor sources...');

  const tagFile = path.join(buildDir, 'tag.txt');
  fs.writeFileSync(tagFile, currentVersion);

  console.log('Deploy application to GitHub Pages...');

  await ghPages.publish(buildDir);
})();
