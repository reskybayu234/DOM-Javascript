const el = document.getElementsByClassName('p3')[0];

function ubahP3() 
{
    el.style.backgroundColor = 'lightblue';
}

// ============================================

const p2 = document.getElementsByClassName('p2')[0];

p2.onClick = ubahP3;


// =====================================

// const qP4 = document.querySelector('section#b p');
// qP4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const liTextBaru = document.createTextNode('item Baru');
//     liBaru.appendChild(liTextBaru);

//     // insert liBaru into ul
//     ul.appendChild(liBaru);
// })


// ==========================================
const mouse = document.querySelector('section#b p');

mouse.addEventListener('mouseenter', function(){
    mouse.style.backgroundColor = 'lightblue';
});

mouse.addEventListener('mouseleave',function () {
    mouse.style.backgroundColor = 'white';
});