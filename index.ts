// Create a "close" button and append it to each list item
function generateSpanCloseElement(): HTMLElement {
    let span: HTMLElement = document.createElement("SPAN"),
    txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt); return span;
}

const myNodelist: HTMLCollection = document.getElementsByTagName("LI");
function putSpanCloseElement(): void {
    const myNodeListLength: number = myNodelist.length;
    for (let i: number = 0; i < myNodeListLength; i++) {
        myNodelist[i].appendChild(generateSpanCloseElement());
    }
}
putSpanCloseElement();

// Click on a close button to hide the current list item
function hideElement(): void {
    const div: HTMLElement = this.parentElement as HTMLElement;
    div.style.display = "none";
}
const close1: HTMLCollection = document.getElementsByClassName("close"),
    close1Length: number = close1.length;
for (let i: number = 0; i < close1Length; i++) {
    let close2 = close1[i] as HTMLElement;
    close2.addEventListener('click', hideElement);
}
// Add a "checked" symbol when clicking on a list item
const list1 = document.querySelector('ul') as HTMLUListElement;
list1.addEventListener('click', function (ev: MouseEvent): void {
    const htmlTarget = ev.target as HTMLElement;
    if (htmlTarget.tagName === 'LI') {
        htmlTarget.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(): void {
    const li: HTMLLIElement = document.createElement("li"),
        myInput = document.getElementById("myInput") as HTMLInputElement,
        inputValue = myInput?.value as string,
        t: Text = document.createTextNode(inputValue);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        li.appendChild(t);
        const myUL = document.getElementById("myUL") as HTMLUListElement;
        myUL?.appendChild(li);
        myInput.value = '';
        const span: HTMLElement = generateSpanCloseElement();
        li.appendChild(span);
        span.addEventListener('click', hideElement);
    }
}