import AnimaNumeros from './anima-numeros.js';

<<<<<<< HEAD
export default function fetchAnimais(url, target) {
  // Cria a div contendo informações
  // com o total de animais
||||||| bba0ad4
export default function initFetchAnimais() {
=======
export default function fetchAnimais(url, target) {
  // cria div contendo informações
  // com tatal de animais
>>>>>>> main
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

<<<<<<< HEAD
  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
||||||| bba0ad4
  async function fetchAnimais(url) {
=======
  // prenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os números de cada animal
  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // puxa os animais atraves de um aqruivo JSON
  // e cria cada animal usando createAnimal
  async function criarAnimais() {
>>>>>>> main
    try {
<<<<<<< HEAD
      // Fetch, espera a resposta e transforma em json
||||||| bba0ad4
=======
      // fetch espera resposta e transforma em JSON
>>>>>>> main
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
<<<<<<< HEAD

      // Após a transformação de json, ativa as funções
      // para preencher e animar os números
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();
||||||| bba0ad4
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
=======

      // Após a transgormação de JSON, ativa as funções
      // para preencher e animar os numeros
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumero();
>>>>>>> main
    } catch (erro) {
      console.log(erro);
    }
  }
<<<<<<< HEAD

  return criarAnimais();
||||||| bba0ad4

  fetchAnimais('./animaisapi.json');
=======
  return criarAnimais();
>>>>>>> main
}
