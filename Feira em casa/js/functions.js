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

function getLocalData(str){
    let str_value = localStorage.getItem(str);
    let real_value = JSON.parse(str_value);

    return real_value;
}

function addUser(e)
{
    if (e.keyCode == 13 || e.which == 13) 
    {
        let getUser = document.getElementById("user_name");
        let users_str = localStorage.getItem("users");
        let user_index;
        getUser.disabled = true;

        if(users_str == null)
        {
            let user = [];
            user_index = 0;
            user.push(getUser.value);
            //console.log(user, users_count);

            localStorage.setItem("users", JSON.stringify(user));
            localStorage.setItem("users_products", JSON.stringify([[]]));
            localStorage.setItem("user_index", JSON.stringify(0));
        }
        else
        {
            let users = JSON.parse(users_str);
            let users_count = users.length;
            user_index = -1;
            
            for(var i = 0; i < users_count; i++)
            {
                //console.log(getUser.value, users[i]);
                if(getUser.value == users[i])
                {
                    user_index = i;
                    //console.log("true");
                    break;
                }
            }

            if(user_index == -1)
            {
                user_index = users_count;

                let users_products_str = localStorage.getItem("users_products");
                let users_products = JSON.parse(users_products_str);
                users_products.push([]);
                users.push(getUser.value);

                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("users_products", JSON.stringify(users_products));
                localStorage.setItem("user_index", JSON.stringify(users_count));
            }
            else
            {
                localStorage.setItem("user_index", JSON.stringify(user_index));
            }
        }

        /**/

        products_write(user_index);

    }
}

function products_write(user_index)
{
    let users_products = getLocalData("users_products");
    let user_products = users_products[user_index] 
    let products_qtt = user_products.length
    //console.log(users_products[user_index].length)

    if(products_qtt == 0)
    {
        //console.log("true")
        document.getElementById("products").innerHTML = `<h3>Nenhum produto cadastrado!</h3>`
    }
    else
    {
        let product_str = []

        for(var i = 0; i < products_qtt; i++)
        {
            product_str.push(`<p>Nome do produto: ${user_products[i].name} </p>
            <p>Unidade de medida: ${user_products[i].measure} </p>
            <p>Preço: ${user_products[i].price} </p>
            <p>Quantidade disponível: ${user_products[i].available} </p>`)
        }

        let str_result = ""

        for(var i = 0; i < product_str.length; i++)
        {
            str_result += product_str[i]
        }

        document.getElementById("products").innerHTML = "<h3>Produtos cadastrados:</h3>" + str_result
    }
}