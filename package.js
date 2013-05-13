Package.describe({
  summary: "filepicker.io script repackaged for Meteor"
});

Package.on_use(function (api) {
  api.add_files([
    'loadpicker.js'
  ],'client');
});