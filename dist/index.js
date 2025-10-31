import * as core from '@actions/core';
import * as common from 'cerbos-actions-common';
async function run() {
    const policiesDir = core.getInput('policyDir');
    const testsDir = core.getInput('testDir');
    await common.compile({
        policiesDir: policiesDir,
        testsDir: testsDir
    });
}
run();
//# sourceMappingURL=index.js.map