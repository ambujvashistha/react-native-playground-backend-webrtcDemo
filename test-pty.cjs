const pty = require('node-pty');
const os = require('os');

const shell = process.env.SHELL || (os.platform() === 'win32' ? 'powershell.exe' : '/bin/bash');

console.log(`Testing node-pty with shell: ${shell}`);

try {
    const ptyProcess = pty.spawn(shell, [], {
        name: 'xterm-color',
        cols: 80,
        rows: 30,
        cwd: process.cwd(),
        env: process.env
    });

    console.log('✅ node-pty spawned successfully!');
    console.log('PID:', ptyProcess.pid);

    ptyProcess.on('data', function (data) {
        console.log('Received data:', data);
        process.exit(0);
    });

    ptyProcess.write('ls\r');
} catch (e) {
    console.error('❌ node-pty failed to spawn:', e);
}
