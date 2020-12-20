const productService = {
    getProducts
}

module.exports = productService

function getProducts() {
    return [
        {
            titre: 'un livre inconnu',
            datePublication: '1992-06-23T18:25:43.511Z',
            resume: 'Peu de gens savent vraiment de quoi ce livre parle',
            stock: 5
        },
        {
            titre: 'Dune',
            datePublication: '1970-09-23T18:25:43.511Z',
            resume: 'Le meilleur livre de tous les temps',
            stock: 5
        },
        {
            titre: 'Harry Potter',
            datePublication: '2020-09-23T18:25:43.511Z',
            resume: 'un grand classique',
            stock: 5
        },     
        {
            titre: 'Percy Jackson et le voleur de foudre',
            datePublication: '2020-09-23T18:25:43.511Z',
            resume: 'livre à lire',
            stock: 5
        },
        {
            titre: 'un titre',
            datePublication: '2000-09-23T18:25:43.511Z',
            resume: 'un description',
            stock: 5
        },
        {
            titre: 'un autre livre',
            datePublication: '2020-02-23T18:25:43.511Z',
            resume: 'une autre description',
            stock: 5
        },
        {
            titre: 'je n\'ai plus d\'idée pour les titres',
            datePublication: '2020-09-11T18:25:43.511Z',
            resume: 'Ni pour les descriptions',
            stock: 5
        }
    ]
}