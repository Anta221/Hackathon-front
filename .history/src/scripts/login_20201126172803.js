
    $("#form-login").submit(function(e) {
        console.log('je passe ici ')

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
