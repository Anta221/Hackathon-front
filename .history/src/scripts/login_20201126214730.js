function login() {
    // console.log($('form'));
    // $('#form-login').ajaxForm({url: 'http://localhost:3000/users/login', type: 'POST'});
        
        $.ajax({
               type: "POST",
               url: 'http://localhost:3000/users/login',
               data: $('#form-login').serialize(), // serializes the form's elements.
               success: function(data)
               {
                   console.log(data);
                   alert(data); // show response from the php script.
               },
               error: function(error){
                   console.log(error);
               }
             });
    
        
}