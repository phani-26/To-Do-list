$('#com').click(function(){
 var h = $('#items > div > div >input');
  for (let i =0;i<h.length;i++){
     if(h.eq(i).prop('checked')==false){
         h.eq(i).parent().parent().css({display:'none',})
     }
     else{
        h.eq(i).parent().parent().css({display:'flex',})

    }
 } 
});

$('#uncom').click(function(){
    var h = $('#items > div > div >input');
     for (let i =0;i<h.length;i++){
        if(h.eq(i).prop('checked')==true){
            h.eq(i).parent().parent().css({display:'none',})
        }
        else{
            h.eq(i).parent().parent().css({display:'flex',})

        }
    } 
});

$('#all').click(function(){
    var h = $('#items > div > div >input');
     for (let i =0;i<h.length;i++){
            h.eq(i).parent().parent().css({display:'flex',});
    } 
});
2
$('#completeall').click(function(){
    var h = $('#items > div > div >input');
    for (let i =0;i<h.length;i++){
           h.eq(i).prop('checked',true);
   } 
   $('#count').html(0);
});

$('#clearcom').click(function(){
    var h = $('#items > div > div >input');
    for (let i =0;i<h.length;i++){
           if(h.eq(i).prop('checked')==true){
               h.eq(i).parent().parent().remove();
               count++;
           }
   } 
   f();
});

$('#items').on('click',' div div input',function(){
    var ch =$(this);
   // console.log($(this).prop('checked'));
    if(ch.prop('checked')){
        $('#count').html(parseInt($('#count').html()) - 1);
        console.log("entry 1");
        ch.attr('checked',false);
        ch.attr('background-color','#DED9DD');
    }
    else{
        $('#count').html(parseInt($('#count').html()) + 1);
        console.log("entry 2");
        ch.attr('checked',true);

    }
    
});
