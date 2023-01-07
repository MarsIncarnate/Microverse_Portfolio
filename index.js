const menu = document.getElementById('menu-items');
const nav = document.getElementById('navBar');
const navX = document.getElementById('navX');
const detail = document.getElementById('portfolio-details');
const detailImg = document.getElementById('detailImg');
const detailH1 = document.getElementById('detailH1');
const detailUl = document.getElementById('detailUl');
const detailP = document.getElementById('detailP');
const detailCont = document.getElementById('detailCont');
const portfolio = document.getElementById('portfolio');
const Details = [
  {
    img: 'images/details-image.png',
    h1: 'Keeping track of hundreds of components',
    h3: 'Multi-Post Stories<br>Gain+Glory',
    ul3: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    img: 'images/details-image1.png',
    h1: 'Keeping track of hundreds of components',
    h3: 'Multi-Post Stories<br>Gain+Glory',
    ul3: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    img: 'images/details-image2.png',
    h1: 'Keeping track of hundreds of components',
    h3: 'Multi-Post Stories<br>Gain+Glory',
    ul3: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    img: 'images/details-image.png',
    h1: 'Keeping track of hundreds of components',
    h3: 'Multi-Post Stories<br>Gain+Glory',
    ul3: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    img: 'images/details-image1.png',
    h1: 'Keeping track of hundreds of components',
    h3: 'Multi-Post Stories<br>Gain+Glory',
    ul3: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    img: 'images/details-image2.png',
    h1: 'Keeping track of hundreds of components',
    h3: 'Multi-Post Stories<br>Gain+Glory',
    ul3: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    ul: ['Ruby on rails', 'css', 'JavaScript'],
    ul2: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal'],
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
];

for (let i = 0; i < Details.length; i += 1) {
  const item = portfolio.getElementsByClassName('portfolio-item')[i];
  item.getElementsByTagName('img')[0].src = Details[i].img;
  item.getElementsByTagName('ul')[0].innerHTML = Details[i].ul3.map((item) => `<li>${item}</li>`).join('');
  item.getElementsByTagName('h3')[0].innerHTML = Details[i].h3;
}

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
  detailCont.style.display = 'block';
  if (window.screen.width < 768) {
    detail.style.top = `${(748 + 474 * a)}px`;
    detailUl.innerHTML = Details[a].ul.map((item) => `<li>${item}</li>`).join('');
  } else if (a < 3) {
    detail.style.top = '1159px';
    detailUl.innerHTML = Details[a].ul2.map((item) => `<li>${item}</li>`).join('');
  }
  detailImg.src = Details[a].img;
  detailH1.innerHTML = Details[a].h1;
  detailP.innerHTML = Details[a].p;
}

function closeDetails() {
  detail.style.display = 'none';
  detailCont.style.display = 'none';
}

if (nav === '20') {
  toggleMenu();
  revealDetails();
  closeDetails();
}