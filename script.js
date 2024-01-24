let form = document.querySelector('form');
let input_box = document.querySelector('.input_box');
let error_msg = document.querySelector('.error_msg')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if (input_box.value == "" || input_box.value == null){
        error_msg.style.display = 'block';
    }else{
        error_msg.style.display = "none"
    }
})
    
