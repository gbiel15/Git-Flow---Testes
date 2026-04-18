const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let cpf = document.getElementById("cpf").value.trim();
  let senha = document.getElementById("senha").value.trim();

  if(nome === "" || email === "" || cpf === "" || senha === "") {
    mensagem.style.color = "red";
    mensagem.textContent = "Preencha todos os campos!";
    return;
  }

  if(senha.length < 6) {
    mensagem.style.color = "red";
    mensagem.textContent = "Senha deve ter no mínimo 6 caracteres!";
    return;
  }

  mensagem.style.color = "green";
  mensagem.textContent = "Cadastro realizado com sucesso!";

  form.reset();
});