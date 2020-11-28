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
        // On créer une variable content le formulaire sérialisé
        var donnees = $(this).serialize();
        donnees +="&school_id="+school_id
        
        $.ajax({
            url : 'http://localhost:3000/schools/'+school_id+'/projects',
            type : 'POST',
            data : donnees,
            dataType : 'json',
            success : function(response){
                $(".modal").modal('show');
            },
            error : function(resultat, statut, erreur){
                console.log(statut)
            }
     
         });

    });


});

