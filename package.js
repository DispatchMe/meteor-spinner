Package.describe({
  name: 'dispatch:spinner',
  version: '0.0.5',
  summary: 'Spinner component for displaying loading with blaze.'
});

Package.onUse(function (api) {
  api.use([
    //core
    'templating@1.1.1',

    // atmosphere
    'raix:handlebar-helpers@0.2.4'
  ], 'web');

  api.addFiles([
    'spinner.html',
    'spinner.css'
  ], 'web');
});
