// console.log("hello web this come js you warn");
const body = document.getElementById('body')
document.getElementById("btn-login").addEventListener("click" , function(e){
//  prevent default behavior (auto load stop from html teg )
e.preventDefault();  


   const phoneNumber = document.getElementById("phone-number").value;
   const pinNumber = document.getElementById("pin-number").value
  if(phoneNumber === '01708063559' && pinNumber === '1234'){
    window.location.href = '/homePage.html'
    
  }

  else{
 
   alert('wrong your pin or number');
   
  }
    
})