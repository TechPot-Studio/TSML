let { app, BrowserWindow, Menu } = require('electron');
function createWindow () {
    Menu.setApplicationMenu(null);
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        resizable: false
    });

    win.loadFile('index.html').then(() => {
        console.log('READY');
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})
