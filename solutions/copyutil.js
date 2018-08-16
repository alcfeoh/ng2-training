var cp = require('copyfiles');

cp([  'solutions/'+process.argv[2] + '/*', './src/app'], true, () => {});
cp([  'solutions/'+process.argv[2] + '/**/*', './src/app'], 2, () => console.log('Done'));
