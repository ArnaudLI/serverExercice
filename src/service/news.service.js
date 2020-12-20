const newsService = {
    getNews
}

function getNews() {
    return [
        {
            titre: 'news 1',
            datePublication: '2020-09-23T18:25:43.511Z',
            contenu: 'Arrakis est une planète imaginaire de l\'univers du Cycle de Dune de Frank Herbert. Également appelée Dune, c\'est une planète-désert entièrement couverte de sable et de roches, parcourue par les immenses Vers des sables. Malgré cela, elle joue un rôle crucial dans l\'économie galactique, puisqu\'elle constitue l\'unique source d\'Épice. Quelques villes ont été fondées à sa surface, dont la capitale Arrakeen, mais la majeure partie de sa population est constituée des Fremen, nomades qui parcourent le désert.'
        }, 
        {
            titre: 'news 2',
            datePublication: '20120-05-23T18:25:43.511Z',
            contenu: 'Arrakis est décrite comme une planète extrêmement sèche sans précipitations, sans étendue d\'eau en surface ni nuages.'
        }, 
        {
            titre: 'news 3',
            datePublication: '2020-04-23T18:25:43.511Z',
            contenu: 'Seule la partie nord de la planète est habitable et explorée par l\'administration impériale.'
        }, {
            titre: 'news 4',
            datePublication: '2019-04-23T18:25:43.511Z',
            contenu: 'Dune est colonisée à l\'époque du Jihad Butlérien par des esclaves Zensunni, les ancêtres des Fremens. '
        }
    ]
}

module.exports = newsService