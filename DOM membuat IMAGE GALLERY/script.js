
const thumbs = document.querySelectorAll('.thumb');
const img = document.getElementsByTagName('img')[0];

thumbs.forEach(function(el){

    el.addEventListener('click',function(e){
        img.src = el.src;
        img.classList.add('fade');
        setTimeout(function(){
            img.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(el2){
            el2.className = 'thumb';
        });
        e.target.classList.add('active');
    });
})
