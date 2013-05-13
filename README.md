# Filepicker.io on demand package for Meteor

Package to use Filepicker in Meteor, loads on demand, optional callback.

## How to install

1. Install Meteorite (if not already installed)

  ```
  npm install -g meteorite
  ```

2. Add package

  ```
  mrt add loadpicker
  ```

## A. How to use with upload button

1. Set your Filepicker key on client JS

  ```
  var key = "your filepicker key";
  ```

2. Call the script on demand from template.yourTemplate.created or template.yourTemplate.rendered

  ```
  loadPicker(key);
  ```

3. Call Filepicker from template.yourTemplate.events with a click or submit event

  ```
  filepicker.pick();
  ```

## Sample A: integration

```
if (Meteor.isClient) {
  Session.set("widgetSet", false);
  var key = "xxxxxxxxxxxxxxxxx";

  Template.home.rendered = function ( ) { 
    if (!Session.get("widgetSet")) {  
      loadPicker(key);
    }
  };

  Template.home.events({
    'click button' : function () {
      filepicker.pick();
    }
  });
}
```

## B. How to use with drop widget

1. Set your Filepicker key on client JS

  ```
  var key = "your filepicker key";
  ```

2. Call the script on demand from template.yourTemplate.created or template.yourTemplate.rendered with callback

  ```
  loadPicker(key, callback);
  ```

3. Call Filepicker from template.yourTemplate.events and include callback function to create widget

  ```
  var cb = function () {
        filepicker.constructWidget(document.getElementById('constructed-widget'));
      };
  loadPicker(key, cb);
  ```


## Sample B: integration with widget and callback

```
if (Meteor.isClient) {
  Session.set("widgetSet", false);
  var key = "AX8PSEzsES7qCDemGFELoz";

Template.hello.rendered = function () {
    if (!Session.get("widgetSet")) {  
      var cb = function () {
        filepicker.constructWidget(document.getElementById('constructed-widget'));
      };
      loadPicker(key, cb);
    }
  };
```

HTML for sample 2 (include the special type tag!):

&lt;div id="constructed-widget" value="empty" type="filepicker-dragdrop" style="display: none;">
&lt;/div>







