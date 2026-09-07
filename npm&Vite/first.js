//Humlog pehle dekh rhe the ki alag alag packages like React, ReactDOM, Babel use kar rhe the jo ki external sources hai.
//And they took extra space, so why not get the packages in the system itself, but not by creating another file and linking it.
//We will be doing it with the help of "npm". npm doesnt have a full form but people call it Node Package Manager.
//npm is a central directory which has so many files(ofc, JS ke sare like React, ReactDOM, Babel to hai hi).

//devDependencies are responsible only for development not production. Vite is responsible for development. It's a devDependency.
//dependencies are responsible for both development and production. Vite isn't responsible for production. 
//React and ReactDOM are dependencies as they are responsible for both development as well as production.

//If someone has made time.js for time and I have to use it in my file of calendar.js, then I will use the time.js in it not again make it by myself.
//And now if I am making something like tracker then, i will be needing calendar.js which automatically contains time.js. 
//In this way for Tracker, I am dependent on calendar.js and for calendar.js, I am dependent on time.js.
//This is practically how dependencies work.

// Suppose 19.2.3 is there in Vite or React. Here, 19 is major, 2 is minor, and 3 is patch. If patch is changed say 3 into 4, it means that that there was some bug which was fixed.
//If some new feature or a new function has been added, the minor will be changed from 2 to 3.  
//When the minor changes it will be like 19.3.0 (minor becomes 0).

//If some changes like addition of one more parameter in one of the functions be done then the major changes from 19 to 20.
//When the major changes it will be like 20.0.0 (major and minor become 0).
//"^" is carat. If carat is present in first, it means that it will accept all the upcoming changes or updates.
//If the carat is not present then it won't accept any changes. It will stay in its current state. 