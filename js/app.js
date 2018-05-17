// Version 0.1 
//Se crea un evento para que aparezca el text area, y desaparezca el primer input. 

var transform = document.getElementById ("list");
transform.addEventListener('click', function(){
    var lista1 = document.getElementById("title-list");
    lista1.style.display= "block";
    transform.style.display="none";

});

var saveListButton=document.getElementById("save-list");//Creando el evento para el boton que le pone el nombre al titulo y lo mustra. Ocultar el formulario.
saveListButton.addEventListener('click', function(){
var saveValue=document.getElementById("get-value");
var ListButton=saveValue.value;
var contentValue=document.createTextNode(ListButton);
var father=document.getElementById("title-list");
var tasksTitle=document.getElementById("tasks-title");
tasksTitle.appendChild(contentValue);
// father.appendChild(tasksTitle);
tasksTitle.insertBefore(tasksTitle, saveValue );
});

   // }

//Version 2.0 
var newTaskButton = document.getElementById("save-task");
newTaskButton.addEventListener('click', function(){
    var TaskContent = document.getElementById("taskContent");
    var content = TaskContent.value; //Se guarda valor del input en la variable.
    var newParagraph = document.createElement("p");
    var textNewContent = document.createTextNode(content);
    newParagraph.appendChild(textNewContent);
    document.getElementById("container").appendChild(newParagraph); //Se inserta el "p" creado dentro del div contenedor, y se muestra en pantalla.
});   




