// DOM Manipulation
// create new element
const pBaru = document.createElement('p');
// create text in new tag p (pBaru)
const textPBaru = document.createTextNode('paragraf baru');

// insert textPBaru to pBaru
pBaru.appendChild(textPBaru);

// insert pBaru at the end of section that have id="a"
const sectionA = document.querySelector('section#a');
sectionA.appendChild(pBaru);

pBaru.style.backgroundColor = 'lightblue';

// ===========================================================
// ================ insertBefore() ===========================
// ===========================================================

// create new element
const liBaru = document.createElement('li');

// create text to li element
const textLiBaru = document.createTextNode('item baru');

liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru,li2);

liBaru.style.backgroundColor = 'lightblue';


// ===========================================================
// ================ removeChild() ============================
// ===========================================================

const link = document.getElementsByTagName('a')[0];

const aa = document.querySelector('section#a');

aa.removeChild(link);


// ===========================================================
// ================ replaceChild() ===========================
// ===========================================================


const pp = document.querySelector('section#b');
const h22 = pp.getElementsByTagName('p')[0];

const h2baru = document.createElement('h1');
const texth2Baru = document.createTextNode('judul baru!');

h2baru.appendChild(texth2Baru);

pp.replaceChild(h2baru,h22);

h2baru.style.backgroundColor = 'lightblue';