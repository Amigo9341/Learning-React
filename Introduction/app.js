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
//     style: {
//      fontSize:"30px", 
//      backgroundColor: "orange", 
//      color: "white"
//      }
// }

// element = {
//     tag: "h1",
//     textContent: "Hello Coder Army",
//     className: "element",
//     id: "first"
// }
const React = {                                                     //React is a library of JS.
    createElement: function(tag, attributes, children) {            //React is nothing but an Object of JS.

    const element = document.createElement(tag);
    element.textContent = children;

    for(const key in attributes) {
        if(key === 'style'){
            Object.assign(element.style, attributes.style);         //When we have to copy properties of one object into Another
        }
        else{
            element[key] = attributes[key];
        }
        //element[key] = attributes[key]                    Style is the read only property. And wo aise assign nahi hota hai
    }
    return element;
}
}

const ReactDOM = {
    render: function(child, parent) {
        parent.append(child);

    }
}
const element1 = React.createElement("h1", {className: "element", id: "first",style: {fontSize:"30px", backgroundColor: "orange", color: "white"}}, "Hello Coder Army");
const element2 = React.createElement("h2", {className: "element", id: "second",style: {fontSize:"20px", backgroundColor: "pink", color: "green"}}, "Yeah! Buddy😉");


const root = document.getElementById("root");
// root.append(element1);
// root.append(element2);
ReactDOM.render(element1, root);
ReactDOM.render(element2, root);
