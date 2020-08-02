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