const { Octokit } = require('@octokit/rest');

async function createTag(owner, repo, version) {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

    try {
        const createTagResponse = await octokit.git.createTag({
            owner,
            repo,
            tag: `v${version}`,
            message: `Release version v${version}`,
            object: 'master',
            type: 'commit'
        });

        const commitSha = createTagResponse.data.sha;

        await octokit.git.createRef({
            owner,
            repo,
            ref: `refs/tags/v${version}`,
            sha: commitSha
        });

        console.log(`Tag "v${version}" created successfully.`);
    } catch (error) {
        console.error(`Error creating tag: ${error.message}`);
        process.exit(1);
    }
}

async function getTags(owner, repo) {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

    try {
        const response = await octokit.repos.listTags({
            owner,
            repo
        });

        return response.data.map(tag => tag.name);
    } catch (error) {
        console.error('Error fetching tags:', error.message);
    }
}

module.exports = { createTag, getTags };
