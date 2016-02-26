Messages = new Mongo.Collection('messages');
if (Meteor.isClient) {
  // counter starts at 0
  //Session.setDefault('counter', 0);

  Template.messages.helpers({
    messages: function() {
      return Messages.find({});
    }
  });


  Template.messages.events({
    'keypress textarea': function(e, instance) {
      if (e.keyCode == 13) {
        var value = instance.find('textarea').value;
        instance.find('textarea').value = '';

        Messages.insert({
          message: value,
          timestamp: new Date()
            //user.Meteor.userId()
        });
      }
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
  });
}
/*
  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

*/
if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}
