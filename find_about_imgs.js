const https = require('https');
const fs = require('fs');

https.get('https://firnas.tech/', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    // Look for images between "Our journey of building success" and next big section
    const start = data.indexOf('Our journey of building success');
    const chunk = data.substring(start, start + 12000);
    const imgs = chunk.match(/https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)/gi) || [];
    console.log('Images in About section:');
    console.log(Array.from(new Set(imgs)));
  });
});
