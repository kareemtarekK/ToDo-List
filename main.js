// selecting my DOM
let input = document.querySelector(".header-div input");
let addSpan = document.querySelector(".header-div .plus");
let count = document.querySelector(".span-count");
let completed = document.querySelector(".span-completed");
let tasks_contents = document.querySelector(".tasks-contents");
let cont = document.querySelector(".cont");
let ok = document.querySelector(".ok");
let text = document.querySelector(".text");
let arr = [];
let c = 0;





// let arrSpan = [];
// close sweet alert
ok.onclick = ()=>{
    cont.style.display = "none";
    input.focus();
}
// focus on input when page is loading
window.onload = () =>{
    input.focus();
    c = window.localStorage.length;
    calculate();
    if(window.localStorage.length > 0){
    document.querySelector(".tasks-contents .no-message").remove();
    }
        // createNoMessage();
        // arr = window.localStorage.getItem("tex")

}
   if(window.localStorage.length > 0){

   for(let i=0; i< window.localStorage.length; i++){
    tasks_contents.innerHTML += window.localStorage.getItem(`span${i}`);
    // console.log(data);
   }
    
    
}
addSpan.onclick = () => { 
    if(input.value === ''){
    cont.style.display = "block";
    }
   else{
     if(arr.includes(input.value)){
        Duplicate();
        input.value = '';
        input.focus();
    } else{
        let noMessage = document.querySelector(".tasks-contents .no-message");
        if(document.body.contains(noMessage)){
        // remove span message
        noMessage.remove();
        }
        text.textContent = "enter specific task";
        // create main span
        let added_task = document.createElement('span');
        // create delete span
        let deleteSpan = document.createElement('span');
        // text insside span
        let textAdded_task = document.createTextNode(input.value);
        // delete text inside deleteElement
        let deleteText = document.createTextNode("delete");
        // add classname to perform well with css
        added_task.className = "added-task";
        // add classname delet to deleteSpan
        deleteSpan.className = 'delete';
        // append values into its element
        deleteSpan.appendChild(deleteText);
        added_task.appendChild(textAdded_task);
        added_task.appendChild(deleteSpan);
        tasks_contents.appendChild(added_task);
        // after creating main span reset input again 
        input.value = '';
        // focus on input
        input.focus();
        calculate();
        arr.push(added_task.firstChild.nodeValue);
        // localStorage.setItem("tex" , arr);
        // console.log(localStorage.getItem('tex'));
        
        // arrSpan.push(added_task.outerHTML);
        window.localStorage.setItem(`span${c}` , added_task.outerHTML);
        c++; 
    }
   }
    
}





// add click funtion on delete span || task content
document.addEventListener('click' , function(e){
    if(e.target.className === 'delete'){
        e.target.parentElement.remove();
        // ask(e.target.parentElement.outerHTML);
        // calling function to calc count && completed
        calculate();
        if(tasks_contents.childElementCount === 0){
            createNoMessage();
        }
    }
    if(e.target.classList.contains('added-task')){
        e.target.classList.toggle('finished');
        // localStorage.setItem("finish" , e.target.outerHTML);
        // calling function to calc count && completed
        calculate();
    }
});





// create element (Nomessage)
function createNoMessage(){
    let newNoMessage = document.createElement('span');
    let textNoMessage = document.createTextNode('there are now tasks at that moment !');
    newNoMessage.className = 'no-message';
    newNoMessage.appendChild(textNoMessage);
    tasks_contents.appendChild(newNoMessage);
}
// calculate count and completed  
function calculate(){
    count.innerHTML = document.querySelectorAll(".tasks-contents .added-task").length;
    completed.innerHTML = document.querySelectorAll(".tasks-contents .finished").length
}
let clear = document.querySelector(".clear");
clear.onclick = () => {
 let x = document.querySelectorAll(".tasks-contents .added-task");
 for(let i=0; i < x.length; i++){
     x[i].remove();
     window.localStorage.clear();
     c = 0;
 }
    if(tasks_contents.childElementCount === 0){
        
        createNoMessage();
        deleteAll();
        // arr.pop();
    }
    calculate();
    input.focus();
}
let cCompleted = document.querySelector(".cCompleted");
cCompleted.onclick = ()=>{
    let y = document.querySelectorAll(".tasks-contents .finished");
    for(let i=0; i < y.length; i++){
        y[i].remove();
        // localStorage.removeItem('finish')
    }
    if(tasks_contents.childElementCount === 0){
        
        createNoMessage();
        completedTasks();
        // arr.pop();
    }
    calculate();
    input.focus();
}



function completedTasks(){
    swal({
        title : "completed",
        text : "All Completed Tasks Are Dropped",
        icon : "success",
        className : "com"
    })
}



function Duplicate(){
    swal({
        title : "Duplicate",
        text : "Duplicating Task Enter A New Task !!!",
        icon : "warning",
        className : "dup"
    })
}




function deleteAll(){
   swal({
       title : "done",
       text : "All Tasks Are deleted Successfully",
       icon : "success",
    className : "del"
   })
}









// function ask(ele){
//     for(let i = 0; i < localStorage.length; i++){
//         if(ele === localStorage.getItem(`span${i}`)){
//             localStorage.removeItem(`span${i}`);
//         }
//     }
// }