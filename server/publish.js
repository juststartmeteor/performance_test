Meteor.publish("items", function () {
    return Items.find({}, {fields: {first: 1, second: 1, third: 1}});
    // return Items.find({}, {fields: {first: 1, second: 1}, limit: 100});
});

// Meteor.publish("filterItems", function (condition) {
//   var regex = new RegExp(condition);
//
//   return Items.find({$or: [{first: regex}, {second: regex}, {third: regex}}, {fields: {first: 1, second: 1}, limit: 100});
// });
