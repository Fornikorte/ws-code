$(".futuro").on("click",function(){
    alert("proximamente");
});

$("#formulario-contacto").submit(function(e){
    e.preventDefault();
});

$(document).ready(function() { $("#formulario-contacto").validate(
    {
        messages:{
            name:{
                required:"*Campo obligatorio"
            },
            phone:{
                required:"*campo obligatorio"
            },
            email:{
                required:"*Campo obligatorio"
            },
        }
    }
); });