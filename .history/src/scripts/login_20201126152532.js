function login() {
   const valueForm = $('form').serializeArray();
   console.log(valueForm);
   const data = valueForm.reduce((acc, item) => {
       return { [obj.name] : obj.value, ...acc}
   }, {});
   console.log(data);
//    document.getElementById() 
}