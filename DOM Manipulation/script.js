// ===== innerHTML =================
// =====================================

const judul = document.getElementById('judul');
judul.innerHTML = "Resky Bayu Andhika";


const ida = document.querySelector('section#a');
// ida.innerHTML = 'Hello World';


// =====================================
// ====== style =====================
// =====================================


const style1 = document.querySelector('section#b');
style1.style.backgroundColor = 'salmon';



// =====================================
// ====== setAttribute() ============
// =====================================


const sAttribute = document.getElementsByTagName('h1')[0];
// sAttribute.setAttribute('name of attribute','value of attribute');
sAttribute.setAttribute('name','bayu');

// setAttribute() in the console

const aa = document.querySelector('section#a');
// then open the console and type a.setAttribute('name','dhika');


const coba = aa.getElementsByTagName('a')[0];
coba.setAttribute('name','baru');
// question (why i get an error when i wanna setAttribute of 'a' tag with using object ida, (related with innerHTML on top))

// to get attribute in that tag we can use getAttribute()
const cobatampil = coba.getAttribute('name');



// =====================================
// ====== classList.add() ==============
// =====================================

coba.classList.add('kelas');

// =====================================
// ====== classList.remove() ==============
// =====================================


coba.classList.remove('kelas');


// =====================================
// ====== classList.toggle() ===========
// =====================================


coba.classList.toggle('kelas');
