if (Meteor.isClient) {
  // Wave Spinner Example Template
  var isLoadingWave = new ReactiveVar(false);

  Template.exampleWave.helpers({
    isLoading: function () {
      return isLoadingWave.get();
    }
  });

  Template.exampleWave.events({
    'click button': function () {
      isLoadingWave.set(true);
    }
  });

  Tracker.autorun(function () {
    if (!isLoadingWave.get()) return;

    Meteor.setTimeout(function () {
      isLoadingWave.set(false);
    }, 3000)
  });

  // Pulse Spinner Example Template
  var isLoadingPulse = new ReactiveVar(false);

  Template.examplePulse.helpers({
    isLoading: function () {
      return isLoadingPulse.get();
    }
  });

  Template.examplePulse.events({
    'click button': function () {
      isLoadingPulse.set(true);
    }
  });

  Tracker.autorun(function () {
    if (!isLoadingPulse.get()) return;

    Meteor.setTimeout(function () {
      isLoadingPulse.set(false);
    }, 3000)
  });
}
