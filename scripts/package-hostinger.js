const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const outDir = path.join(rootDir, 'out');
const hostingerSrc = path.join(rootDir, 'hostinger');
const targetDir = path.join(rootDir, 'hostinger_public_html');

console.log('🚀 Preparing Hostinger public_html package...');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Function to copy directory recursively
function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(source)) return;
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);
  files.forEach((file) => {
    const curSource = path.join(source, file);
    const curTarget = path.join(target, file);
    if (fs.lstatSync(curSource).isDirectory()) {
      copyFolderRecursiveSync(curSource, curTarget);
    } else {
      fs.copyFileSync(curSource, curTarget);
    }
  });
}

// 1. Copy out/ directory if built
if (fs.existsSync(outDir)) {
  console.log('📦 Copying Next.js static build from out/ -> hostinger_public_html/...');
  copyFolderRecursiveSync(outDir, targetDir);
} else {
  console.log('⚠️  No out/ directory found. Run "npm run build" first.');
}

// 2. Copy hostinger PHP API & SQL files
if (fs.existsSync(hostingerSrc)) {
  console.log('🐘 Copying Hostinger PHP backend & SQL files -> hostinger_public_html/...');
  copyFolderRecursiveSync(hostingerSrc, targetDir);
}

console.log('\n✅ Hostinger Package Created Successfully at:');
console.log(`   ${targetDir}`);
console.log('\n📁 Files ready for Hostinger public_html:');
console.log('   - index.html & static page assets');
console.log('   - maheshmokalkar_db.sql (Import into Hostinger phpMyAdmin)');
console.log('   - config.php (Hostinger database configuration)');
console.log('   - api/contact.php (Contact form mailer)');
