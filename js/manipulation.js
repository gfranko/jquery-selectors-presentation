// append()
// --------
/*

$("li").each(function() {

  var newElem = $(this).clone();

  $(this).append(newElem);

});

*/

// appendTo()
// ----------
/*

$("li").each(function() {

  var newElem = $(this).clone();

  newElem.appendTo($(this));

});

*/

// after()
// -------
/*

$("li").each(function() {

  var newElem = $(this).clone();

  // insertAfter
  $(this).after(newElem);

});

*/

// insertAfter()
// -------------
/*

$("li").each(function() {

  var newElem = $(this).clone();

  // insertAfter
  newElem.insertAfter($(this));

});

*/


// html()
// ------
/*

var ul = "",
  arr = ["Lara Croft", "Master Chief", "Doc McStuffins", "Snooki", "Altaire", "Cartman", "Scooby-Doo", "Donald Trump", "Donald Duck", "Jack Bauer (CTU agent)", "George RR Martin", "Rick Grimes", "Joan"];

for(var x = 0; x <= arr.length - 1; x += 1) {

  ul += "<li id='item-" + (x + 1) + "'><span>" + arr[x] + "</span></li>";

}

$("article ul").html(ul);

*/

// text()
// ------
/*

var arr = ["Lara Croft", "Master Chief", "Doc McStuffins", "Snooki", "Altaire", "Cartman", "Scooby-Doo", "Donald Trump", "Donald Duck", "Jack Bauer (CTU agent)", "George RR Martin", "Rick Grimes", "Joan"];

$("ul li span").each(function(index) {

  $(this).text(arr[index]);

});
*/