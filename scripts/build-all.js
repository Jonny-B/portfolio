const { exec } = require('child_process');
const { promises } = require('fs')

// This script dynamically builds the build scripts for any react project that is in src/apps. 
async function runBuildScripts() {

    const appDirs = (await promises.readdir('./src/apps')).filter((file) => file[0] !== '.').map((dir) => `${process.cwd()}/src/apps/${dir}`);

    // Filter out hidden files from results and then build scripts from there
    const buildScripts = appDirs.map((dir) => {
        const dirName = dir.split('/').pop()
        // Use cross-platform command for setting environment variable on Windows and macOS
        const setEnvCommand = process.platform === 'win32' ? 'set' : 'export';
        // Use cross-platform directory separator for Windows and macOS
        const dirSeparator = process.platform === 'win32' ? '\\' : '/';
        // Use cross-platform command for removing directory on Windows and macOS
        const rmDirCommand = process.platform === 'win32' ? 'rmdir /s /q' : 'rm -r';
        // Use cross-platform command for fallback on Windows and macOS
        const fallback = process.platform === 'win32' ? 'echo' : 'true';
        // Use cross-platform command for move on Windows and macOS
        const move = process.platform === 'win32' ? 'move' : 'mv';

        // Alongside install and build, this will delete all builds, make new build directories, and then copy the build files from each app to the backend build directory.
        return `cd ${dir} && yarn install && ${setEnvCommand} PUBLIC_URL=/${dirName} && yarn build && ${rmDirCommand} ../../backend/builds${dirSeparator}${dirName} && mkdir ../../backend/builds${dirSeparator}${dirName} || ${fallback} && ${move} build${dirSeparator}* ../../backend/builds${dirSeparator}${dirName}`
    }).join(' && ');

    console.log('Installing node modules and building apps. This may take a while')
    const childProcess = exec(buildScripts)

    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)

}

runBuildScripts();
