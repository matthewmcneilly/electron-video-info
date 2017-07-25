/*
Electron is very like Google Chome in terms of underlying architecture
I.E its use of a parent Electron process and a number of children processes
This file is in charge of the main parent process
*/

const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

// Allows mainWindow to be accessed across function calls
let mainWindow;

// See script section in packages.json to see where electron starts
// It executes index.js
const { app, BrowserWindow, ipcMain } = electron;

// Example of even based programming
// When app process is ready/initated then console log
app.on('ready', () => {
  //console.log('Shes a lady, woow, woow woow, shes a lady');

  // Create a new window and load current directories index.html
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

// When window recieves message from index.html execute call back function
// Same event message can be used by different events
// Event is useful to differeniate this
ipcMain.on('video:submit', (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    //console.log('Video Duration: ', metadata.format.duration);

    // Send duration data to index.html
    mainWindow.webContents.send('video:metadata', metadata.format.duration);
  });
});
