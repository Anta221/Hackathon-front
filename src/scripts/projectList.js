window.addEventListener('load', ()=>{
    console.log('--------------------')
    if (sessionStorage.getItem('token')) 
    {
        if(typeof sessionStorage.getItem('token') === 'string'){
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
    } 

});

function decodeDataToken(token) {
    
 return JSON.parse(atob(token.split('.')[1]));

}

function showProjects(projects) {
    console.log(projects);
}


