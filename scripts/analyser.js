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

let accordionDiv = document.querySelector('.treninger');
let htmlText = '';
let count = 0;
const displayTreninger = function (treninger) {
  for (let trening of treninger) {
    const header = `Trening ${trening.dato} - Sted: ${trening.sted}`;
    htmlText += `
    <div class="accordion" id="accordionFlushExample${count}">
  <div class="accordion-item">
  <h2 class="accordion-header">
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
      <table class="table table-hover">
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
    <td>Serie 1</td>
    <td>${trening.serier.s1[0]}</td>
    <td>${trening.serier.s1[1]}</td>
    <td>${trening.serier.s1[2]}</td>
    <td>${trening.serier.s1[3]}</td>
    <td>${trening.serier.s1[4]}</td>
    </tr>
    <tr>
    <td>Serie 2</td>
    <td>${trening.serier.s2[0]}</td>
    <td>${trening.serier.s2[1]}</td>
    <td>${trening.serier.s2[2]}</td>
    <td>${trening.serier.s2[3]}</td>
    <td>${trening.serier.s2[4]}</td>
    </tr>
    <tr>
    <td>Serie 3</td>
    <td>${trening.serier.s3[0]}</td>
    <td>${trening.serier.s3[1]}</td>
    <td>${trening.serier.s3[2]}</td>
    <td>${trening.serier.s3[3]}</td>
    <td>${trening.serier.s3[4]}</td>
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
  accordionDiv.innerHTML += htmlText;
};

displayTreninger(treninger);
