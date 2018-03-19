const cats = [
  { id: 1, name: 'mapale' },
  { id: 2, name: 'felix' },
  { id: 3, name: 'milu' },
  { id: 4, name: 'doni' }
];

const element = document.getElementById('app');

cats.forEach(cat => {
  const list = document.createElement('li');
  list.innerHTML = cat.name;

  list.addEventListener('click', () => {
    alert('hola ' + cat.name);
  });

  element.appendChild(list);
});
