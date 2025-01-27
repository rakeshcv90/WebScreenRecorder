
// const { app, BrowserWindow } = require('electron/main');
// const path = require('node:path');
// const url = require('url');
// const isDev = require('electron-is-dev');
// function createWindow() {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       contextIsolation: true,
//       nodeIntegration: true,
//       preload: path.join(__dirname, 'preload.js'),
   
//     },
//   });
  
  
//   win.webContents.openDevTools();
//   win.loadFile('index.html')

//   win.loadFile(path.join(__dirname, 'screen','build', 'text.html'));
// }

// app.whenReady().then(() => {
//   createWindow();

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow();
//     }
//   });
// });

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });
const { app, BrowserWindow } = require('electron');
const path = require('path');
// const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.webContents.openDevTools();
  // const startURL =
  // // //  isDev
  // // //   ? 'http://localhost:3000'
  // //   // : 
  //   `file://${path.join(__dirname, '../screen/build/text.html')}`;

  // mainWindow.loadURL('http://localhost:3000');
  mainWindow.loadFile(path.join(__dirname, 'screen','build', 'index.html')).catch((error) => {
    console.error("Failed to load index.html:", error);
});

  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});