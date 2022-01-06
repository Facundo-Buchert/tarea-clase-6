/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#next-step').onclick = function(event) {
    const $numberOfMembers = document.querySelector('#number-of-members');
    const numberOfMembers = Number($numberOfMembers.value);
  
    deletePreviousMembers();
    createMembers(numberOfMembers);
  
    event.preventDefault();
  };
  
  
  function getHigerNumber(numbers) {
    let higerNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > higerNumber) {
        higerNumber = numbers[i];
      }
    }
  
    return higerNumber;
  }
  
  function getTheLeastNumber(numbers) {
    let theLeastNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < theLeastNumber) {
        theLeastNumber = numbers[i];
      }
    }
  
    return theLeastNumber;
  }
  
  function getAverage(numbers) {
    let average = 0
  
    for (let i = 0; i < numbers.length; i++) {
      average = average + Number(numbers[i])
    }
  
    return (average / numbers.length)
  }

/*
  function getAverage(numbers) {
    let acumulator = 0;
    for (let i = 0; i < numbers.length; i++) {
      acumulator += numbers[i];
    }
  
    return (acumulator / numbers.length).toFixed(2);
  }
  */
  
  document.querySelector('#calculate').onclick = function(event) {
    const numbers = getMembersAges();
    showAge('older', getHigerNumber(numbers));
    showAge('younger', getTheLeastNumber(numbers));
    showAge('average', getAverage(numbers));

  
    event.preventDefault();
  };
  
  document.querySelector('#reset').onclick = reset;
  
  function deletePreviousMembers() {
    const $members = document.querySelectorAll('.members');
    for (let i = 0; i < $members.length; i++) {
      $members[i].remove();  
    }
    showAge('older', "");
    showAge('younger', "");
    showAge('average', "");
  }
  
  function createMembers(numberOfMembers) {
  
    for (let i = 0; i < numberOfMembers; i++) {
      createMember(i);
    }
  }
  
  function createMember(index) {
    const $div = document.createElement('div');
    $div.className = 'members';
  
    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante #: ' + (index + 1);
    const $input = document.createElement('input');
    $input.className = "age"
    $input.type = 'number';
  
    $div.appendChild($label);
    $div.appendChild($input);
  
    const $members = document.querySelector('#members');
    $members.appendChild($div);
  }
  
  function reset() {
    deletePreviousMembers();
  }
  
  
  function showAge(type, value) {
    document.querySelector(`#${type}`).textContent = value;
  }
  
  function getMembersAges() {
    const $members = document.querySelectorAll('.age');
    const ages = [];
    for (let i = 0; i < $members.length; i++) {
      ages.push(Number($members[i].value));
    }
    return ages;
  }





/* 
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
