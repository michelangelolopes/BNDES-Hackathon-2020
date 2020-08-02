function setData() {
    var myObj, myJSON;

    // Storing data:
    myObj = { name: "John", age: 31, city: "New York" };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);
}

function getData() {
    var myObj, myJSON, text, obj;
    // Retrieving data:
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    document.getElementById("demo").innerHTML = obj.name;
}

function test()
{
    document.write("#fé");
}

function addUser(e){
    if (e.keyCode == 13 || e.which == 13) {
        var getUser = document.getElementById("user_name");
        var name = eval(getUser.value);
        
            
        let user = [];

        user.push({nome: name, especialidade: "frutas", local: "praça seca"});

        console.log(JSON.stringify(user));

        return false;
    }
}