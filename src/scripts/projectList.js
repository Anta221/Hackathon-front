window.addEventListener('load', () => {
    if (sessionStorage.getItem('token')) {
        if (typeof sessionStorage.getItem('token') === 'string') {
            const token = sessionStorage.getItem('token');
            const decoded = decodeDataToken(token);
            $.ajax({
                type: 'GET',
                url: `http://localhost:3000/schools/${decoded.school_id}/projects`,
                success: (projects) => {
                    // get projects and show this in html
                    showProjects(projects);
                },
                error: (err) => {
                    // generate error
                }
            });
        }
    }else {
        window.location = 'login.html';
    }

});

function decodeDataToken(token) {

    return JSON.parse(atob(token.split('.')[1]));

}

function showProjects(projects) {

    let baseHtml = document.getElementById('list-project');
    if (projects.length > 0) {
        projects.forEach((project) => {
            baseHtml.appendChild(generateOneModelHtmlToProject(project));
        });
    } else {
        console.log(generateAlert());
        baseHtml.appendChild(generateAlert());
    }

}

function generateOneModelHtmlToProject(project) {
    const urlDetails = `detailProjet.html?project_id=${project._id}`

    let divParent = document.createElement('div');
    divParent.className = 'col-md-4';
    let divBlog = document.createElement('div');
    divBlog.className = 'blog-entry';
    divParent.appendChild(divBlog);
    let hrefBlog = document.createElement('a');
    hrefBlog.href = 'blog-single.html';
    divBlog.appendChild(hrefBlog);
    let divText = document.createElement('div');
    divText.className = 'text p-4';
    divBlog.appendChild(divText);
    let divMeta = document.createElement('div');
    divMeta.className = 'meta';
    divText.appendChild(divMeta);
    let divHref2 = document.createElement('div');
    let href2 = document.createElement('a');
    divHref2.appendChild(href2);
    href2.href = urlDetails;
    href2.innerHTML = project.created_at.substring(0, 9);
    divMeta.appendChild(divHref2);
    let h3 = document.createElement('h3');
    h3.className = 'heading';
    divText.appendChild(h3);
    let hrefH3 = document.createElement('a');
    hrefH3.href = urlDetails;;
    hrefH3.innerHTML = project.name;
    h3.appendChild(hrefH3);
    let p = document.createElement('p');
    divText.appendChild(p);
    p.className = 'clearfix';
    let href1P = document.createElement('a');
    href1P.className = 'float-left';
    href1P.innerHTML = 'Lire la suite.'
    href1P.href = urlDetails;;
    p.appendChild(href1P);
    let href2P = document.createElement('a');
    href2P.className = 'float-right meta-chat';
    href2P.href = '#';
    p.appendChild(href2P);
    let span = document.createElement('span');
    span.className = 'icon-chat';
    href2P.appendChild(span);

    return divParent;
}

function generateAlert() {
    let div = document.createElement('div');
    div.className = 'alert alert-info';
    div.innerHTML = 'Aucun projet à été créer';

    return div;
}


