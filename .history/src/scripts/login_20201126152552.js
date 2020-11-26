function login() {
   const valueForm = $('form').serializeArray();
   console.log(valueForm);
   const data = valueForm.reduce((acc, item) => {
       return { [item.name] : item.value, ...acc}
   }, {});
   console.log(data);
//    document.getElementById() 
}