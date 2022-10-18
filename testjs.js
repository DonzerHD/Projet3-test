
let url = 'http://195.14.105.123:1337'
fetch("http://195.14.105.123:1337/api/articles/2?populate=*")
.then(function(res){
    if (res.ok) {
        return res.json();
}
})     .then(function(value){
     console.log(value);

        let eltConteneur = document.querySelector('.conteneur')
        let article = "http://195.14.105.123:1337/api/articles/2?populate=*"
        let eltArticle = document.createElement('article');
            
            eltConteneur.appendChild(eltArticle);
            eltArticle.classList.add('article-child');
            console.log(article);

            let eltTitre = document.createElement('h2')
            eltArticle.appendChild(eltTitre);
            eltTitre.innerText = value.data.attributes.Titre;
            eltTitre.classList.add('Titre');

            let eltImage = document.createElement('img');
            eltArticle.appendChild(eltImage);
            eltImage.src = url + value.data.attributes.Image.data.attributes.url;
            eltImage.classList.add('image');

            let eltTitre2 = document.createElement('h2')
            eltArticle.appendChild(eltTitre2);
            eltTitre2.innerText = value.data.attributes.Titre2;
            eltTitre2.classList.add('Titre2');

            let eltTexte = document.createElement('p')
            eltArticle.appendChild(eltTexte);
            eltTexte.innerText = value.data.attributes.Texte;
            eltTexte.classList.add('Texte');


            

        

    })
    .catch(function (err) {

    });