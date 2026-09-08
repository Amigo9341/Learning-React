let count = 0;

const txt = document.createElement("p");
txt.textContent = `Countdown : ${count}`;

const button = document.createElement("button");
button.textContent = "Increment";

const main = document.getElementById("root");
main.append(txt, button);

button.addEventListener("click", ()=> {
    count++;
    txt.textContent = `Countdown : ${count}`
    console.log(count);
})