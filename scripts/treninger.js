'use strict';

const treninger = [
  {
    dato: '01.01.2025',
    sted: 'Ålesund',
    serier: {
      s1: [9, 8, 9.9, 10.2, 10.6],
      s2: [7.4, 8, 10.7, 10.2, 10.6],
      s3: [8, 10, 9.9, 10.2, 10.6],
    },
  },
  {
    dato: '08.01.2025',
    sted: 'Langevåg',
    serier: {
      s1: [9, 7, 9.8, 10.2, 10.6],
      s2: [7.4, 8, 10.2, 10.2, 10.6],
      s3: [8, 10, 10, 10.2, 10.6],
    },
  },
  {
    dato: '05.01.2025',
    sted: 'Ålesund',
    serier: {
      s1: [9, 9.5, 9.9, 10.2, 10.6],
      s2: [7.4, 9.5, 10.7, 10.2, 10.6],
      s3: [8, 10.5, 9.9, 10.2, 10.6],
    },
  },
];

const displayDiv = document.querySelector('.display-treninger');

const calculateSum = function (serier) {
  const s1 = serier.s1.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  const s2 = serier.s1.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  const s3 = serier.s1.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return s1 + s2 + s3;
};

const calculateSeriesTotal = function (serie) {
  return serie.reduce((acc, val) => acc + val);
};

const calculateESN = function (serier) {
  const total = calculateSum(serier);
  return total / 15;
};

const seriesToString = function (series) {
  let str = '';
  const seriesS = series.toSorted(function (a, b) {
    return a - b;
  });
  for (let item of seriesS) {
    let hit = item.toFixed(1);
    str += String(hit).padStart(5, '\xa0');
  }
  return str;
};

const displayTreninger = function () {
  displayDiv.innerHTML = '';
  let html = '';
  html += '<table class="table table-hover"><caption>Treninger 2025</caption>';
  html += ` <thead>
    <tr>
      <th scope="col">Dato</th>
      <th scope="col">Sted</th>

      <th scope="col">Total Sum</th>
      <th scope="col">ESN</th>
    </tr>
  </thead><tbody class="table-group-divider">`;

  for (let trening of treninger) {
    let data = `
    <tr>
      <th scope="row">${trening.dato}</th>
      <td>${trening.sted}</td>

      
      
      <td>${calculateSum(trening.serier).toFixed(3)}</td>
      <td>${calculateESN(trening.serier).toFixed(3)}</td>
    </tr>
    <tr>
      <td colspan="4">
        <table class="table mb-0">
        <thead>
        <th scope="col">Serie</th>
        <th scope="col">Treff</th>
        <th scope="col">Sum</th>

        </thead>
        <tr>
        <td>Serie 1</td>
        <td>${seriesToString(trening.serier.s1)}</td>
        <td>${calculateSeriesTotal(trening.serier.s1).toFixed(3)}</td>
        </tr>
        <tr>
        <td>Serie 2</td>
        <td>${seriesToString(trening.serier.s2)}</td>
        <td>${calculateSeriesTotal(trening.serier.s2).toFixed(3)}</td>
        </tr>
        <tr>
        <td>Serie 3</td>
        <td>${seriesToString(trening.serier.s3)}</td>
        <td>${calculateSeriesTotal(trening.serier.s3).toFixed(3)}</td>
        </tr>
          
        </table>
      </td>
    </tr>`;
    html += data;
  }

  html += '</tbody></table>';
  displayDiv.innerHTML = html;
};
const calculateESNTotal = function (treninger) {
  let esnTotal = 0;
  let count = 0;
  for (let trening of treninger) {
    esnTotal += calculateESN(trening.serier);
    count++;
  }
  return esnTotal / count;
};
const displayESN = function (shooterESN) {
  document.querySelector(
    '#esn-header'
  ).textContent = `Enkeltskudd Nøyaktighet alle treninger: ${shooterESN.toFixed(
    3
  )}`;
};

displayTreninger();
const shooterESN = calculateESNTotal(treninger);
displayESN(shooterESN);
