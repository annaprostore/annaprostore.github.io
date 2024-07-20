


const form = document.getElementById('rentalForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const hours = parseInt(document.getElementById('hours').value);
  const people = parseInt(document.getElementById('people').value);
  const cost = parseInt(document.getElementById('cost').value);

  
  const extraCostPerPerson = 100; // Доплата за каждого человека свыше 5

  let totalCost = cost * hours; // Базовая стоимость аренды

  if (people > 5) {
    const extraPeople = people - 5;
    totalCost += extraPeople * extraCostPerPerson * hours; // Доплата за дополнительных людей
  }

  resultDiv.textContent = `Итоговая стоимость аренды: ${totalCost} рублей`;
});
