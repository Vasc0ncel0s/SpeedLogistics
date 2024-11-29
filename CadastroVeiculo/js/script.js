// Obtém o primeiro elemento select e a span onde o texto será alterado
const selectElement = document.getElementsByClassName("vehicle-select")[0]; // Acessa o primeiro <select> da coleção
const displayElement = document.getElementById("selected-vehicle");

// Função que atualiza o texto na span com base na opção selecionada
selectElement.addEventListener("change", function() {
  // Obtém o valor da opção selecionada
  const selectedValue = selectElement.value;

  // Altera o conteúdo da span com o valor selecionado
  if (selectedValue) {
    // Exibe o valor com a primeira letra maiúscula
    displayElement.textContent = selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1);
  }
});



const selectElement2 = document.getElementsByClassName("option-select")[0]; 
const displayElement2 = document.getElementById("selected-option");


selectElement2.addEventListener("change", function() {

  const selectedValue2 = selectElement2.value;

  
  if (selectedValue2) {
    
    displayElement2.textContent = selectedValue2.charAt(0).toUpperCase() + selectedValue2.slice(1);
  }
});




const registerButton = document.querySelector(".register-vehicle-button"); // Seleciona o botão pela classe

// Função para lidar com o clique no botão
registerButton.addEventListener("click", function(event) {
  // Impede que o formulário seja enviado (se houver)
  event.preventDefault();

  // Exibe a mensagem "Veículo cadastrado" usando alert
  alert("Veículo cadastrado");

  // Recarrega a página
  location.reload();
});