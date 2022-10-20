
let url = 'http://195.14.105.123:1337'
fetch("http://195.14.105.123:1337/api/etapes?populate=*")
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (value) {
                                  
        let eltConteneur = document.querySelector('.conteneur-article')   
        for (let etape of value.data)
        {           
            let eltArticle = document.createElement('article');
            eltConteneur.appendChild(eltArticle);
            eltArticle.classList.add('article-child');
            console.log(etape);

            let eltTitre = document.createElement('h2')
            eltArticle.appendChild(eltTitre);
            eltTitre.innerText = etape.attributes.name;
            eltTitre.classList.add('Titre');

            let eltImage = document.createElement('img');
            eltArticle.appendChild(eltImage);
            eltImage.src = url + etape.attributes.img.data.attributes.url;
            let coco =  url + etape.attributes.img.data.attributes.url
            console.log(eltImage)
            eltImage.classList.add('image');

          /*  let articleId = article.id
            let eltLien = document.createElement('a')
            eltArticle.appendChild(eltLien)
            eltLien.classList.add('lien')
            eltLien.href = 'testpage.html?id='+ articleId

            let eltImage = document.createElement('img');
            eltLien.appendChild(eltImage);
            eltImage.src = url + article.attributes.Image.data.attributes.url;
            console.log(eltImage)
            eltImage.classList.add('image');

            let eltTitre = document.createElement('h2')
            eltLien.appendChild(eltTitre);
            eltTitre.innerText = article.attributes.Titre;
            eltTitre.classList.add('Titre'); */

        }

    })
    .catch(function (err) {

    });