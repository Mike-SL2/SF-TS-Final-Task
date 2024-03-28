// Create a "close" button and append it to each list item
function generateSpanCloseElement() {
    var span = document.createElement("SPAN"), txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    return span;
}
var myNodelist = document.getElementsByTagName("LI");
function putSpanCloseElement() {
    var myNodeListLength = myNodelist.length;
    for (var i = 0; i < myNodeListLength; i++) {
        myNodelist[i].appendChild(generateSpanCloseElement());
    }
}
putSpanCloseElement();
// Click on a close button to hide the current list item
function hideElement() {
    var div = this.parentElement;
    div.style.display = "none";
}
var close1 = document.getElementsByClassName("close"), close1Length = close1.length;
for (var i = 0; i < close1Length; i++) {
    var close2 = close1[i];
    close2.addEventListener('click', hideElement);
}
// Add a "checked" symbol when clicking on a list item
var list1 = document.querySelector('ul');
list1.addEventListener('click', function (ev) {
    var htmlTarget = ev.target;
    if (htmlTarget.tagName === 'LI') {
        htmlTarget.classList.toggle('checked');
    }
}, false);
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li"), myInput = document.getElementById("myInput"), inputValue = myInput === null || myInput === void 0 ? void 0 : myInput.value, t = document.createTextNode(inputValue);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        li.appendChild(t);
        var myUL = document.getElementById("myUL");
        myUL === null || myUL === void 0 ? void 0 : myUL.appendChild(li);
        myInput.value = '';
        var span = generateSpanCloseElement();
        li.appendChild(span);
        span.addEventListener('click', hideElement);
    }
}
