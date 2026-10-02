const https = require('https');
https.get('https://firnas.tech/wp-content/uploads/elementor/css/post-4764.css?ver=1790855370', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const rules = data.split('}');
    rules.filter(r => r.includes('de861e8') || r.includes('e0873f3') || r.includes('8fc239c') || r.includes('6431c2b') || r.includes('f6d0aaf')).forEach(r => console.log(r + '}'));
  });
});
