function login() { 
    alert('rrrr')
   console.log( $('form'));
//    console.log(valueForm);
//    const data = valueForm.reduce((acc, item) => {
//        return { [item.name] : item.value, ...acc}
//    }, {});
   
   headers = new Headers();
   headers.set('Content-Type', 'application/x-www-form-urlencoded');

   const myInit = {
       method: 'POST',
       headers,
       body : new FormData($('form')[0])
   }

   fetch('htt://localhost:3000/users/login', myInit).then((response) => {
       console.log(response)
   })
   .catch((err) =>
   console.log(err));

//    document.getElementById() 
}