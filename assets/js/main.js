$(document).ready(function() {
    $('#send').click(function(){
        if($("#email").val().indexOf('@') == -1 || $("#email").val().indexOf('.') == -1) {
            alert('Email inválido');
            return false;
        }

        alert('El correo introducido no es válido');
    });
});