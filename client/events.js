var showMore = 0;

Template.body.events({
  // 'submit .search-form': function (events) {
  'keyup .search-form [name="keyword"]': function (events) {
    events.preventDefault();

    Session.set('showMore', 0);
    showMore = 0;
    // var input = events.target.keyword.value;
    var input = $('.search-form [name="keyword"]').val();
    Session.set('keyword', input);
  },
  'submit .search-form': function (events) {
    events.preventDefault();
  }
});

Template.items.events({
  'click [name="more"]': function () {
    showMore++;
    Session.set('showMore', showMore);
  }
});
