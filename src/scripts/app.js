const cats = [
  { id: 1, name: 'mapale' },
  { id: 2, name: 'felix' },
  { id: 3, name: 'milu' },
  { id: 4, name: 'doni' }
];

const element = document.getElementById('app');
// const catsList = cats.map(cat => {
//   const list = document.createElement('li');
//   list.innerHTML = cat.name;

//   return list;
// });

function getCatList(cats) {
  return cats.map(cat => {
    const list = document.createElement('li');
    list.innerHTML = cat.name;

    return list;
  });
}

function render(target, nodesArray) {
  target.innerHTML = '';
  nodesArray.forEach(node => target.appendChild(node));
}

const clickPar = document.getElementById('gatosPares');

clickPar.addEventListener('click', () => {
  const even = cats.filter(cat => cat.id % 2 === 0);
  const result = getCatList(even);
  render(element, result);
});
const clickImpar = document.getElementById('gatosImpares');
clickImpar.addEventListener('click', () => {
  const odd = cats.filter(cat => cat.id % 2 === 1);
  const result = getCatList(odd);
  render(element, result);
});
