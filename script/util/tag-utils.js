const axios = require("axios");

async function getLastCommitSha(owner, repo) {
    try {
        const headers = {
            Accept: '*/*',
            Authorization: `Bearer ${process.env.GRAMMAR_REPOSITORY_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        };

        const url = `https://api.github.com/repos/${owner}/${repo}/branches/master`;
        const response = await axios({ url, method: 'get', responseType: 'json', headers });
        return response.data.commit.sha;
    } catch (error) {
        console.error('Error getting last commit SHA:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function createTag(owner, repo, version) {
    try {
        const headers = {
            Accept: '*/*',
            Authorization: `Bearer ${process.env.GRAMMAR_REPOSITORY_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        };

        const currentCommitSha = await getLastCommitSha(owner, repo);
        console.log(currentCommitSha);

        await axios({
            method: 'post',
            url: `https://api.github.com/repos/${owner}/${repo}/git/refs`,
            headers,
            data: {
                ref: `refs/tags/v${version}`,
                sha: currentCommitSha
            }
        });

        await axios({
            url: `https://api.github.com/repos/${owner}/${repo}/git/tags`,
            method: 'post',
            responseType: 'json',
            headers,
            data: {
                tag: `v${version}`,
                message: `Release version v${version}`,
                object: currentCommitSha,
                type: 'commit'
            }
        });

        console.log(`Tag "v${version}" created successfully.`);
    } catch (error) {
        console.error(`Error creating tag: ${error.message}`);
        process.exit(1);
    }
}

async function getTags(owner, repo) {
    try {
        const headers = {
            Accept: '*/*',
            Authorization: `Bearer ${process.env.GRAMMAR_REPOSITORY_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        };

        const url = `https://api.github.com/repos/${owner}/${repo}/tags`
        const response = await axios({ url, method: 'get', responseType: 'json', headers });
        return response.data.map(tag => tag.name);
    } catch (error) {
        console.error(`Error downloading file: ${error.message}`);
        return [];
    }
}

module.exports = { createTag, getTags };
