function login() {
    console.log('je passe ici')
    console.log($('form'));
    $('#form-login').ajaxForm({url: 'http://localhost:3000/users/login', type: 'POST'});
}