Template.items.helpers({
  items: function () {

    var limit = Session.get('showMore') ? 20 + Session.get('showMore') * 20 : 20;

    if (Session.get('keyword')) {
      var keyword = Session.get('keyword');
      var regex = new RegExp(keyword);
      data =  Items.find({$or: [{first: regex}, {second: regex}, {third: regex}]}, {limit: limit});

      return data;
    } else {
      data = Items.find({}, {limit: limit});

      return data;
    }
  }
});

Template.body.helpers({
  amount: function () {
    if (Session.get('keyword')) {
      var keyword = Session.get('keyword');
      var regex = new RegExp(keyword);
      amount = Items.find({$or: [{first: regex}, {second: regex}, {third: regex}]}).count();

      return amount;
    } else {
      amount = Items.find({}).count();

      return amount;
    }
  }
});
