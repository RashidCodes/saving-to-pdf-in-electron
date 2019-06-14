const ipc = require('electron').ipcRenderer;

// print pdf button
document.getElementById('print-pdf').addEventListener('click', (event) => {
    ipc.send('print-to-pdf');
})


ipc.on('wrote-pdf', (event, path) => {
    const message = `Wrote pdf to ${path}`
    document.getElementById('pdf-path').innerHTML = message;
})