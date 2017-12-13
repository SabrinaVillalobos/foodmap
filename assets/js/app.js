$(document).ready(function(){

/**
*vista splash
*/
 $('.spcont').delay(3000).fadeOut("slow");

/**
*función que muestra y oculta las imagenes segun el filtro
*/

$(function() {
  $('#preciodiv').hide();
  $('#alphord').hide();
  $('#valdiv').hide();
  $('#filtrores').change(function(){
    if($('#filtrores').val() == 'price'){
      $('#preciodiv').show();
      $('.foodimages').hide();
    } else {
      $('#preciodiv').hide();
    }
    if($('#filtrores').val() == 'locales abiertos'){
      $('#abiertodiv').show();
      $('.foodimages').hide();
    } else {
      $('#abiertodiv').hide();
    }
    if($('#filtrores').val() == 'valoracion'){
      $('#valdiv').show();
      $('.foodimages').hide();
    } else {
      $('#valdiv').hide();
    }
    if($('#filtrores').val() == 'orden alfabetico'){
      $('#alphord').show();
      $('.foodimages').hide();
    } else {
      $('#alphord').hide();
    }
  });
});


/**
*funciones mouseover que cambian la imagen del restorant por comida
*/
$('#arb').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio5.jpg')
            ? 'assets/img/arbolfood.jpg'
            : 'assets/img/precio5.jpg';
         $(this).attr('src', src);
    }
});
$('#fuenteale').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/abierto3.jpg')
            ? 'assets/img/lafuentefood.jpg'
            : 'assets/img/abierto3.jpg';
         $(this).attr('src', src);
    }
});
$('#curry').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio4.jpg')
            ? 'assets/img/curryfood.jpg'
            : 'assets/img/precio4.jpg';
         $(this).attr('src', src);
    }
});
$('#lapiccola').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/abierto2.jpg')
            ? 'assets/img/lapiccolafood.jpg'
            : 'assets/img/abierto2.jpg';
         $(this).attr('src', src);
    }
});
$('#cuisine').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio1.jpg')
            ? 'assets/img/lacuisinefood.jpg'
            : 'assets/img/precio1.jpg';
         $(this).attr('src', src);
    }
});


});

