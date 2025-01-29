const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/rug.jpg") {
        myImage.setAttribute("src", "images/blue.jpg");
    } else {
        myImage.setAttribute("src", "images/rug.jpg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to the bad taste chronicles, ${myName}`;
    }
  }
  

myButton.addEventListener("click", () => {
    setUserName();
  });