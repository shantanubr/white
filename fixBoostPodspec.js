const fs = require('fs');
const path = require('path');

// Define the path to the boost.podspec file
const podspecPath = path.join(__dirname, 'node_modules', 'react-native', 'third-party-podspecs', 'boost.podspec');

// Define the old and new URLs
const oldUrl = 'https://archives.boost.io/release/1.83.0/source/boost_1_83_0.tar.bz2';
const newUrl = 'https://sourceforge.net/projects/boost/files/boost/1.83.0/boost_1_83_0.tar.bz2'; // Change this to the new URL you want

// Read the content of the podspec file
fs.readFile(podspecPath, 'utf8', (err, data) => {
  if (err) {
    return console.log(`Error reading the podspec file: ${err.message}`);
  }

  // Replace the old URL with the new one
  const result = data.replace(oldUrl, newUrl);

  // Write the modified content back to the podspec file
  fs.writeFile(podspecPath, result, 'utf8', (err) => {
    if (err) return console.log(`Error writing the modified podspec file: ${err.message}`);
    console.log('The boost.podspec has been updated successfully.');
  });
});