const menu = document.getElementById('menu-items');
const nav = document.getElementById('navBar');
const navX = document.getElementById('navX');
const detail = document.getElementById('portfolio-details');
const detailImg = document.getElementById('detailImg');
const detailH1 = document.getElementById('detailH1');
const detailUl = document.getElementById('detailUl');
const detailP = document.getElementById('detailP');
const Details = [
  {
    img: 'images/details-image.png',
    h1: 'Keeping track of hundreds of components',
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    img: 'images/details-image1.png',
    h1: 'Keeping track of hundreds of components',
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    img: 'images/details-image2.png',
    h1: 'Keeping track of hundreds of components',
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    img: 'images/details-image.png',
    h1: 'Keeping track of hundreds of components',
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    img: 'images/details-image1.png',
    h1: 'Keeping track of hundreds of components',
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    img: 'images/details-image2.png',
    h1: 'Keeping track of hundreds of components',
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
];

function toggleMenu() {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    navX.style.display = 'none';
    nav.style.display = 'flex';
  } else {
    menu.style.display = 'flex';
    navX.style.display = 'block';
    nav.style.display = 'none';
  }
}

function revealDetails(a) {
  detail.style.display = 'flex';
  if (window.screen.width < 768) {
    detail.style.top = `${(748 + 474 * a)}px`;
    detailUl.innerHTML = Details[a].ul.map((item) => `<li>${item}</li>`).join('');
  } else if (a < 3) {
    detail.style.top = '1159px';
    detailUl.innerHTML = Details[a].ul2.map((item) => `<li>${item}</li>`).join('');
  }
  document.getElementById('root').style.backgroundColor = '#c1c7d0';
  detailImg.src = Details[a].img;
  detailH1.innerHTML = Details[a].h1;
  detailP.innerHTML = Details[a].p;
}

function closeDetails() {
  detail.style.display = 'none';
  document.getElementById('root').style.backgroundColor = 'unset';
}

if (nav === '20') {
  toggleMenu();
  revealDetails();
  closeDetails();
}
