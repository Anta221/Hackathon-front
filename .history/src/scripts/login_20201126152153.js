function login() {
    alert('uhuhuhuh');
   const valueForm = $('form').serializeArray();
   const data = valueForm.map((obj) => {
       return { [obj.name] : obj.value}
   })
//    document.getElementById() 
}