/*
Electron is very like Google Chome in terms of underlying architecture
I.E its use of a parent Electron process and a number of children processes
This file is in charge of the main parent process
*/

const electron = require('electron');

// See script section in packages.json to see where electron starts
// It executes index.js
const { app, BrowserWindow, ipcMain } = electron;

// Example of even based programming
// When app process is ready/initated then console log
app.on('ready', () => {
  //console.log('Shes a lady, woow, woow woow, shes a lady');

  // Create a new window and load current directories index.html
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

// When window recieves message from index.html execute call back function
ipcMain.on('video:submit', () => {

});
