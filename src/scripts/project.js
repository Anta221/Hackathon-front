window.addEventListener('load', function () {
    //    init action to load page 

    if (sessionStorage.getItem('token')) {
        if (typeof sessionStorage.getItem('token') === 'string') {
            $.ajax({
                type: 'GET',
                url: `http://localhost:3000/projects/${getUrlParams('project_id')}`,
                success: (project) => {
                    // get project
                    console.log(project)
                    $.ajax({
                        type: 'GET',
                        url: `http://localhost:3000/projects/${getUrlParams('project_id')}/members`,
                        success: (members) => {
                            // get project
                            console.log(members)
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