$(document).ready(function () {
    // get list schools for select 
     getSchools();

});


// Disable btn submit if shool or project not selected
$('#list-schools').change(() => {
    const value = $('#list-schools option:selected').val();
    getListProject(value);
    (value === 'default') ? disableBtnSubmit(true) : disableBtnSubmit(false);
});

$('#list-projects').change(() => {
    value = $('#list-projects option:selected').val();
    (value === 'default') ? disableBtnSubmit(true) : disableBtnSubmit(false);
});


function generateListSchools(schools) {

    // delete old list schools
   $('#list-schools').empty();
   disableBtnSubmit(true);

    let baseHtml = document.getElementById('list-schools');

    if (schools.length > 0) 
    {
        let label = document.createElement('label');
        label.innerHTML = 'Listes des écoles';

        let select = document.createElement('select');
        select.className = 'form-control';
        select.id = 'select_school';
        select.value = 'default';

        let optionDefault = document.createElement('option');
        optionDefault.value = "default";
        optionDefault.innerHTML = 'Sélectioner une école';

        select.appendChild(optionDefault);
        baseHtml.appendChild(label);
        baseHtml.appendChild(select);

        schools.forEach((school) => {
            // generate option for select htmlforeach school
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



function getSchools(){
    $.get({
        url: 'http://localhost:3000/schools',
        success: (schools) => 
        {
            // generate select html to select this
            generateListSchools(schools);
        },
        error: () => 
        {
            // Open modal error
            $($('#modal-member-error')).modal();
        }
    })



}

function getListProject(project_id) {

    $('#list-projects').empty();
    //get list project
    $.get({
        url: `http://localhost:3000/schools/${project_id}/projects_available`,
        success: (projects) => 
        {
            // generate select html to select this
            generateListProjects(projects);

        },
        error: () => 
        {
            $($('#modal-member-error')).modal();

        }
    })
}

function generateListProjects(projects) {

    let baseHtml = document.getElementById('list-projects');

    if (projects.length > 0) 
    {
        let label = document.createElement('label');
        label.innerHTML = 'Listes des projets';

        let select = document.createElement('select');
        select.className = 'form-control';
        select.id = 'select_project';
        select.value = 'default';

        let optionDefault = document.createElement('option');
        optionDefault.value = "default";
        optionDefault.innerHTML = 'Sélectioner un projet'

        select.appendChild(optionDefault);
        baseHtml.appendChild(label);
        baseHtml.appendChild(select);

        projects.forEach((project) => {
            // generate option foreach project for select html
            let option = document.createElement('option');
            option.value = project._id;
            option.innerHTML = project.name;

            select.appendChild(option);
        })
    }
    else {
        let div = document.createElement('div');
        div.innerHTML = 'Aucun projet n\'a été trouvé';
        div.fontWeight = 'bold';
        div.id = 'error-project';
        baseHtml.appendChild(div);
    }
}

function createMember() 
{
    // hide div error 
    document.getElementById('error-project').style.display = 'none';

    // get value form 
    const serialize = $('#form-member').serialize();

    // if project is not selected, generate error
    if ($('#list-projects option:selected').val() === 'default') {
        document.getElementById('error-project').style.display = 'block';
    }
    else 
    {

        $.post({
            url: `http://localhost:3000/projects/${$('#list-projects option:selected').val()}/members`,
            data: serialize,
            success: () => {
                // member create, reset form and all select
                resetForm();
                $($('#modal-member')).modal();
                getSchools();
            },
            error: () => 
            {
                $($('#modal-member-error')).modal();
            }
        });
    }
}



function disableBtnSubmit(value) {
    $("#btn-submit").prop('disabled', value);
}

function resetForm() {
    document.getElementById('form-member').reset();
    $('#list-schools').empty();
    $('#list-projects').empty();
    disableBtnSubmit(true);
}

function openModalProject() {
    $($('#modalProject')).modal();
}


























