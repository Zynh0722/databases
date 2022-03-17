// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  toggle: function(name) {
    if (Friends._data[name]) {
      Friends._data[name] = false;
    } else {
      Friends._data[name] = true;
    }
  }

};