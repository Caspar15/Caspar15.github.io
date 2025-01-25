function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark'));
}

function searchArticles() {
  const query = document.getElementById('searchBox').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const text = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = text.includes(query) ? 'block' : 'none';
  });
}

function filterCategory(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.display = card.dataset.category === category || category === 'all' ? 'block' : 'none';
  });
}
