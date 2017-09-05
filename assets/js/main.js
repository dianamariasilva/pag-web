$(document).ready(function() {
    $('#send').click(function(){
        if($("#email").val().indexOf('@') == -1 || $("#email").val().indexOf('.') == -1) {
            swal({
              title: 'Datos inválidos',
              html: $('<div>')
                .addClass('some-class')
                .text('Intente de nuevo.'),
              animation: false,
              customClass: 'animated tada'
            })
        }else if($("#email").val().indexOf('@') == -1 || $("#email").val().indexOf('.') == -1 && $("#phone").val()> 999999999 && $("#phone").val()< 900000000){
            swal({
              title: 'Email y teléfono inválidos',
              html: $('<div>')
                .addClass('some-class')
                .text('Intente de nuevo.'),
              animation: false,
              customClass: 'animated tada'
            })
        }else if($("#phone").val()> 999999999 || $("#phone").val()< 900000000){
            swal({
              title: 'Teléfono inválido',
              html: $('<div>')
                .addClass('some-class')
                .text('Intente de nuevo.'),
              animation: false,
              customClass: 'animated tada'
            })
        }else{
            swal(
              'Usuario registrado',
              'Datos validados!',
              'success'
            )
        }
    });
});