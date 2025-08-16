
let addtask=document.getElementById("addtask")
let del =document.getElementById("del")
let list=document.getElementById("list")


let solution =[]

function answer(){

    list.innerHTML='';
    solution.forEach((task,index)=>{
        const listitem=document.createElement('li')
        listitem.innerHTML=`${task.task} - ${task.status} <button id="deletebtn" onClick="delt(event)"> delete  `
        list.appendChild(listitem)

    })

}  


addtask.addEventListener('click',()=>{
let inpu=document.getElementById("inpu")
let option=document.getElementById("option")


console.log(inpu.value)
console.log(option.value)

solution.unshift({task:inpu.value,status:option.value})
answer()

inpu.value=[]
option.value="completed"
})


del.addEventListener('click',()=>{
 
    solution=[];
    answer()



})


function delt(event){
    event.target.parentElement.remove()
}