$(document).ready(function(){
    //on récupere la liste des ecoles
    // var tabSchool = []
    $.get({
        url: 'http://localhost:3000/schools',
        success: (schools) => {
            // for(let i = 0; i < response.length; i++){
            //     const element = response[i]
            //     tabSchool.push(element._id)
            // }

            generateListSchools(schools);

        },
        error: (error) => {
            console.log(error)

        }
       }) 


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
});

function generateListSchools(schools) {
    let baseHtml = document.getElementById('list-schools');
    if(schools.length > 0) {
        let label = document.createElement('label');
        label.innerHTML = 'Listes des écoles';
        let select = document.createElement('select');
        select.className = 'form-control';
        select.name = 'school_id';
        select.id = 'select_school';
        select.value = 'default';
        let optionDefault = document.createElement('option');
        optionDefault.value = "default";
        optionDefault.innerHTML = 'Sélectioner une école'
        select.appendChild(optionDefault);
        baseHtml.appendChild(label);
        baseHtml.appendChild(select);

        schools.forEach((school) => {
            let option = document.createElement('option');
            option.value = school._id;
            option.innerHTML = `${school.name} ${school.location}`;
            select.appendChild(option);
        })
    }
    else
     {
        let div = document.createElement('div');
        div.innerHTML = 'Aucune école de disponible';
        div.fontWeight = 'bold';
        baseHtml.appendChild(div);
    }

 


//on recupére la liste des écoles
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
}































