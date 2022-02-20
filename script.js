const pass = document.querySelector('#password');
const conPass = document.querySelector('#confirm_password');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const btn = document.querySelector('button#submit');
const inputLines = document.querySelectorAll('.mainForm input');

inputLines.forEach(line =>{

    line.addEventListener('click', ()=>{
        btn.disabled = false;
    
    })

}) 

btn.addEventListener('click', () => {
    
    if(pass.value != conPass.value){

        pass.classList.toggle('inputError');
        
        conPass.classList.toggle('inputError');
      
        
        btn.disabled = true;
       
    }if( email.value.trim().length < 1){
        email.style.border = "1px solid red";
        btn.disabled = true;
        
    }if( pass.value.trim().length < 1){
        pass.style.border = "1px solid red";
        btn.disabled = true;

    }if( conPass.value.trim().length < 1){
        conPass.style.border = "1px solid red";
        btn.disabled = true;

    }if( firstName.value.trim().length < 1){
        firstName.style.border = "1px solid red";
        btn.disabled = true;

    }if( lastName.value.trim().length < 1){
        lastName.style.border = "1px solid red";
        btn.disabled = true;
    }
    else{
        btn.disabled = false;
    }
})

