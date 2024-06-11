// ADD NEW ITEM TO END OF LIST
var cream = document.createElement("li");
cream.textContent = "cream";
document.querySelector("ul").appendChild(cream);

// ADD NEW ITEM START OF LIST
var kale = document.createElement("li");
kale.textContent = "kale";
document.querySelector("ul").prepend(kale);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll("li");
listItems.forEach(function(item) {
    item.classList.add("cool");
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var itemCount = listItems.length;
// didnt know how to do it without adding a span in html, prolly would have to learn to add a span using JS
// itemCount.classList.add("h2 span");
document.querySelector("h2").textContent += (" " + itemCount);
