$(document).ready(function(){
    //on récupere la liste des ecoles
    var tabSchool = []
    $.get({
        url: 'http://localhost:3000/schools',
        success: (response) => {
            for(let i = 0; i < response.length; i++){
                const element = response[i]
                tabSchool.push(element._id)
            }

        },
        error: (error) => {
            console.log(error)

        }
       }) 
    console.log(tabSchool)



    //on récupere la liste des projets
  /*  for(let i = 0; i < tabSchool.length; i++){
        const element_id = tabSchool[i]
        var url = `http://localhost:3000/schools/'+element_id+'/projects`
        console.log(url);
       $.get({
            url: `http://localhost:3000/schools/:${element_id}/projects`
        )

        } 
    } 
    

    $.get(
        url: 'http://localhost:3000/schools/:school_id/projects',

    ) */
})






























