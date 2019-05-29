const { app, BrowserWindow } = require('electron');
const path = require('path');

const _paths = {
    client: './client/'
};

let mainWindow = null;

app.on('ready', () => {
    console.log('Hello from electron.');
    mainWindow = new BrowserWindow({
        webPreferences: { nodeIntegration : true }
    });
    mainWindow.webContents.loadFile(path.join(__dirname, _paths.client, 'index.html'));
});