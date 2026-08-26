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
// const React = {                                                     //React is a library of JS.
//     createElement: function(tag, attributes, children) {            //React is nothing but an Object of JS.

//     const element = document.createElement(tag);
//     element.textContent = children;

//     for(const key in attributes) {
//         if(key === 'style'){
//             Object.assign(element.style, attributes.style);         //When we have to copy properties of one object into Another
//         }
//         else{
//             element[key] = attributes[key];
//         }
//         //element[key] = attributes[key]                    Style is the read only property. And wo aise assign nahi hota hai
//     }
//     return element;
// }
// }

// const ReactDOM = {
//     render: function(child, parent) {
//         parent.append(child);

//     }
// }
// const element1 = React.createElement("h1", {className: "element", id: "first",style: {fontSize:"30px", backgroundColor: "orange", color: "white"}}, "Hello Coder Army");
// const element2 = React.createElement("h2", {className: "element", id: "second",style: {fontSize:"20px", backgroundColor: "pink", color: "green"}}, "Yeah! Buddy😉");


// // const root = document.getElementById("root");
// // root.append(element1);
// // root.append(element2);
// //ReactDOM.render(element1, root);                    //Html mai jo bhi root id mai likha hai wo isse replace ho jayega
// //ReactDOM.render(element2, root);                    //Agar kuch <body> mai likha hai but Id mai nahi to wo execute hoga sirf Id wala replace hoga
// // ReactDOM.render(element1, document.getElementById("root"));
// // ReactDOM.render(element2, document.getElementById("root"));

// const div = React.createElement("div", null, element1,element2,"Girls are very tough to understand.");

// //Main container to render react elements
// const root  = ReactDOM.createRoot(document.getElementById("root"));

// root.render(div);


//JSX = JavaScript XML
//JSX--> React.createElement()
//const element = React.createElement("h1", {id: "ooh"}, "Hello Coder Army!"); --> Isi format mai babel convert kar dega niche wale code ko
// const element = React.createElement("h1", {id: "ooh"}, "Hello Coder Army!");

const element = <h1 id = "ooh">Hello Coder Army!</h1>;

const element2 = (<div>                              //Both h1 and h2 are stored under 'div' as only one among h1 and h2 can be there in element2.
    <h1>Hey! yooo</h1>                               //Brackets use karna is a good habit
    <h2>Dragon God Orsted!</h2>
</div>);

// const element2 = React.createElement("div", null, 
//     React.createElement("h1", null, "Hey! yooo"),
//     React.createElement("h2", null, "Dragon God Orsted!"))               //Representation of above

//ReacT component is nothing but a React function where its first letter(name of function) should be capital
//It should return JSX

function App(name) {
    return <h1>Hello Coder Armyyyy with {name}</h1>                 //JSX Code
}

//const a = App("AMAN");
//text/element : JavaScript ka expression iske andar {} likh sakte hai
//Number,String,true,false,null,undefined,array,object

//Number,String,Array mast chalega
//true,false,null,undefined render to ho jayega but chalega nahi
//Object to kuchh v nahi hoga. Sidhe ERROR throw karega

const age = 10;
const isLoggedIn = false;
const random = <h2>Hello My Brothaas. My age is {age}</h2>
const random1 = <h3>Money follows my Brothaaaa. Money Follows{isLoggedIn?<h2>LOGGED IN</h2>:<h2>NOT LOGGED IN</h2>}</h3>;


const courses = ["HTML","CSS","JAVASCRIPT","REACT"];
const newArray = (
    <ul>
    {courses.map(abc=><li>{abc}</li>)}
    </ul>
    )                                           //Upar wala method is how it should be written. Niche wala is the basic method to write for an Array.
// const newArray = (
//     <ul>
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>JAVASCRIPT</li>
//         <li>REACT</li>
//     </ul>
// )

function Now(props) {           //yaha pe props parameter catch karega niche wale name and age ko 
    return <h1>Hola Madridistas!! {props.name} {props.age}</h1>
}

// {name:"Amigo
//     age:25"}         aise wrap ho jayega

const b = <Now name = "Amigo" age = {25} ></Now>             //Aise v call ho skta hai function. Isme basically sikhe hai ki iss format mai parameters kaise add kar sakte hai
//Parameter wala string doesnt require here {} but int does.

const ab = {color: "blue", backgroundColor: "orange"};
const ayayo = <h2 id = "title" className="first" style={ab}>This is your chance Mannn</h2>

function Header(props) {
    return(
    <h1>Welcome to THE INDIAN ELECTION COMMISSION {props.name}</h1>)
}
function Main({user}) {
    return(
    <>
    <h2>Hey {user.name}</h2>
    <h3>Great that u have arrived from {user.city} to Vote</h3>
    <p>{user.name} can only vote if his age more than 18.</p>
    <p>{user.age>= 18 ? "You can Vote" : "You can't Vote."}</p>
    </>)
}
function Footer() {
    return(
    <h3>You have reached the end of your Page</h3>)
}

function Executor() {
    return(
    <>              
    <Header id = "here" name = "Aman" ></Header>           //can also be closed directly
    <Main user ={{name: "Ravish", city:"Patna", age:"29"}}></Main>
    <Footer></Footer>
    </>)    //Can use this 'Fragmented' instead of 'div'. Fragment is a React thing
}

const root  = ReactDOM.createRoot(document.getElementById("root"));


root.render(App("Aman"));
// root.render(<App/>);                 This and above are same.
root.render(random);
root.render(random1);
root.render(newArray);
root.render(b);
root.render(ayayo);
root.render(<Executor/>);

                        

// root.render(element);
// root.render(element2);
