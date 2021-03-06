

async function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username != "" && password != "") {

        try {

            let user = await $.ajax({
                url: "/api/users/login?email="+username+"&codigo="+password,
                method: "get",
                dataType: "json"
            });
            

            let categoria = user.categoria_id;

            if (categoria === 1) {
                window.location = "perfilAdmin.html";
            }
            else if (categoria === 2) {
                sessionStorage.setItem("user", JSON.stringify(user));
                window.location = "dashboard.html";
            }

            alert("autenticado com sucesso!");

        } catch(err) {
            console.log(err);
            if (err.status == 404) {
                alert(err.responseJSON.msg);
            }
        }

    } else {
        alert("Preencha os campos!")
    }
    
}