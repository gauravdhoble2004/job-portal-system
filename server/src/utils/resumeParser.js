const fs = require('fs');
const pdfParse = require('pdf-parse');

async function parseResume(filePath) {
  const buffer = fs.readFileSync(filePath);
  try {
    const data = await pdfParse(buffer);
    return data.text || '';
  } catch (err) {
    return '';
  }
}

module.exports = { parseResume };
