


function fetchUsers(){

    var xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readystate ==4 &&this.status==200){
            document.getElementById("empData").innerHTML=this.responseText;
            loadUsers(this.responseText);
        }
    };

 xhttp.open("GET","https://64edca771f8721827141be23.mockapi.io/Users", true);
 xhttp.send();

}

function adduser(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function (){
    if(this.readyState=4 && this.status ==200){
    document.getElementById("empData").innerHTML=this.responseText;
    }
 };

 xhttp.open("POST","https://64edca771f8721827141be23.mockapi.io/Users",true);
 xhttp.setRequestHeader("Comtent-type","application/json");
 xhttp.send(JSON.stringify({"id":"U00001","userName":"Santhosh","age":25,"state":"Tamilnadu"}));
}

function updateUser(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.state === 200){
            document.getElementById("empData").innerHTML=this.responseText;
        }
    };
 xhttp.open("PUT","https://64edca771f8721827141be23.mockapi.io/Users/19",true);
 xhttp.setRequestHeader("Content-type","application/json");
 xhttp.send(JSON.stringify({"State":"Karnataka"}));

}

function deleteUser(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
       if(this.readyState == 4 && this.status ==200){
           document.getElementById("empData").innerHTML=this.responseText;
       }
    };
 xhttp.open("DELETE","https://64edca771f8721827141be23.mockapi.io/Users/20",true);
 xhttp/setRequestHeader("COntent-type","application/json");
 xhttp.send();
}











