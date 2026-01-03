const { spawn } = require('child_process');

try {
    console.log('Spawning /bin/zsh with child_process');
    const child = spawn('/bin/zsh', ['-c', 'echo hello']);

    child.stdout.on('data', (data) => {
        console.log('stdout:', data.toString());
    });

    child.stderr.on('data', (data) => {
        console.error('stderr:', data.toString());
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    child.on('error', (err) => {
        console.error('Failed to start subprocess.', err);
    });

} catch (e) {
    console.error('Exception:', e);
}
