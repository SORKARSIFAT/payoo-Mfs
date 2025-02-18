// console.log("hello web this come js you warn");
document.getElementById("btn-login").addEventListener("click" , function(e){
//  prevent default behavior (auto load stop from html teg )
e.preventDefault();  


   const phoneNumber = document.getElementById("phone-number").value;
   const pinNumber = document.getElementById("pin-number").value
    console.log(phoneNumber , pinNumber);
    
})