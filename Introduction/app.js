// const element1 = document.createElement("h1");
// element1.textContent = "Hello Coder Army";
// element1.className = "element";
// element1.id = "first";
// element1.style.fontSize = "30px";
// element1.style.backgroundColor = "brown";
// element1.style.color = "white";

// const element2 = document.createElement("h2");
// element2.textContent = "Hey, Yo! Broskii";
// element2.className = "element";
// element2.id = "second";
// element2.style.fontSize = "20px";
// element2.style.backgroundColor = "orange";
// element2.style.color = "marine";s

//Better use function calls instead of all this

// attributes = {
//     className: "element",
//     id: "first"
// }

// element = {
//     tag: "h1",
//     textContent: "Hello Coder Army",
//     className: "element",
//     id: "first"
// }

function easy(tag, attributes, children) {

    const element = document.createElement(tag);
    element.textContent = children;

    for(const key in attributes) {
        element[key] = attributes[key]
    }
    return element;
}
const element1 = easy("h1", {className: "element", id: "first"}, "Hello Coder Army");
const element2 = easy("h2", {className: "element", id: "second"}, "Yeah! Buddy😉");


const root = document.getElementById("root");
root.append(element1);
root.append(element2);
