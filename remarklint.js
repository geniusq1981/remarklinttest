var report = require('vfile-reporter');
var unified = require('unified');
var parse = require('remark-parse');
var stringify = require('remark-stringify');
var emphasisMarker = require('remark-lint-emphasis-marker');
var strongMarker = require('remark-lint-strong-marker');

unified()
  .use(parse)
  .use(emphasisMarker, '*')
  .use(strongMarker, '*')
  // ^ two `remark-lint` rules.
  .use(stringify, {emphasis: '*', strong: '*'})
  // ^ `remark-stringify` with settings.
  .process('_Hello_, __world__!', function (err, file) {
    console.error(report(err || file));
    console.log(String(file));
  });