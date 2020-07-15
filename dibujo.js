var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);;
    var l = 0;
    var yi, xf;
    var yf = 300;
    var colorcito = "#FAA";
    var espacio = ancho/lineas;
    
    for(l = 0; l < lineas; l++)
      {
       yi = espacio * l;
       xf = espacio *(l + 1);
       yf = yf - espacio;
       dibujarLinea(colorcito,  300, yi, xf, 0);
       dibujarLinea(colorcito,  0, yi, xf, 300);
       dibujarLinea(colorcito,  0, yf , xf, 0);
       dibujarLinea(colorcito,  300, yf , xf, 300);
      }
       dibujarLinea(colorcito,  1, 1, 299, 1);
       dibujarLinea(colorcito,  1, 1, 1, 299);
       dibujarLinea(colorcito,  299, 299, 299, 1);
       dibujarLinea(colorcito,  1, 299, 299, 299);    
}
