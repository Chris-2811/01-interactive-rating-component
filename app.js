const ratings = document.querySelectorAll('.rating');
const submit = document.getElementById('submit');
const modal = document.getElementById('modal');
const container = document.getElementById('container');
const ratingText = document.getElementById('rating-text');

let selected = false;

// Add EventListener
ratings.forEach((rating) => {
  rating.addEventListener('click', (e) => {
    ratings.forEach((rating) => {
      rating.classList.remove('selected');
    });
    e.target.classList.add('selected');
  });
});

submit.addEventListener('click', (e) => {
  const selected = document.querySelectorAll('.rating.selected');

  console.log(selected[0].value);

  if (selected.length === 1) {
    container.style.display = 'none';
    modal.style.display = 'block';

    ratingText.innerText = `You selected ${selected[0].value} out of 5`;
  }
});
