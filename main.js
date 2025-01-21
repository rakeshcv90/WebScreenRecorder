// // // const { app, BrowserWindow } = require('electron');
// // // const url = require('url');
// // // const path = require('path');
// // // const fs = require('fs');

// // // let mainWindow;

// // // function createMainWindow() {
// // //   mainWindow = new BrowserWindow({
// // //     title: 'My buddy app',
// // //     width: 1500,
// // //     height: 800,
// // //     webPreferences: {
// // //       contextIsolation: true,

// // //       nodeIntegration: true,
// // //       preload: path.join(__dirname, 'preload.js'),
// // //       webSecurity: false,
// // //     },
// // //   });

// // //   mainWindow.webContents.openDevTools();

// // //   const startUrl = url.format({
// // //     pathname: path.resolve(__dirname, '../screen/build/index.html'),
// // //     protocol: 'file:',
// // //     slashes: true,
// // //   });

// // //   mainWindow.loadURL('http://localhost:3000/');
// // // }

// // // app.whenReady().then(() => {
// // //   console.log('Electron app is ready');
// // //   createMainWindow();

// // //   app.on('window-all-closed', () => {
// // //     if (process.platform !== 'darwin') {
// // //       app.quit();
// // //     }
// // //   });
// // // });

// // // app.on('activate', () => {
// // //   if (BrowserWindow.getAllWindows().length === 0) {
// // //     createMainWindow();
// // //   }
// // // });
// // const { app, BrowserWindow } = require('electron');
// // const url = require('url');
// // const path = require('path');
// // const fs = require('fs');
// // const { ipcMain } = require('electron/main');
// // // const TodoService = require('./actions/TodoService');
// // // const FormData = require('form-data');
// // // const { default: axios } = require('axios');

// // let mainWindow;

// // function createMainWindow() {
// //   mainWindow = new BrowserWindow({
// //     title: 'My buddy app',
// //     width: 1500,
// //     height: 800,
// //     webPreferences: {
// //       contextIsolation: true,
// //       nodeIntegration: true,
// //       preload: path.join(__dirname, 'preload.js'),
// //     },
// //   });

// //   mainWindow.webContents.openDevTools();

// //   const startUrl = url.format({
// //     pathname: path.join(__dirname, './screen/build/index.html'),
// //     protocol: 'file',
// //   });

// //   mainWindow.loadURL(startUrl);
// // }

// // app.whenReady().then(createMainWindow);

// // // ipcMain.on('submit:todoForm', async (e, opt) => {
// // //   const data = await TodoService.handleTodoFormSubmit(opt);
// // //   mainWindow.webContents.send('task:added', { task: data });
// // // });
// // // ipcMain.on('file:upload', async (e, opt) => {
// // //   var form = new FormData();
// // //   form.append('image', fs.createReadStream(opt.file));
// // //   form.append('name', 'asdasd');
// // //   await axios.post('http://localhost:8000/api/upload', form, {
// // //     headers: form.getHeaders(),
// // //   });
// // //   mainWindow.webContents.send('upload:complete');
// // //   return true;
// // // });

// const { app, BrowserWindow } = require('electron');
// const url = require('url');
// const path = require('path');
// const { ipcMain } = require('electron/main');

// let mainWindow;

// function createMainWindow() {
//   mainWindow = new BrowserWindow({
//     title: 'My buddy app',
//     width: 600,
//     height: 800,
//     webPreferences: {
//       contextIsolation: true,
//       nodeIntegration: true ,  // For better security
//       preload: path.join(__dirname, 'preload.js'),  // Preload script for exposing APIs
//     },
//   });

//   // Open DevTools in development
//   // if (process.env.NODE_ENV === 'development') {
//   //   mainWindow.webContents.openDevTools();
//   // }
//   mainWindow.webContents.openDevTools();
//   // Construct the start URL for loading the local index.html
//   const startUrl = url.format({
//     pathname: path.join(__dirname, 'screen', 'build', 'index.html'),
//     protocol: 'file',
//     slashes: true, // Ensure proper formatting for the file protocol
//   });

//   // Load the URL and handle any errors
//   // mainWindow.loadURL(startUrl).catch((err) => {
//   //   console.error('Failed to load the page:', err);
//   // });
//   mainWindow.loadFile(startUrl)
// }

// app.whenReady().then(createMainWindow);

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });
const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');
const url = require('url');
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
   
    },
  });
  
  
  win.webContents.openDevTools();

  // const startUrl = url.format({
  //   pathname: path.join(__dirname, 'screen','build', 'text.html'),
  //   protocol: 'file',
  // });
  // win.url(startUrl);
  win.loadFile(path.join(__dirname, 'screen','build', 'text.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
