const date =new Date();//creating a date object to get today date 
alert("Welcome to Ghada Protfile The Date is: "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
//using alert to show a pop up messige contining welcome and the date using 
//date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear() methods

// get the the button from the html file
const button1 =document.getElementById("all");
const button2 =document.getElementById("Web_Devalpment");
const button3 =document.getElementById("Hardwarye_Design");
const button4 =document.getElementById("System");
// Geting the boxses that containe diffrent projuects 
const boxes = document.getElementsByClassName("box");

//a function to hide or display the projucts
function filter_projuct(type){
    for (let i = 0; i < boxes.length; i++) {//go over all the boxses one by one
      const element = boxes[i];
      const boxType = element.getAttribute("data-name"); // Get the tpey of element based on what is put in html file
      if (type === "all" || boxType === type) {//remove the css hide class if the element is the same type or the type is all
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");//if not all or not the same type add css class hide
      }
}
}
button1.addEventListener("click", function(){filter_projuct("all")})//if button1 do the function with type all
button2.addEventListener("click", function(){filter_projuct("Web_Devalpment")})//if button2 do the function with type Web_Devalpment
button3.addEventListener("click", function(){filter_projuct("Hardwarye_Design")})//if button3 do the function with type Hardwarye_Design
button4.addEventListener("click", function(){filter_projuct("System")})//if button4 do the function with type System

const button5 =document.getElementById("cat");//button for grnarating new fact
const fact =document.getElementById("fact");//the p element that we will change

button5.addEventListener("click", function (){//if button clicked fetch from a puplice API
fetch("https://meowfacts.herokuapp.com/")
  .then(function (response) {
    if (!response.ok) {     //checkes for error in fetching 
      throw new Error("HTTP " + response.status);
    }
    return response.json();           
  })
  .then(function (data) {//fetch data
    console.log(data)
    fact.innerHTML=data.data[0] //changing the <p> in the html with the new data
  })
  .catch(function (err) {
    fact.innerHTML="there is an error";//handilling the error
  });

});

