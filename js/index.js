var indicator = 0; 

//Method for adding li node. 
document.getElementById("AddButton").addEventListener('click', function(){
    event.preventDefault(); 
    console.log("Bien aki"); 
    var input = document.getElementById("userInput").value; 
    var ul = document.getElementById("myUL"); 

    // create li node. 
    var liNode = document.createElement('li'); 
    var textNode = document.createTextNode(input);
    var createdButton = document.createElement("button"); 
    var createdButton2 = document.createElement("button"); 
    var span = document.createElement("span"); 
    liNode.setAttribute("id", "liC"); 

    createdButton.innerHTML = "check"; 
    createdButton2.innerHTML = "delete"; 
    span.appendChild(textNode); 
    liNode.appendChild(span);
    liNode.appendChild(createdButton); 
    liNode.appendChild(createdButton2); 

    //liNode.setAttribute("style", "font-style: italic; list-style-position:inside; border: 1px solid black; display: block; padding: 25px 50px 25px; white-space: pre;"); 
    

    ul.appendChild(liNode); 
    document.getElementById("userInput").value = ""; 

    createdButton.addEventListener('click', function(){
        if(indicator == 0){
            span.setAttribute("style", "text-decoration: line-through;"); 
            indicator = 1; 
        }
        else{
            span.setAttribute("style", "text-decoration: none;"); 
            indicator = 0; 
        }
        
    })

    createdButton2.addEventListener("click", function(){
        ul.removeChild(liNode); 
    })

}); 

