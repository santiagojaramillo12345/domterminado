//controlando Etiquetas con el Dom}


//1. Almacenar en memoria (Crear una variable)
//LA etiqueta que quiero  controlar

let etiquetaImagen=document.getElementById("fotografia")
//console.log(etiquetaImagen)

//2. Controlando uestra etiqueta
//2.1 Conttrolar es cambiar la fuente (SRC) de una etiqueta pone una imagen al index


etiquetaImagen.src="./img/saitama_puños.jpg"

//2.2 Controlar es cambiar el contenido de una etiqueta

let etiquetaTitulo=document.getElementById("titulo")


let etiquetatitulop=document.getElementById("Titulo")

//2.3 controlar es agregar estilos
etiquetaTitulo.classList.add("fuente,alineado")

//2.4 controlador es remover estilos
let etiquetaparrafo=document.getElementById("parrafo")
etiquetaparrafo.classList.remove("text-danger")

//controlador es dectetar una imagen

let etiquetaImagen2=document.getElementById("fotografia")

//Controlar es Dectectar Evento 

let etiquetabotom=document.getElementById("botom")
contador=0


//controlador es dectetar un audio

let equetaaudio=document.getElementById("audio")

let etiquetamenu=document.getElementById("menu")


//controlador para cambiar el color de fondo

let etiquetacolordefondo=document.getElementById("fondoColor")

//se crea un evento que al hacer clik en el botn entrara en un ciclo y cada vez que se lede click va ir cambiando de modo true y false "0-1",0 para cumplir una serie de condiciones y 1 para cambiar las instruciones  

function Evento (){
    



if (contador==0) {
    etiquetaImagen.src="./img/saitama_puños.jpg"
    etiquetaTitulo.textContent="Historia"
   etiquetaTitulo.classList="text-danger"
   etiquetatitulop.classList="text"
   

    etiquetaparrafo.textContent="   One Punch-Man (ワンパンマン lit. Hombre-Un Golpe?) es un webcómic de acción y comedia japonés, creado por el artista One e iniciado en 2009. El webcómic rápidamente ganó popularidad, llegando a alcanzar las 8 millones de visitas. La pronunciación de su nombre en japonés, Wanpanman, es un juego de palabras basado en el personaje infantil Anpanman, siendo wanpan una contracción de wanpanchi («un golpe»).5​ La historia se centra en Saitama, un superhéroe calvo y extremadamente fuerte que se muestra abrumado por la ausencia de un verdadero desafío, y que continuamente busca a un oponente digno de su poder.Una versión digital, ilustrada por Yusuke Murata, comenzó a publicarse en el sitio web de la revista Young "
   
    contador=1

    etiquetaparrafo.classList="text"

    etiquetamenu.style.background=" rgb(236, 15, 15)"
   
    etiquetacolordefondo.style.background="rgb(255, 255, 255)"

    equetaaudio.src="Audio/Audio_2.mp3"
    
}
else
if (contador==1) {
    etiquetaImagen.src="./img/Saitama.jpg"
    etiquetaTitulo.textContent="Resumen"

    etiquetaparrafo.classList="text-danger"
    
    etiquetaparrafo.textContent=" Saitama pasó varios años salvando la Tierra sin ganar nunca el debido reconocimiento por sus acciones. En verdad, muchos de sus actos heroicos fueron responsables de convertir a King en una leyenda viva entre los héroes y los monstruos, porque era siempre él quien recibíael crédito por haber salvado a las personas cuando en realidad todo era obra de Saitama Pero nuestro calvo amigo nunca se preocupó ni lo más mínimo por estar bajo los focos. Para Saitama ser héroe es sólo un hobby y su principal propósito es mantener su ciudad (Z-City) libre de peligros (¡principalmente los supermercados, ya que le encanta aprovechar una buena promoción!).Sólo después de pasar un tiempo, Saitama, en compañía de Genos, decide inscribirse en la Asociación de Héroes, ya que quería dejar de ser visto por la gente como un loco disfrazado "
    
    etiquetaTitulo.classList="text"
    contador=0

    equetaaudio.src="Audio/Audio_1.mp3"

etiquetamenu.style.background=" rgb(30, 15, 236)"

etiquetatitulop.classList="text-danger"


etiquetacolordefondo.style.background="rgb(11, 202, 59)"

}
}


//con este funcion llamaremos al boton y le diremos que al dar click ejecutara las condiciones,el evento es el nombre de la funcion y por ultimo diremos que es de tipo boleano "true" para que se valla al ternando en 0 o 1


etiquetabotom.addEventListener("click",Evento,true )