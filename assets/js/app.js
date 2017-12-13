$(document).ready(function(){

 $('.spcont').delay(3000).fadeOut("slow");


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

});

