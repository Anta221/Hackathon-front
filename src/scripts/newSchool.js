$(document).ready(function(){

    //On envoie notre formulaire au serveur
  $("#submitSchool").click(function(e){ 
        e.preventDefault(); 
        $.ajax({
            url : 'http://localhost:3000/schools',
            type : 'POST',
            data : {
                name : $("#nom").val(), 
                location : $("#location").val(),
 
            },
            dataType : 'json',
            success : function(response){
                $('#modal-content').html('');
                $(".modal").modal('show');
                window.setTimeout( $(".modal").modal('show'), 6000);
                $("#modalBody").html("<p>Félicitation <br>Votre école a été ajouté avec succès</p>")
                $('#modalSchool').on('hidden.bs.modal', function () {
                window.location.reload(true);
                });
                $('#modalSchool').modal('hide');

               
            },
            error : function(resultat, statut, erreur){
                console.log(statut)
                $("#modalHeader").html('<h5 class="modal-title">ERROR <span style="color: red;"> <i class="fas fa-times"></i></span></h5>')
                $("#modalBody").html("<p>Une erreur s'est produite.<br> Merci de Réessayer.</p>")
                window.setTimeout( $(".modal").modal('show'), 6000);
                $('#modal-content').html('');
                $('#modalSchool').modal('hide');
            }
     
         });
    });


});

