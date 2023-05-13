const cargar = (document.querySelector().window.onload=function()
{
    const p1 = leerproducto();
});

function probar(){
    url = "catalogo.json";
    mcatalogo = leerproducto(url)
    console.log(mcatalogo)
}
function leercatalogo(url){
    const url = "catalogo.json"
    const catalogo=fetch(url).then(res.json()).then(data=>{
        return data
    });
}
function leerproducto(){
    var contenido1 = document.querySelector("#contenido1");
    fetch("catalogo.json").then(res=>res.json()).then(data=>{
        console.log(data);
        var referencia = "<p>Referencia:" + data.catalogo['0'].producto.referencia + "</p>"
        var producto = "<h2 class='name'>Nombre: " + data.catalogo['0'].producto.nombre + "</h2>"
        var precio = "<p>Precio: $ " + data.catalogo['0'].producto.precio + "</p>"
        var fabricante = "<p>Fabricante: " + data.catalogo['0'].producto.fabricante + "</p>"
        var descripcion ="<p class='description'>Descripcion: " + data.catalogo['0'].producto.descripcion + "</p>"
        var foto1 = "<img src=>" + data.catalogo['0'].producto.fotos[1] + "alt='Foto' width='250px' class='img-fluid rounded-circle'>"
        var foto2 = "<img src=>" + data.catalogo['0'].producto.fotos[1] + "alt='Foto' width='250px' class='img-fluid rounded-circle'>"
        var btn1 = "<button class='btn'>Comprar</button>"
        var control1 = dibujarcontrol();
        contenido1.innerHTML=referencia+producto+precio+fabricante+descripcion+foto1+foto2+control1+btn1;
    });
}