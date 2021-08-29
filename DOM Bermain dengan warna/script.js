const ubahwarna = document.getElementsByTagName('h1')[0];
function ubahWarna(){
    ubahwarna.style.color = 'lightblue';

    // untuk menambahkan class apabila belum ada di dalam tag. Menghapus class apabila sudah ada di dalam tag
    document.body.classList.toggle('bodibekgron');
}

const tambahTombol = document.createElement('button');
const tulisanTombol = document.createTextNode('tindis');
tambahTombol.appendChild(tulisanTombol);

//menambahkan attribute ke dalam button yang baru dibuat
tambahTombol.setAttribute('type', 'button');

//mengambil nama class button1
const button = document.getElementsByClassName('button1')[0];

// menaruh tombol tambahTombol setelah tombol dengan class button1
button.after(tambahTombol);

tambahTombol.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    console.log(r);
    document.body.style.backgroundColor = 'rgb('+ r +',' + g +','+ b +')';
})


// membuat tag input dengan menggunakan dom javascript
// membuat tag input warna hijau
const elemntHijau = document.createElement('input');
const typeHijau = elemntHijau.setAttribute('type','range');
const minHijau = elemntHijau.setAttribute('min','0');
const maxHijau = elemntHijau.setAttribute('max','255');
const nameHijau = elemntHijau.setAttribute('name','sHijau');

// membuat tag input warna biru
const elemntBiru = document.createElement('input');
const typeBiru = elemntBiru.setAttribute('type','range');
const minBiru = elemntBiru.setAttribute('min','0');
const maxBiru = elemntBiru.setAttribute('max','255');
const nameBiaru = elemntBiru.setAttribute('name','sBiru');

const sMerah = document.querySelector('input[name=sMerah]');

// meletakkan slider hijau
const ambilKotakH = document.getElementsByClassName('hijau')[0];
ambilKotakH.after(elemntHijau);

// meletakkan slider biru
const ambilKotakB = document.getElementsByClassName('biru')[0];
ambilKotakB.after(elemntBiru);


sMerah.addEventListener('input', function(){
    const r = sMerah.value; // value untuk mengambil nilai yang ada didalam element input. apapun.
    const g = elemntHijau.value;
    const b = elemntBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

elemntHijau.addEventListener('input',function(){
    const r = sMerah.value;
    const g = elemntHijau.value;
    const b = elemntBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

elemntBiru.addEventListener('input',function(){
    const r = sMerah.value;
    const g = elemntHijau.value;
    const b = elemntBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})