var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

button.addEventListener("click", function(){
      var x = document.createElement("li");

      if(input.value !==""){

      x.append(document.createTextNode(input.value))

     ul.append(x);
    //  alert("Congratulations you have successfully added" +" " + input.value +" " + "to your order")
    input.value="";

}}

)


input.addEventListener("keypress", function(event){

    var x = document.createElement("li");
    if (event.key=="Enter"){
        if(input.value !==""){
            x.append(document.createTextNode(input.value))
            ul.append(x);
            
            input.value="";
        }
        
    }

}


)



var order = document.getElementById("order")
order.addEventListener("click", function(){
    
    alert("Congratulations you have successfully placed your order")

            
}
)