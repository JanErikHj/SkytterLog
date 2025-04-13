'use strict';

const stevner = [
  {
    dato: '01.01.2025',
    type: 'Bane',
    sted: 'Stordal',
    serier: {
      'Serie 1': [1, 2, 3, 4, 5],
      'Serie 2': [2, 3, 4, 5, 6],
      'Serie 3': [3, 4, 5, 6, 7],
      'Serie 4': [4, 5, 6, 7, 8],
      'Serie 5': [5, 6, 7, 8, 9],
    },
  },
  {
    dato: '01.02.2025',
    type: 'Bane',
    sted: 'Ålesund',
    serier: {
      'Serie 1': [1, 2, 3, 4, 5],
      'Serie 2': [2, 3, 4, 5, 6],
      'Serie 3': [3, 4, 5, 6, 7],
      'Serie 4': [4, 5, 6, 7, 8],
      'Serie 5': [5, 6, 7, 8, 9],
    },
  },
  {
    dato: '01.03.2025',
    type: 'Bane',
    sted: 'Langevåg',
    serier: {
      'Serie 1': [1, 2, 3, 4, 5],
      'Serie 2': [2, 3, 4, 5, 6],
      'Serie 3': [3, 4, 5, 6, 7],
      'Serie 4': [4, 5, 6, 7, 8],
      'Serie 5': [5, 6, 7, 8, 9],
    },
  },
];

const stevneContainer = document.querySelector('#stevner');
stevneContainer.innerHTML = '';
let htmlText = ``;

const calculateESN = function (series) {
  return series.reduce((acc, current) => acc + current / series.length, 0);
};

const generateSerieHtml = function (serier) {
  let serieHtml = ``;

  for (const [name, serie] of Object.entries(serier)) {
    const currentESN = calculateESN(serie);
    serieHtml += `
        <div class="row stevne-resultat">
        <div class="col serie-no">${name}</div>
        <div class="col stevne-serie">${serie[0]}</div>
        <div class="col stevne-serie">${serie[1]}</div>
        <div class="col stevne-serie">${serie[2]}</div>
        <div class="col stevne-serie">${serie[3]}</div>
        <div class="col stevne-serie">${serie[4]}</div>
        <div class="col serie-esn">1${currentESN}</div>
      </div>

        `;
  }

  return serieHtml;
};

const displayStevne = function (stevne) {
  htmlText += `
     <div class="row stevne-header">
        <div class="col stevne-head-col">${stevne.dato}</div>
        <div class="col stevne-head-col">${stevne.type}</div>
        <div class="col stevne-head-col">${stevne.sted}</div>
      </div>
      <div class="row stevne-resultat-header">
        <div class="col">Serie</div>
        <div class="col stevne-serie">Skudd 1</div>
        <div class="col stevne-serie">Skudd 2</div>
        <div class="col stevne-serie">Skudd 3</div>
        <div class="col stevne-serie">Skudd 4</div>
        <div class="col stevne-serie">Skudd 5</div>
        <div class="col">Serie ESN</div>
      </div>
    `;
  htmlText += generateSerieHtml(stevne.serier);
};

for (const stevne of stevner) {
  displayStevne(stevne);
  stevneContainer.innerHTML = htmlText;
}

`
<div class="container text-center" id="stevner">
      <div class="row stevne-header">
        <div class="col stevne-head-col">01.01.2025</div>
        <div class="col stevne-head-col">Bane</div>
        <div class="col stevne-head-col">Stordal</div>
      </div>
      <div class="row stevne-resultat-header">
        <div class="col">Serie</div>
        <div class="col stevne-serie">Treffpunkt skudd 1</div>
        <div class="col stevne-serie">Treffpunkt skudd 2</div>
        <div class="col stevne-serie">Treffpunkt skudd 3</div>
        <div class="col stevne-serie">Treffpunkt skudd 4</div>
        <div class="col stevne-serie">Treffpunkt skudd 5</div>
        <div class="col">Serie ESN</div>
      </div>
      <div class="row stevne-resultat">
        <div class="col serie-no">Serie 1</div>
        <div class="col stevne-serie">09.5</div>
        <div class="col stevne-serie">10.2</div>
        <div class="col stevne-serie">10.3</div>
        <div class="col stevne-serie">09.7</div>
        <div class="col stevne-serie">10.9</div>
        <div class="col serie-esn">10.12</div>
      </div>
    </div>
`;
