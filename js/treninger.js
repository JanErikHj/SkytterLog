"use strict";

import {
  accordianHeader,
  accordianBody,
  accordianFooter,
} from "./modules/accordion.js";

const treninger = [
  {
    dato: "01.01.2025",
    sted: "Ålesund",
    serier: {
      s1: [9, 8, 9.9, 10.2, 10.6],
      s2: [7.4, 8, 10.7, 10.2, 10.6],
      s3: [8, 10, 9.9, 10.2, 10.6],
    },
  },
  {
    dato: "08.01.2025",
    sted: "Langevåg",
    serier: {
      s1: [9, 7, 9.8, 10.2, 10.6],
      s2: [7.4, 8, 10.2, 10.2, 10.6],
      s3: [8, 10, 10, 10.2, 10.6],
    },
  },
  {
    dato: "05.01.2025",
    sted: "Ålesund",
    serier: {
      s1: [9, 9.5, 9.9, 10.2, 10.6],
      s2: [7.4, 9.5, 10.7, 10.2, 10.6],
      s3: [8, 10.5, 9.9, 10.2, 10.6],
    },
  },
];

const displayDiv = document.querySelector(".display-treninger");
let htmlText = "";
let count = 0;

const calculateSum = function (serier) {
  const s1 = serier.s1.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  const s2 = serier.s2.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  const s3 = serier.s3.reduce(function (acc, val) {
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

const calculateSerieESN = function (serie) {
  const total = serie.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return total / serie.length;
};

const seriesToString = function (series) {
  let str = "";
  const seriesS = series.toSorted(function (a, b) {
    return a - b;
  });
  for (let item of seriesS) {
    let hit = item.toFixed(1);
    str += String(hit).padStart(5, "\xa0");
  }
  return str;
};

const displayTreninger = function (treninger) {
  for (let trening of treninger) {
    const header = `Trening ${trening.dato} - Sted: ${
      trening.sted
    } - Sum: ${calculateSum(trening.serier).toFixed(2)} - ESN: ${calculateESN(
      trening.serier
    ).toFixed(3)}`;
    htmlText += `
    <div class="accordion" id="accordionFlushExample${count}">
  <div class="accordion-item">
  <h2 class="header-style">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapse${count}"
      aria-expanded="false"
      aria-controls="flush-collapse${count}"
    >
      ${header}
    </button>
  </h2>
  <div
    id="flush-collapse${count}"
    class="accordion-collapse collapse"
    data-bs-parent="#accordionFlushExample${count}"
  >
    <div class="accordion-body">
      <table class="table table-hover table-striped">
      <thead>
    <tr>
      <th scope="col">Serie</th>
      <th scope="col">Treff 1</th>
      <th scope="col">Treff 2</th>
      <th scope="col">Treff 3</th>
      <th scope="col">Treff 4</th>
      <th scope="col">Treff 5</th>
      <th scope="col">Sum</th>
      <th scope="col">ESN</th>

    </tr>
  </thead><tbody class="table-group-divider">
  <tr>
    <td class="table-success">Serie 1</td>
    <td>${trening.serier.s1[0]}</td>
    <td>${trening.serier.s1[1]}</td>
    <td>${trening.serier.s1[2]}</td>
    <td>${trening.serier.s1[3]}</td>
    <td>${trening.serier.s1[4]}</td>
    <td class="table-primary">${calculateSeriesTotal(trening.serier.s1).toFixed(
      2
    )}</td>
    <td class="table-primary">${calculateSerieESN(trening.serier.s1).toFixed(
      3
    )}</td>
    </tr>
    <tr>
    <td class="table-success">Serie 2</td>
    <td>${trening.serier.s2[0]}</td>
    <td>${trening.serier.s2[1]}</td>
    <td>${trening.serier.s2[2]}</td>
    <td>${trening.serier.s2[3]}</td>
    <td>${trening.serier.s2[4]}</td>
    <td class="table-primary">${calculateSeriesTotal(trening.serier.s2).toFixed(
      2
    )}</td>
    <td class="table-primary">${calculateSerieESN(trening.serier.s2).toFixed(
      3
    )}</td>
    </tr>
    <tr>
    <td class="table-success">Serie 3</td>
    <td>${trening.serier.s3[0]}</td>
    <td>${trening.serier.s3[1]}</td>
    <td>${trening.serier.s3[2]}</td>
    <td>${trening.serier.s3[3]}</td>
    <td>${trening.serier.s3[4]}</td>
    <td class="table-primary">${calculateSeriesTotal(trening.serier.s3).toFixed(
      2
    )}</td>
    <td class="table-primary">${calculateSerieESN(trening.serier.s3).toFixed(
      3
    )}</td>
    </tr>
    </tbody>
    </table>
    </div>
  </div>
</div>
</div>
  `;
    count++;
  }
  displayDiv.innerHTML += htmlText;
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
    "#esn-header"
  ).textContent = `Enkeltskudd Nøyaktighet alle treninger: ${shooterESN.toFixed(
    3
  )}`;
};

displayTreninger(treninger);
const shooterESN = calculateESNTotal(treninger);
displayESN(shooterESN);
