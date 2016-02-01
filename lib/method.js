Meteor.methods({
  initDocs: function () {
    if (Items.find().count() < 5000) {
      for (var i = 1; i <= 5000; i++) {
        Items.insert({
          first: 'first_' + i,
          second: 'second_' + i,
          third: 'third_' + i,
          createdAt: new Date()
        });
      }
    }
  }
});
