function valider() {
    if (document.querySelector("#nom").value.length == 0) {
        document.querySelector("#msgNom").innerHTML = "nom vide"
        document.querySelector("#msgNom").style.color = "red"
        document.getElementById("nom").style.border = "2px solid red"

    }else  {
        document.querySelector("#msgNom").innerHTML = ""
        document.getElementById("nom").style.border = "2px solid black"

    }

    if (document.querySelector("#prenom").value.length == 0) {
        document.querySelector("#msgPrenom").innerHTML = "prenom vide"
        document.querySelector("#msgPrenom").style.color = "red"
        document.getElementById("prenom").style.border = "2px solid red"


    }else  {
        document.querySelector("#msgPrenom").innerHTML = ""
        document.getElementById("prenom").style.border = "2px solid black"

    }
    if (document.querySelector("#cin").value.length == 0) {
        document.querySelector("#msgCin").innerHTML = "cin vide"
        document.querySelector("#msgCin").style.color = "red"
        document.getElementById("cin").style.border = "2px solid red"


    }else  {
        document.querySelector("#msgCin").innerHTML = ""
        document.getElementById("cin").style.border = "2px solid black"

    }
    if (document.querySelector("#age").value.length == 0) {
        document.querySelector("#msgAge").innerHTML = "age vide"
        document.querySelector("#msgAge").style.color = "red"
        document.getElementById("age").style.border = "2px solid red"


    }else  {
        document.querySelector("#msgAge").innerHTML = ""
        document.getElementById("age").style.border = "2px solid black"


    }if (document.querySelector("#email").value.length == 0) {
        document.querySelector("#msgEmail").innerHTML = "email vide"
        document.querySelector("#msgEmail").style.color = "red"
        document.getElementById("email").style.border = "2px solid red"



    }else  {
        document.querySelector("#msgEmail").innerHTML = ""
        document.getElementById("email").style.border = "2px solid black"


    } if (document.querySelector("#password").value.length == 0) {
        document.querySelector("#msgPassword").innerHTML = "password vide"
        document.querySelector("#msgPassword").style.color = "red"
        document.getElementById("password").style.border = "2px solid red"

    } else{
        document.getElementById("password").style.border = "2px solid black"
        document.querySelector("#msgNom").innerHTML = ""
        document.querySelector("#msgPrenom").innerHTML = ""
        document.querySelector("#msgCin").innerHTML = ""
        document.querySelector("#msgAge").innerHTML = ""
        document.querySelector("#msgEmail").innerHTML = ""
        document.querySelector("#msgPassword").innerHTML = ""

    }
}

function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validate() {
    var email = document.getElementById("email").value;

    if (checkEmail(email)) {
        alert('Adresse e-mail valide');
    } else {
        alert('Adresse e-mail non valide');
    }
    return false;
}


function verifyPassword() {  
    var pw = document.getElementById("password").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("msgPassword").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 6) {  
       document.getElementById("msgPassword").innerHTML = "**password invalide la taille du mot de passe inférieur a 6";  
       return false;  
    }  


//maximum length of password validation  
if(pw.length > 7) {  
    document.getElementById("msgPassword").innerHTML = "**Password length must not exceed 15 characters";  
    return false;  
 } else {  
    alert("Password is correct");  
 }  
} 


    function CheckForm()
    {               
    var pwd;
    pwd = document.getElementById("password").value;
    var listRe = [{
        re: /[a-zA-Z]{4}/,
        msg: "Votre mot de passe doit avoir au moins 4 lettres"
        },
        {
        re: /[0-9]{3}/,
        msg: "Votre mot de passe doit avoir au moins 3 chiffres"
        },
        {
        re: /[^A-Za-z0-9]/,
        msg: "Votre mot de passe doit posséder au moins 1 caractère spéciale"
        }
];
for (var i = 0; i < listRe.length; i++) {
var item = listRe[i];
if (!item.re.test(pwd)) {
        alert(item.msg);
        return false;
}
}}
  


function verifyCin() {  
    var cn = document.getElementById("cin").value;  
    //check empty password field  
    if(cn == "") {  
       document.getElementById("cin").innerHTML = "**Fill the cin please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(cn.length < 8) {  
       document.getElementById("cin").innerHTML = "**cin invalide la taille du cin doit étre egale a 8 chiffre ";  
       return false;  
    } else {  
        alert("cin is correct");  
     }  
    }







