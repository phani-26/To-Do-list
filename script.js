function f(){var c = document.getElementById('container');
c.style.left = window.innerWidth/2 - c.offsetWidth/2 +'px';
c.style.top = window.innerHeight/2-c.offsetHeight/2+'px';

var c1 = document.getElementById('inner-container');
c1.style.left = c.offsetWidth/2 - c1.offsetWidth/2 +'px';
c1.style.top = c.offsetHeight/2 - c1.offsetHeight/2+'px';


var c2 = document.getElementById('text-box');
c2.style.left = c1.offsetWidth/2 - c2.offsetWidth/2 +'px';
c2.style.top = c2.style.left;

var c3 = document.querySelector('#notes');
c3.height= 80/100*c2.offsetHeight;

var c3Style = getComputedStyle(c3);
c2.style.paddingLeft = c3.offsetWidth + parseFloat(c3Style.left) + 3 +'px'; 
console.log(c3Style.left," ",c3Style.width," ", c2.style.paddingLeft);

$('#main-box').css({
    paddingLeft : c2.style.paddingLeft,
})

var c4 = $('.add');
console.log(c4.width());

c4.css({
    left : c2.offsetWidth - c4.width() -3 +'px',
    top : c2.offsetHeight/2 - c4.height()/2+ 'px',
});
var nav = $('#nav');
nav.css({
    left: c2.style.left,
    top: parseFloat(c2.style.top) + c2.offsetHeight +'px',
})
var items = $('#items');
var nav = $('#nav');
items.css({
    top :   parseFloat(nav.css('top')) +nav[0].offsetHeight + 5 + 'px',
    left:c2.style.left,
});

var footer =$('#footer');
footer.css({
    top: parseFloat(items.css('top')) + items.height() + 5 +'px',
    left:c2.style.left,
});

c1.height = c2.offsetHeight + items[0].offsetHeight + nav[0].offsetHeight +
 footer[0].offsetHeight;

}

f();
window.addEventListener('resize',f);
