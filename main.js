const { app, BrowserWindow } = require('electron');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 400, // Largura do celular
        height: 600, // Altura do celular
        resizable: false, // Impede redimensionamento
        frame: false, // Remove a barra de título
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html'); // Carrega o HTML

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
