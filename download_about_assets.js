const https = require('https');
const fs = require('fs');

const files = [
  { url: 'https://firnas.tech/wp-content/uploads/2026/02/about-us-bnanner.jpg', dest: 'public/about-us-banner.jpg' },
  { url: 'https://firnas.tech/wp-content/uploads/2025/09/White-BG.png', dest: 'public/white-bg.png' }
];

function dl(url, dest) {
  return new Promise((res, rej) => {
    const f = fs.createWriteStream(dest);
    https.get(url, r => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        return dl(r.headers.location, dest).then(res).catch(rej);
      }
      r.pipe(f);
      f.on('finish', () => { f.close(); console.log('Downloaded', dest); res(); });
    }).on('error', rej);
  });
}

(async () => {
  for (const f of files) await dl(f.url, f.dest);
})();
