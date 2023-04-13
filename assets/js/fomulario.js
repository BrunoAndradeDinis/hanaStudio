// validação de inputs
const inputs_contato = document.querySelectorAll('input[name=dados_contato]')

const form = document.querySelector('form');
const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
  // Validar campo Nome
  if (nomeInput.value.trim() === '') {
    event.preventDefault(); // Cancela o envio do formulário
    nomeInput.classList.add('input-container--invalido');
    nomeInput.nextElementSibling.innerText = 'Por favor, preencha seu nome';
  } else {
    nomeInput.classList.remove('input-container--invalido');
    nomeInput.nextElementSibling.innerText = '';
  }

  // Validar campo E-mail
  if (emailInput.validity.typeMismatch) {
    event.preventDefault(); // Cancela o envio do formulário
    emailInput.classList.add('input-container--invalido');
    emailInput.nextElementSibling.innerText = 'O email digitado não é válido.';
  } else {
    emailInput.classList.remove('input-container--invalido');
    emailInput.nextElementSibling.innerText = '';
  }
});

function formulario() {
  let nome = document.getElementById("nome");
  console.log(nome.value);

  let email = document.getElementById("email");
  console.log(email.value);

  let whats = document.getElementById("whats");
  console.log(whats.value);

  const dados__pessoais = [nome.value, email.value, whats.value];
  console.log(dados__pessoais);

  const checkboxes = document.querySelectorAll('input[type=checkbox][name=dados-orcamento]:checked');
  console.log(checkboxes.values)

  let valores = [];

  if (checkboxes.length > 0) {
      checkboxes.forEach((checkbox) => {
          valores.push(checkbox.value);
      });
  }


  console.log(valores)

  alert("Agora é só aguardar o nosso retorno em até 3 dias úteis!")
}
