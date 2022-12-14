var arrbaraja=[];
var cartasVistas=0;
var carta1;
var carta2;
var resultado1;
var marcador=0;
function Carta(imagen){
    this.imagen=imagen;
}
nuevaCarta=new Carta("apu.png");
arrbaraja.push(nuevaCarta);
nuevaCarta=new Carta("apu.png");
arrbaraja.push(nuevaCarta);
nuevaCarta=new Carta("burns.png");
arrbaraja.push(nuevaCarta);
nuevaCarta=new Carta("burns.png");
arrbaraja.push(nuevaCarta);
nuevaCarta=new Carta("flink.png");
arrbaraja.push(nuevaCarta);
nuevaCarta=new Carta("flink.png");
arrbaraja.push(nuevaCarta);
nuevaCarta=new Carta("oto.png");
arrbaraja.push(nuevaCarta);
nuevaCarta=new Carta("oto.png");
arrbaraja.push(nuevaCarta);
nuevaCarta=new Carta("payaso.png");
arrbaraja.push(nuevaCarta);
nuevaCarta=new Carta("payaso.png");
arrbaraja.push(nuevaCarta);
nuevaCarta=new Carta("reverendo.png");
arrbaraja.push(nuevaCarta);
nuevaCarta=new Carta("reverendo.png");
arrbaraja.push(nuevaCarta);

arrbaraja=arrbaraja.sort(()=>{return Math.random()-0.5});

function creaTablero(){
   var id=0;
    var domTabla;
    for(i=0;i<3;i++){
        domTabla+='<div class="row">';
        for(j=0;j<4;j++){
        domTabla+='<div class="col-2"><button type="button" class="botonimagen" id="'+id+'"></button></div>';
        id++;
        }
        domTabla+='</div>';
    }
    document.getElementById("contenedor").innerHTML= domTabla;
}
function volteaCarta(id){
        
    cartasVistas++;
    if(cartasVistas==1){
        carta1=document.getElementById(id);
        resultado1=arrbaraja[id].imagen;
        carta1.style.backgroundImage = "url('"+resultado1+"')"; 
        carta1.disabled=true;
    }else if(cartasVistas==2){
        carta2=document.getElementById(id);
        resultado2=arrbaraja[id].imagen;
        carta2.style.backgroundImage = "url('"+resultado2+"')"; 
        carta2.disabled=true;
        if(resultado1==resultado2){
            carta1.style.border = "thick solid red"; 
            carta2.style.border = "thick solid red"; 
            marcador++;
            console.log(marcador);
            document.getElementById('textarea').innerHTML = (marcador);
        }else{

            setTimeout(() => { carta1.style.backgroundImage = "url('krusty.png')"; }, 300);
            setTimeout(() => { carta2.style.backgroundImage = "url('krusty.png')"; }, 600);
            carta1.disabled=false;
            carta2.disabled=false;
        }
        cartasVistas=0;
    }
    if(marcador==6){
        document.getElementById('textarea').innerHTML = ("WIN");
    }
}
function agregaEvento(){
    var id=0;
    for(i=0;i<3;i++){
        for(j=0;j<4;j++){
            let idaux=id;
        document.getElementById(id).addEventListener("click",function(){
            volteaCarta(idaux);
        });
        id++;
        }
    }
}

