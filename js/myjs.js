let todoinput = document.querySelectorAll('#what-to-do-input');
let button = document.querySelector('#gonna-do');
let nothing =document.querySelector('#nothing');
let whattodo = document.querySelector('#what-to-do');
let wrongmassage = document.getElementById('wrongmassage');
let closewrongmassagebtn = document.getElementById('close-wrong-massage-btn');
let showmodel = document.getElementById ('showmodel');
let model = document.getElementById('modle') ;
console.log( model)

let allthings = [];

let addsomething = (today,thisweek,thismonth,Image) =>{ 
    



     nothing.classList.add('none');
     whattodo.innerHTML += ` 
    


     <div class="card col-lg-4 col-6">
     <img src= "${Image}">
     <div class="card-body">
     
     <h2>  gonna do today : ${today}  </h2>
     <h2>  gonna do thisweek : ${thisweek}  </h2>
     <h2>  gonna do thismonth : ${thismonth} </h2>
     </div>
     <i id="close-wrong-massage-btn" class="deletetask btn btn-danger fa-solid fa-xmark"></i>
     </div>
     
     
     
     
   
  
    `;  
    showmodelfunction();

    todoinput[0].value = ""; 

}

let rendersomething =() => {
    tody = todoinput[0].value;
    thisweek = todoinput[1].value;
    thismonth = todoinput[2].value;
    Image = todoinput[3].value;

   let person ={
       today : tody,
       thisweek : thisweek,
       thismonth : thismonth,
       Image : Image,

   }

   

   console.log(allthings);

   addsomething(person.today, person.thisweek, person.thismonth, person.Image);

   


}




let nothingshow = () => { if(whattodo.childElementCount== 0)
    {
        nothing.classList.remove('none');
    }

}


let closewrongmassagefunction = function(){
    wrongmassage.classList.remove('none');
}



button.addEventListener('click',rendersomething);

closewrongmassagebtn .addEventListener('click',closewrongmassagefunction);

wrongmassage.addEventListener('click',function(e)  {
   if(e.target.classList.contains('removemassage')){ 
    
    e.target.parentElement.classList.add('none');}
   
   console.log(e.target);
    }

)


document.addEventListener('click',function(e){
    if(e.target.classList.contains('deletetask')){
        e.target.parentElement.remove();
        nothingshow();
    }
    
})

 let showmodelfunction = () => {
     model.classList.toggle('block');
 }

 showmodel.addEventListener('click',showmodelfunction)


