
var inCon = $('#inner-container');
var items = $('#items');
var overflow = false;

function innerCon_pos() {
  var c = document.getElementById('container');
  var c1 = document.getElementById('inner-container');
  c1.style.left = c.offsetWidth / 2 - c1.offsetWidth / 2 + 'px';
  c1.style.top = c.offsetHeight / 2 - c1.offsetHeight / 2 + 'px';
}
function addFunction() {
  var h = $('#items').height();
  $('#items').append('<div>' +
    '<div>' +
    '<input type="checkbox">' +
    "<span>&nbsp " + $('#main-box').val() + "</span>" +
    '</div>' +
    '<i class="far fa-trash-alt" id = "del" aria-hidden="true"></i>' +
    '</div>');

  var h1 = $('#items').height();
  $('#count').html(parseInt($('#count').html()) + 1);

  // console.log(h," difference ",h1);
  //  console.log(inCon[0].getBoundingClientRect().bottom," diff ", parseFloat(
  //   $('#container')[0].getBoundingClientRect().bottom));

  if (overflow == false) {
    inCon.height(inCon.height() + h1 - h);
    innerCon_pos();
    $('#footer').css({
      'top':
        parseFloat($('#footer').css('top')) + h1 - h + 'px',
    });
  }

  if (parseFloat(inCon.height()) + h1 - h + 20 >= parseFloat(
    $('#container').height())) {
    //console.log("entered dude");
    if (overflow == true) return;
    overflow = true;
    items.css({
      maxHeight: items.height(),
      minHeight:items.height(),
      overflowY: 'auto'
    });
    return;
  }
}

$('.add').click(addFunction);

$('#items').on('click', 'i', function () {
  console.log($(this).attr('id'));
  if ($(this).attr('id') == 'del'){
    if(!$(this).parent().find('div>input').attr('checked')){
      $('#count').html(parseInt($('#count').html()) - 1);
    }
    $(this).parent().remove();
  }

});

$('#main-box').on('keyup',function(event){
 if(event.keyCode>=33 && event.keyCode <=126){
   $('.add').css('display','block');
 }
 if(event.keyCode == 8 && $(this).val()==""){
  $('.add').css('display','none');

 }
 if(event.keyCode == 13 && $(this).val()!=""){
   addFunction.call($('.add'));
   $(this).val("");
   $('.add').css('display','none');

 }
});
