const form_btn = document.getElementById("btn");
const email_regex = /^[^@]+@\w+(\.\w+)+\w$/;


form_btn.addEventListener("click", e => {
    e.preventDefault();
    
    const email = document.getElementById("email-input");
    const error_msg = document.querySelector(".error-msg"); 
  
    // Email
    if(email.value === '' ) {
        email.classList.add("error-active");
        error_msg.innerHTML = "Whoops! It looks like you forgot to add your email";
        error_msg.classList.add("error-msg-active");
    } else if(!email.value.match(email_regex)){
        email.classList.add("error-active");
        error_msg.innerHTML = "Please provide a valid email address";
        error_msg.classList.add("error-msg-active");
    } else {
        email.classList.remove("error-active");
        error_msg.classList.remove("error-msg-active");
    }
})