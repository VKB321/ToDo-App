window.onload=()=>{
    Show_All()
}
 function Show_All(){
    document.getElementById('head').innerHTML='Todo list - All' //    <h1 id="head"></h1>
    let todo = document.getElementById('todo')  // <div id="todo"></div>
    todo.innerHTML = '';
    fetch(`https://jsonplaceholder.typicode.com/todos`).then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data)
       for(let each of data){
           //console.log(each)
           let p = document.createElement('p')
           
           if(each.completed){
            p.style.color ="green";
           }else{
            p.style.color ="red";
           }
           p.textContent =each.title;
           todo.appendChild(p)
       }
    }).catch(data=>{
        alert('sorry error occured')
    })
 }

 function Completed(){
    document.getElementById('head').innerHTML='Todo list - Completed'
    let todo = document.getElementById('todo')
    todo.innerHTML = '';
    fetch(`https://jsonplaceholder.typicode.com/todos`).then(response=>{
        return response.json()
    }).then(data=>{
        //console.log(data)
       for(let each of data){
           //console.log(each)
           let p = document.createElement('p')
           if(each.completed){
            p.textContent =each.title;
           todo.appendChild(p)
           }
       }
    })
 }

 function Pending(){
    document.getElementById('head').innerHTML='Todo list - Pending'
    let todo = document.getElementById('todo')
    todo.innerHTML = '';
    fetch(`https://jsonplaceholder.typicode.com/todos`).then(response=>{
        return response.json()
    }).then(data=>{
        //console.log(data)
       for(let each of data){
           //console.log(each)
           let p = document.createElement('p')
           if(!each.completed){
            p.textContent =each.title;
           todo.appendChild(p)
           }
       }
    })
 }