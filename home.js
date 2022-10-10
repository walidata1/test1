function test() {

    //Retriving data
    var uid = document.getElementById("username").value;
    var pw = document.getElementById("password").value;

    //Storing data
    var user = localStorage.setItem("uid", uid);
    var pass = localStorage.setItem("pw", pw);


    //Retriving stored data and using it 
    var user = localStorage.getItem("uid", uid);
    var pass = localStorage.getItem("pw", pw);


    var a, b;
    a = "fredrik";
    b= 12345;

    if (a == user && b == pass) {

        alert(uid + pw)
    

    }}
