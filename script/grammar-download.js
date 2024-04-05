const { downloadFromGithub } = require('./util/github-download');
const path = require('path');
const { removeDirectory } = require('./util/remove-directory');
const fs = require('fs');

require('dotenv').config();

(async () => {
  const workingDir = path.join(__dirname, '..');

  console.log('Cleaning up before downloading new files...');

  const outputDir = path.join(workingDir, 'tmp');

  if (fs.existsSync(outputDir)) {
    removeDirectory(outputDir);
  }

  fs.mkdirSync(outputDir);

  console.log('Downloading latest files from damianw27/repo2 repository...');

  await downloadFromGithub('JSON.g4', 'damianw27/repo2');
  await downloadFromGithub('version.json', 'damianw27/repo2');
  await downloadFromGithub('samples', 'damianw27/repo2');
})();
