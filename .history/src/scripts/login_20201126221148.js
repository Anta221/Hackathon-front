function login() {
    document.getElementById('error-login').style.display = 'none';

        
        $.ajax({
               type: "POST",
               url: 'http://localhost:3000/users/login',
               data: $('#form-login').serialize(), // serializes the form's elements.
               success: (data) =>
               {
                //    set token in session storage
                   sessionStorage.setItem('token', data.token);
               },
               error: () =>
               {    
                   document.getElementById('error-login').style.display = 'block';
               }
             });
    
        
}
function resetForm() {
    document.getElementById("form-login").reset();
}