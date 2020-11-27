window.addEventListener('load', function () {
    //    init action to load page 

    if (sessionStorage.getItem('token')) {
        if (typeof sessionStorage.getItem('token') === 'string') {
            $.ajax({
                type: 'GET',
                url: `http://localhost:3000/projects/${getUrlParams('project_id')}`,
                success: (project) => {
                    // get project
                    $.ajax({
                        type: 'GET',
                        url: `http://localhost:3000/projects/${getUrlParams('project_id')}/members`,
                        success: (members) => {
                            // get project
                            generateHtlmProjectDetails(project, members);
                        },
                        error: (err) => {
                            // generate error
                        }
                    });
                },
                error: (err) => {
                    // generate error
                }
            });
        }
    } else {
        window.location = 'index.html';
    }


});


function getUrlParams(param) {
    const sPageURL = window.location.search.substring(1);
    const sURLVariables = sPageURL.split('&');
    for (const i = 0; i < sURLVariables.length; i++) {
        const sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == param) {

            return sParameterName[1];
        }

    }
}

function generateHtlmProjectDetails(project, members) {
    const baseHtml = document.getElementById('project-details');
    if (project) {

        let divParent = document.createElement('div');
        divParent.className = 'col-md-12';
        let divBlog = document.createElement('div');
        divBlog.className = 'blog-entry';
        divParent.appendChild(divBlog);

        let divText = document.createElement('div');
        divText.className = 'text p-4';
        divBlog.appendChild(divText);
        let divNameProject = document.createElement('div');
        divText.appendChild(divNameProject);
        let h4 = document.createElement('h4');
        h4.className = 'heading'
        h4.innerHTML = `Nom du projet : ${project.name}`;
        divNameProject.appendChild(h4);

        let divResponses = document.createElement('div');
        divResponses.className = 'row';
        divText.appendChild(divResponses);
        divResponses.appendChild(generateHtmlResponse(project.response_one, 'Reponse 1'));
        divResponses.appendChild(generateHtmlResponse(project.response_two, 'Reponse 2'));
        divResponses.appendChild(generateHtmlResponse(project.response_three, 'Reponse 3'));
        divResponses.appendChild(generateHtmlResponse(project.response_four, 'Reponse 4'));
        divResponses.appendChild(generateHtmlResponse(project.response_five, 'Reponse 5'));

        divText.appendChild(generateHtmlMembers(members));

        let divAbout = document.createElement('div');
        let spanAbout = document.createElement('span');
        spanAbout.innerHTML = 'A propos de l\'équipe';
        divAbout.appendChild(spanAbout);
        let br = document.createElement('br')
        divAbout.appendChild(br);
        let p = document.createElement('p');
        p.innerHTML = project.about;
        divAbout.appendChild(p);
        divText.appendChild(divAbout);

        baseHtml.appendChild(divParent);
    } else {
    }
}

function generateHtmlResponse(response, title) {
    let div = document.createElement('div');
    div.className = 'response col-md-4';
    let span = document.createElement('span');
    span.innerHTML = `${title} :`;
    span.className = 'text';
    div.appendChild(span);
    let br = document.createElement('br');
    div.appendChild(br);
    let p = document.createElement('p');
    p.innerHTML = response;
    div.appendChild(p);

    return div;
}

function generateHtmlMembers(members) {
    let div = document.createElement('div');
    div.className = 'list-member row';
    if (members.length > 0) {
        members.forEach((member) => {
            let divMember = document.createElement('div');
            divMember.className = 'member col-md-2';
            let span = document.createElement('span');
            span.innerHTML = 'Membre';
            divMember.appendChild(span);
            let br = document.createElement('br');
            divMember.appendChild(br);
            let divName = document.createElement('div');
            divName.className = "member-name";
            divName.innerHTML = `${member.first_name} ${member.last_name}`;
            divMember.appendChild(divName);

            div.appendChild(divMember);
        });
    }
    else {
        let span = document.createElement('span');
        span.className = 'heading col-md-12';
        span.innerHTML = "Aucun membre pour ce projet."
        span.style.fontWeight = 'none';
        span.style.fontStyle = 'italic';
        div.appendChild(span);
    }
    return div;
}

