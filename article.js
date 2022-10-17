
let url = 'http://195.14.105.123:1337'
fetch("http://195.14.105.123:1337/api/articles?populate=*")
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (value) {

        value.data.sort(function (a, b) {
        });

        let n = 1

        for (let modif of value.data) {
            modif.id = n;
            n++;
        }   
        let eltConteneur = document.querySelector('.conteneur-article')
        for (let article of value.data) {
            let eltArticle = document.createElement('article');
            eltConteneur.appendChild(eltArticle);
            eltArticle.classList.add('article-child');
            console.log(value.data);
           
            let eltNul = document.querySelector('.conteneur-article')


            let eltLien = document.createElement('a')
            eltArticle.appendChild(eltLien)
            eltLien.href = '#'
            eltLien.classList.add('lien')

            let eltImage = document.createElement('img');
            eltLien.appendChild(eltImage);
            eltImage.src = url + article.attributes.Image.data.attributes.url;
            eltImage.classList.add('image');

            let eltTitre = document.createElement('h2')
            eltLien.appendChild(eltTitre);
            eltTitre.innerText = article.attributes.Titre;
            eltTitre.classList.add('Titre');

        }

    })
    .catch(function (err) {

    });