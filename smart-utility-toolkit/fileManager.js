// fileManager.js
// File Manager using the fs module: Create, Read, Update, Delete

const fs = require('fs');
const log = require('./modules/logger');

const filePath = './test.txt';

function createFile() {
  log('Creating File...');
  fs.writeFile(filePath, 'Hello Node.js', (err) => {
    if (err) {
      console.error('Error creating file:', err.message);
      return;
    }
    console.log('File Created');
    readFile();
  });
}

function readFile() {
  log('Reading File');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
      return;
    }
    console.log(data);
    updateFile();
  });
}

function updateFile() {
  log('Updating File');
  fs.appendFile(filePath, '\nLearning FS Module', (err) => {
    if (err) {
      console.error('Error updating file:', err.message);
      return;
    }
    console.log('File Updated');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (!err) console.log(data);
      deleteFile();
    });
  });
}

function deleteFile() {
  log('Deleting File');
  fs.unlink(filePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('File does not exist, cannot delete.');
      } else {
        console.error('Error deleting file:', err.message);
      }
      return;
    }
    console.log('File Deleted');
  });
}

// Kick off the CRUD sequence: Create -> Read -> Update -> Read -> Delete
createFile();
