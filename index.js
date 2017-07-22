/*
Electron is very like Google Chome in terms of underlying architecture
I.E its use of a parent Electron process and a number of children processes
This file is in charge of the main parent process
*/

const electron = require('electron');

// See script section in packages.json to see where electron starts
const { app } = electron;

// When app process is ready/initated then console log
app.on('ready', () => {
  console.log('Shes a lady, woow, woow woow, shes a lady');
});
