# Filepicker.io on demand package for Meteor

Package to use Filepicker in Meteor. Loads on demand.

## How to install

1. Install Meteorite (if not already installed)

  ```npm install -g meteorite```

2. Add package

  ```mrt add loadpicker```

## How to use

1. Set your Filepicker key on client JS

  ```var key = "your filepicker key";```

2. Call the script on demand from template.yourTemplate.rendered

  ```loadPicker(key);```

3. Call Filepicker from template.yourTemplate.events

  ```filepicker.pick();```


## Sample integration

```
if (Meteor.isClient) {
  Session.set("widgetSet", false);
  var key = "xxxxxxxxxxxxxxxxx";

  Template.hello.rendered = function ( ) { 
    if (!Session.get("widgetSet")) {  
      loadPicker(key);
    }
  };

  Template.hello.events({
    'click button' : function () {
      filepicker.pick();
    }
  });
}
```