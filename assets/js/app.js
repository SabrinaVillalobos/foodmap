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
*funciones mouseover que cambia las imagenes del filtro precio
*esta cambia de restorant a comida y viceversa
*/
$('.elarbol').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio5.jpg')
            ? 'assets/img/arbolfood.jpg'
            : 'assets/img/precio5.jpg';
         $(this).attr('src', src);
    }
});
$('.alemana').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/abierto3.jpg')
            ? 'assets/img/lafuentefood.jpg'
            : 'assets/img/abierto3.jpg';
         $(this).attr('src', src);
    }
});
$('.curry').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio4.jpg')
            ? 'assets/img/curryfood.jpg'
            : 'assets/img/precio4.jpg';
         $(this).attr('src', src);
    }
});
$('.piccola').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/abierto2.jpg')
            ? 'assets/img/lapiccolafood.jpg'
            : 'assets/img/abierto2.jpg';
         $(this).attr('src', src);
    }
});
$('.cuisine').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio1.jpg')
            ? 'assets/img/lacuisinefood.jpg'
            : 'assets/img/precio1.jpg';
         $(this).attr('src', src);
    }
});
/**
*funciones mouseover para el filtro valoración
*/
$('.ancla').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio2.jpg')
            ? 'assets/img/elanclafood.jpg'
            : 'assets/img/precio2.jpg';
         $(this).attr('src', src);
    }
});
/**
*funciones mouseover para el filtro orden alfabetico
*/
$('.bara').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/precio3.jpg')
            ? 'assets/img/barandiaranfood.jpg'
            : 'assets/img/precio3.jpg';
         $(this).attr('src', src);
    }
});
$('.ibis').on({
    'mouseover': function() {
         var src = ($(this).attr('src') === 'assets/img/abierto1.jpg')
            ? 'assets/img/ibisfood.jpg'
            : 'assets/img/abierto1.jpg';
         $(this).attr('src', src);
    }
});
});