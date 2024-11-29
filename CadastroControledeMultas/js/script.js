
const selectElement2 = document.getElementsByClassName("option-select")[0]; 
const displayElement2 = document.getElementById("selected-option");


selectElement2.addEventListener("change", function() {

  const selectedValue2 = selectElement2.value;

  
  if (selectedValue2) {
    
    displayElement2.textContent = selectedValue2.charAt(0).toUpperCase() + selectedValue2.slice(1);
  }
});




const registerButton = document.querySelector(".register-motorista-button"); // Seleciona o botão pela classe


registerButton.addEventListener("click", function(event) {
 
  event.preventDefault();

  
  alert("Motorista adicionado ao Sistema");

  // Recarrega a página
  location.reload();
});