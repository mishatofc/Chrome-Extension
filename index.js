let inputText = [];

const contentWrapper = document.getElementById('content-wrapper');
const outputEl = document.getElementById('todo-el');
const inputEl = document.getElementById('input-el');

let addBtn = document.getElementById('add-button');




addBtn.addEventListener('click', function(){

   inputText.push(inputEl.value);
   inputEl.value = ""
   
   contentWrapper.style.display = 'block';

   renderText ()
  


});

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
      console.log('key pressed')  
      renderText (); 
       
    }
});









    

function renderText (){



    let listItems = "";

    for (let i = 0; i < inputText.length; i++) {
        
      
        
       
        listItems += "<li>" + inputText[i] + "</li>"
    }
    
    outputEl.innerHTML = listItems
    
    

}








