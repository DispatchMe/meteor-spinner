Meteor Spinner
==============

A spinner component for displaying loading with meteor.

##Usage
`meteor add dispatch:spinner`

Wrap any content with the spinner template to have a loading spinner displayed in place of the content.

You can specify one of two spinners at the moment using `type='wave'` or `type='pulse'`.

The spinner will show when `visible=true`.

A class can also be appended using `class='my-class'`.

```
<button class='save'>
  {{#spinner type='wave' visible=isLoading class='my-class'}}
    <span>Save!</span>
  {{/spinner}}
</button>
```

```
var isLoading = new ReactiveVar(false);

Template.example.helpers({
  isLoading: function () {
    return isLoading.get();
  }
});

Template.example.events({
  'click .save': function () {
    isLoading.set(true);
  }
});
```
