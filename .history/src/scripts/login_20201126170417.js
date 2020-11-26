function login() {
    // console.log('je passe ici')
    // console.log($('form'));
    // $('#form-login').ajaxForm({url: 'http://localhost:3000/users/login', type: 'POST'});
    $("#form-login").submit(function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.
    
        let form = $(this);
        
        $.ajax({
               type: "POST",
               url: 'http://localhost:3000/users/login',
               data: form.serialize(), // serializes the form's elements.
               success: function(data)
               {
                   alert(data); // show response from the php script.
               }
             });
    
        
    });
}