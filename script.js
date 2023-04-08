$(".futuro").on("click",function(){
    alert("proximamente");
});

$("#formulario-contacto").submit(function(e){
    e.preventDefault();
});

$(document).ready(function() { $("#formulario-contacto").validate(
    {
        messages:{
            nombre:{
                required:"*Campo obligatorio"
            },
            correo:{
                required:"*Campo obligatorio"
            }
        }
    }
); });