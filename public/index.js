const pawContainer = document.getElementById('paw-container');

const pawData1 = [
  {top: 750, left: 130+700, opacity: 0.8},
  {top: 700, left: 350+700, opacity: 0.85},
  {top: 550, left: 240+700, opacity: 0.75},
  {top: 350, left: 350+700, opacity: 0.6},
  {top: 300, left: 570+700, opacity: 0.5},
  {top: 150, left: 490+700, opacity: 0.4},
  {top: 100, left: 710+700, opacity: 0.3},


];

const pawData2 = [
  {top: 750, left: 130, opacity: 0.3},
  {top: 700, left: 350, opacity: 0.4},
  {top: 550, left: 240, opacity: 0.5},
  {top: 500, left: 460, opacity: 0.3},
  {top: 330, left: 350, opacity: 0.65},
  {top: 300, left: 570, opacity: 0.7},
  {top: 150, left: 490, opacity: 0.8},
  {top: 100, left: 710, opacity: 0.9}
]

pawData1.forEach(paw => {
  const div = document.createElement('div');
  div.className = 'paws';
  div.style.top = paw.top + 'px';
  div.style.left = paw.left + 'px';
  div.style.opacity = paw.opacity;
  div.style.transform = 'rotate(210deg)'
  div.innerHTML = '<i class="fa-solid fa-paw"></i>';
  pawContainer.appendChild(div);
});

pawData2.forEach(paw => {
    const div = document.createElement('div');
    div.className = 'paws';
    div.style.top = paw.top + 'px';
    div.style.left = paw.left + 'px';
    div.style.opacity = paw.opacity;
    div.style.transform = 'rotate(30deg)'
    div.innerHTML = '<i class="fa-solid fa-paw"></i>';
    pawContainer.appendChild(div);
  });
  