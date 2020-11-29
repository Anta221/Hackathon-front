$(document).ready(function(){

    //on recupére la liste des écoles
    var schoolTab = [];
    $.get({
        url: 'http://localhost:3000/schools',
        success: (response) => {
            // get projects and show this in html select
            var htmlTab =[];
            for (let i = 0; i < response.length; i++) {
                const element = response[i];
                let html = "";
                    html+='<option>'+element.name+'</option>'

                htmlTab.push(html)
                nameId = element._id + ":"+ element.name
                schoolTab.push(nameId)
            }
            
            $("#select").html(htmlTab);
            
        },
        error: (err) => {
            console.log(err)
        }
    });

    
    //On envoie notre formulaire au serveur
    $("form").submit(function(e){ 
        e.preventDefault(); 
        var id= ""
        var name= ""
        var school_id=""
        for (let i = 0; i < schoolTab.length; i++) {
            str = schoolTab[i];
            id = str.substr(0, 24);
            name = str.substr(25);
            if($('#select').val() === name){
                school_id = id
            }
        }
        //On vérifie si le mdp et le confime mdp sont corrects
        var password = $("#password").val()
        var confirmPass  = $("#confirmPassword").val()

        if(password === confirmPass){
            console.log("1")

            $.ajax({
                url : 'http://localhost:3000/schools/'+school_id+'/users',
                type : 'POST',
                data : {
                    name : $("#name").val(), 
                    email : $("#email").val(),
                    school_id : school_id, 
                    password : password
                },

                dataType : 'json',
                success : function(response){
                    $(".modal").modal('show');
                    
                    $('#modalSchool').modal('hide');
                     
                    //redirection
                    window.setTimeout("location=('login.html');" , 1000);
                },
                error : function(err){
                    $("#modalHeader").html('<h5 class="modal-title">ERROR <span style="color: red;"> <i class="fas fa-times"></i></span></h5>')
                    $("#modalBody").html("<p>Une erreur s'est produite.<br> Merci de remplir les champs correctement</p>")
                    $(".modal").modal('show');
                }
        
            });

        }
        else{
            $("#modalHeader").html('<h5 class="modal-title">ERROR <span style="color: red;"> <i class="fas fa-times"></i></span></h5>')
            $("#modalBody").html("Les mots de passes ne correspondent pas ")
            $(".modal").modal('show');
        }

    });


});

