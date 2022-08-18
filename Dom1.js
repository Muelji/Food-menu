var button = document.querySelector("button");
var div1   = document.querySelector("div.big1");
var div2 =  document.querySelector("div.big2");
div1.addEventListener("mouseover", function(){ div1.className = "test1", div2.className = "test2"})


div2.addEventListener("mouseover", function(){div1.className = "test1", div2.className = "test2"})
button.addEventListener("mouseover", function(){button.className = "register"})



// var button = document.getElementById("enter")
// var input = document.getElementById("userinput")
// var ul = document.querySelector("ul")

// button.addEventListener("click", function(){
//       var x = document.createElement("li");

//       x.appendChild(document.createTextNode(""))

//      ul.appendChild(x)

// }

// )
 

// ; div1.className="bigtest1"


// var form = document.querySelector('big1');
// big1.addEventListener("mouseenter", function displaymessage()
// {
//    alert("As you begin to fill this form, you agree to our terms and conditions. Any lawsuit filed against the developers will be nullified. ")
  
// }, {once: true});
// var color = [ "rgb(194, 172, 99)", "grey", "rgb(50, 64, 77)", "rgb(134, 247, 90)", "rgb(90, 247, 247)", "violet", "rgb(79, 152, 185)", "orange", "tomato","rgb(90, 210, 247)", "rgb(90, 197, 247)", "aliceblue",];
// document.querySelector("big1").addEventListener("mouseenter", function () {
//     document.querySelector('big1').style.background= color[Math.floor(Math.random() * color.length)]
// });
