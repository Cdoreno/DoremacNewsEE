var numero = 1;

$(document).ready(function () {
    //cargar noticias

    $('#cargarMas').click(function () {
        if (numero <= 2) {
            cargarJson();
        } else {
            $('#cargarMas').hide();
            alert("No hay mas noticias que cargar... ¡Estás al día!");
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
            cargarJson();
        }
    });
});

function cargarNoticias(json) {
    $.each(json, function (i, noticias) {
        $('#contenedorNoticias').append($('<div class="well noticia"><div class="row"><div class="col-md-3 col-lg-3 text-center"><img class="img-responsive img" src="'+noticias.imagenBig+'" alt="fotoNoticia"/><p>'+noticias.fecha+'<p></div><div class="col-md-9 col-lg-9"><h3 class="text-center"><a href="html/404.html">'+noticias.titulo+'</a></h3><p class="text-justify">'+noticias.descripcion+'</p></div></div></div>'));
    });
}

function cargarJson() {
    if (numero <= 2) {
        $.getJSON("data/" + numero + ".json", function (jsonObject) {
            cargarNoticias(jsonObject);
        });
    }
    numero++;
}
