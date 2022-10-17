 /* fetch('http://localhost:1337/api/avis-temoignages')
    .then(function(res){
        if (res.ok) {
            return res.json();
    }
})     .then(function(value){
    console.log(value);
})
   .catch(function(err){
    //Une erreur est survenue
});  */

 /* exo 1 */

 /*
  function askHello() {
    fetch("http://localhost:1337/api/avis-temoignages/1")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      document
          .getElementById("hello-result")
          .innerText = value.data.attributes.temoignages
          console.log(value)
    })
    .catch(function(err) {
      // Une erreur est survenue
    });
  } 
  
  document
    .getElementById("ask-hello")
    .addEventListener("click", askHello); */


/*let button = document.getElementById('button');
let image = document.getElementById('image');
let pokeNumber = document.getElementById('number');
let pokeName = document.getElementById('name');

const changePokemon = async() => {
  let randomNumber = Math.ceil( Math.random() * 150) + 1; // 1 et 151

  let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

  let data = await fetch(requestString)
  console.log(data)

  let response = await data.json();
  console.log(response)

  image.src = response.sprites.front_default;
  pokeNumber.textContent = `#${response.id}`;
  pokeName.textContent = response.name
}


changePokemon();
button.addEventListener("click", changePokemon); /*


/*let test = document.getElementById("test")

const phrase = async() => {

  let requestString = 'http://localhost:1337/api/avis-temoignages/1';

  let data = await fetch(requestString)
  console.log(data)

  let response = await data.json();
  console.log(response)

  test.textContent = response.data.attributes.temoignages
}

phrase() */



let titre = document.getElementById("titre")

const h = async() => {

  let requestString = 'http://195.14.105.123:1337/api/articles/2';

  let data = await fetch(requestString)
  console.log(data)

  let response = await data.json();
  console.log(response)

  titre.textContent = response.data.attributes.titre
}

h() 

let texte = document.getElementById("texte")

const p = async() => {

  let requestString = 'http://195.14.105.123:1337/api/articles/2';

  let data = await fetch(requestString)
  console.log(data)

  let response = await data.json();
  console.log(response)

  texte.textContent = response.data.attributes.contenu
}

p() 