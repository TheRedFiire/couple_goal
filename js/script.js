let girls = [
    'AJRULLAHI Lea',
    'ALARCOS Athena',
    'ALLAOUI Sara',
    'BAUDET Melissa',
    'BODAUD Natacha',
    'BOUKHELIF Lina',
    'BOUQNITIR Sara',
    'BOURDEL ALBOUY Alice',
    'BRUNEL Sarah',
    'CALANDRAS Tess',
    'CARRAL Lisa',
    'COUPEE Manon',
    'CROUZET Lilou',
    'DUBOIS Maylis',
    'FEKRAOUI Fatim-Ezhra',
    'FROISSART-DOUTRELANT Cyane',
    'GALAUP Ninon',
    'GAUTREAU Julia',
    'GUIGOU-CID Nina',
    'HAYANE Nuhad',
    'IDRISSI Ines',
    'JANDOT DIT DANJOU Lise',
    'JEZIORSKI Julie',
    'JOSEPH Chloe',
    'KASPERSKI Clara'
]

let boys = [
    'BEN HAGA Rayane',
    'BENAMEUR Adam',
    'CASALTA Pierre-Marie',
    'CHAPELLE Vadim',
    'DUMAS Ulysse',
    'ELDIN Simon',
    'ESPINET Dann',
    'JUNIUS Clément',
    'KENNICHE Yanis ',
]

function test() {
    const random_girls = Math.floor(Math.random() * girls.length);
    const random_boys = Math.floor(Math.random() * boys.length);

    var resultat = '<h3>' + girls[random_girls] + ' + ' + boys[random_boys] + ' = ♥</h3>';
    document.getElementById('answer').innerHTML = resultat;
}

