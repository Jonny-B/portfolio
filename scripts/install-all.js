const { exec } = require('child_process');
const { promises } = require('fs')

// This script dynamically builds the build scripts for any react project that is in src/apps. 
async function runInstallScripts() {

    const appDirs = (await promises.readdir('./src/apps')).filter((file) => file[0] !== '.').map((dir) => `${process.cwd()}/src/apps/${dir}`);

    // Filter out hidden files from results and then build scripts from there
    const installScripts = appDirs.map((dir) => {
        // dir is a absolute route at this point
        const dirName = dir.split('/').pop()
        // Along side install and build this will delete all builds, make new build directories, and then copy the build files from each app to the backend build directory.
        return `cd ${dir} && yarn install}`
    }).join(' && ')


    console.log('Installing node modules. This may take a while')
    const childProcess = exec(installScripts)

    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)

}

runInstallScripts();