// document.querySelector() -> element
const p4 = document.querySelector('section#b ul li:nth-child(2)');

p4.style.color = 'red';
p4.style.fontSize = "30px";

//==============================================


//document.querySelectorAll()
const p = document.querySelectorAll('p');
// p[0].style.backgroundColor = 'blue';

for  (let i = 0; i < p.length; i++)
{
    p[i].style.backgroundColor = 'lightblue';
    p[i].style.color = 'white';
}

//==============================================

const p1 = document.querySelector('section#b');
const p4 = p1.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';


