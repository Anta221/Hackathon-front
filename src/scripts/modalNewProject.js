//get list of schools
$.get({
    url: 'http://localhost:3000/schools',
    success: (schools) => 
    {
        // generate list of school select html
        generateListSchoolsModal(schools);
    },
    error: () => 
    {
        // open modla error
        $($('#modal-error')).modal();
    }
});


function createProject() {
    $.ajax({
        type: "POST",
        url: `http://localhost:3000/schools/${$('#select_school_modal').val()}/projects`,
        data: $('#form-project').serialize(),
        success: () => 
        {
            // project is created
            // form is reset 
            // redirection to create member
            document.getElementById('form-project').reset();
            $("#modal-project").modal('show');
            window.setTimeout("location=('newMembre.html');", 2000);
        },
        error: () => 
        {
            // open modla error
            $(".modal-error").modal('show');

        }
    });
}


function generateListSchoolsModal(schools) {
    // generate select school in html
    let baseHtml = document.getElementById('select-schools-modal');

    if (schools.length > 0) 
    {
        let label = document.createElement('label');
        label.innerHTML = 'Listes des écoles';

        let select = document.createElement('select');
        select.className = 'form-control';
        select.id = 'select_school_modal';
        select.value = 'default';

        baseHtml.appendChild(label);
        baseHtml.appendChild(select);

        schools.forEach((school) => {
            // generate option to slect html foreach school
            let option = document.createElement('option');
            option.value = school._id;
            option.innerHTML = `${school.name} ${school.location}`;
            select.appendChild(option);
        });
    }
    else 
    {
        let div = document.createElement('div');
        div.innerHTML = 'Aucune école de disponible';
        div.fontWeight = 'bold';
        baseHtml.appendChild(div);
    }
}

