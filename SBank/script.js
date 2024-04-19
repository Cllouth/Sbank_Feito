let button = document.getElementById("botao_submit");

button.onclick = async function(){
    let cpf = document.getElementById("cpf").value;
    let nome = document.getElementById("fullname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    const data = {cpf,nome,phone,email};

    const response = await fetch('http://localhost:3002/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=utf-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.success) {
        alert("Sucesso")
    } else {
        alert("Não");
    }
}