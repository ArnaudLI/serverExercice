const newsService = {
    getNews
}

function getNews() {
    return [
        {
            titre: 'news 1',
            datePublication: '2020-09-23T18:25:43.511Z',
            contenu: ''
        }, 
        {
            titre: 'news 2',
            datePublication: '20120-05-23T18:25:43.511Z',
            contenu: ''
        }, 
        {
            titre: 'news 3',
            datePublication: '2020-04-23T18:25:43.511Z',
            contenu: ''
        }, {
            titre: 'news 4',
            datePublication: '2019-04-23T18:25:43.511Z',
            contenu: ''
        }
    ]
}

module.exports = newsService