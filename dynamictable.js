function elementID(id) {
  return document.getElementById(id);
}

var friends = {};
var array = [];

function pushNameArray() {

  array = [];

  var nameStored = elementID('nameInput');
  var emailStored = elementID('emailInput');
  var cellStored = elementID('cellInput');
  friends.Name = nameStored.value;
  friends.Email = emailStored.value;
  friends.Cell = cellStored.value;
  array.push(friends);
}

function displayOnDocument() {
  for (var i = 0; i < array.length; i++) {
    var name = array[i].Name;
    var email = array[i].Email;
    var cell = array[i].Cell;
    var dynamicTag = '<tr>';
    dynamicTag += '<td>' + name + '</td>';
    dynamicTag += '<td>' + email + '</td>';
    dynamicTag += '<td>' + cell + '</td>';
    dynamicTag += '</tr>';
    elementID('tableBody').innerHTML += dynamicTag;
  }
}

function addFriendsBtnFunction() {
  pushNameArray();
  displayOnDocument();
}
