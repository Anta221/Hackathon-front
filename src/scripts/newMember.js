$(document).ready(function () {
    // get list schools for select 
    $.get({
        url: 'http://localhost:3000/schools',
        success: (schools) => {

            generateListSchools(schools);

        },
        error: (error) => {
            $($('#modal-error')).modal();

        }
    })



});

function generateListSchools(schools) {
    console.log('on passs eici geneger les ecoles')
    let baseHtml = document.getElementById('list-schools');
    if (schools.length > 0) {
        let label = document.createElement('label');
        label.innerHTML = 'Listes des écoles';
        let select = document.createElement('select');
        select.className = 'form-control';
        // select.name = 'school_id';
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
    else {
        let div = document.createElement('div');
        div.innerHTML = 'Aucune école de disponible';
        div.fontWeight = 'bold';
        baseHtml.appendChild(div);
    }


}

// Generate list project when user select scholl in select
$('#list-schools').change(() => {
    const value = $('#list-schools option:selected').val();
    console.log('on click sur le select', value)
    getListProject(value);
    (value === 'default') ? disableBtnSubmit(true) : disableBtnSubmit(false);
});

$('#list-projects').change(() => {
    value = $('#list-projects option:selected').val();
    (value === 'default') ? disableBtnSubmit(true) : disableBtnSubmit(false);
});



function getListProject(project_id) {

    $('#list-projects').empty();
    //get list project
    $.get({
        url: `http://localhost:3000/schools/${project_id}/projects_available`,
        success: (projects) => {
            console.log(projects)
            generateListProjects(projects);

        },
        error: (error) => {
            $($('#modal-error')).modal();

        }
    })
}

function generateListProjects(projects) {
    console.log(projects);
    let baseHtml = document.getElementById('list-projects');
    if (projects.length > 0) {
        let label = document.createElement('label');
        label.innerHTML = 'Listes des projets';
        let select = document.createElement('select');
        select.className = 'form-control';
        // select.name = 'project_id';
        select.id = 'select_project';
        select.value = 'default';
        let optionDefault = document.createElement('option');
        optionDefault.value = "default";
        optionDefault.innerHTML = 'Sélectioner un projet'
        select.appendChild(optionDefault);
        baseHtml.appendChild(label);
        baseHtml.appendChild(select);

        projects.forEach((project) => {
            let option = document.createElement('option');
            option.value = project._id;
            option.innerHTML = project.name;
            select.appendChild(option);
        })
    }
    else {
        console.log('on passe ici')
        let div = document.createElement('div');
        div.innerHTML = 'Aucun projet n\'a été trouvé';
        div.fontWeight = 'bold';
        div.id = 'error-project';
        baseHtml.appendChild(div);
    }


}

function createMember() {
    // console.log('ici')
    document.getElementById('error-project').style.display = 'none';

    const serialize = $('#form-member').serialize();
    if ($('#list-projects option:selected').val() === 'default') {
        document.getElementById('error-project').style.display = 'block';

    }
    else {

        $.post({
            url: `http://localhost:3000/projects/${$('#list-projects option:selected').val()}/members`,
            data: serialize,
            success: (member) => {
                resetForm();
                $($('#modal-member')).modal();


            },
            error: (error) => {


            }
        })
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


























