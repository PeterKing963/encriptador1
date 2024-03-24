let textoaEncriptar = '';
let textoaDesencriptar = '';
let textovisible = '';
let textoGuardado = '';
let cont = 0;
let botonc = '';
let cajaTex='';
let r = '';
let botonEn = document.querySelector('#encriptardato');
//console.log('inicio'+cajaTex);
function validar(){
    cajaTex = document.querySelector('#textarea');
    myReplace();
    //console.log('inicio validar'+cajaTex);
        if(cajaTex.value == "" || r ==""){
            //console.log('hola');
            textoPreventivo();
            return validar;
        }else if(cont == 0){
           // myReplace();
            //console.log(typeof(r)+'despues de replace'+' '+r+' '+cajaTex);
                    textoPreventivo2();
                    //console.log('valido1'+cajaTex);
                    tomarEncriptar();
        }
        botonEn.addEventListener("click",validar);
}

function valida2(){
    cajaTex = document.querySelector('#textarea');
    if(cajaTex.value == ""){
        //console.log('hola');
        textoPreventivo();
        return valida2;
    }else if(cont == 2){
        //textoPreventivo2();
        desencriptar();
        //console.log('sali de desencriptar'+cajaTex);
    }
}

function tomarEncriptar(){
    //console.log('entre');
    textoaEncriptar = r.toLowerCase();
    //console.log(textoaEncriptar);
        for(i=0;i<textoaEncriptar.length;i++){
            const lectura = textoaEncriptar[i];
            const texto = {
                'a':'ai',
                'e':'enter',
                'i':'imes',
                'o':'ober',
                'u':'ufat'
            }
            const guarda = texto[lectura] || lectura;
            //console.log(guarda);
            textoGuardado += guarda;
        }
        //console.log(textoGuardado);
        document.getElementById('textoEncriptado').textContent = textoGuardado;
        document.querySelector('#encriptardato').setAttribute('disabled','true');//boton encriptar
        document.querySelector('#textoCopiado').removeAttribute('disabled','true');//boton copiar
        cont++;
        //inicioDato();
}
function textoPreventivo(){
    document.querySelector('#ingresarTexto').textContent = '*ingresar texto correctamente!';
}
function textoPreventivo2(){
    document.querySelector('#ingresarTexto').textContent = "";
}
function textoPreventivo3(){
    document.querySelector('#ingresarTexto').textContent = '*posible error/confirme texto copiado!';
}

function copiarTexto(){
    //console.log('copio');
    botonc = document.getElementById('textoCopiado');
    textoaDesencriptar = document.getElementById('textoEncriptado');
    navigator.clipboard.writeText(textoaDesencriptar.textContent);
    botonc.textContent ='Copiado';
    //console.log(textoaDesencriptar.value);//Obtiene valor del campo de texto a desencriptar
    document.querySelector('#desencriptardato').removeAttribute('disabled','true');//boton desencriptar
    document.querySelector('#textoCopiado').setAttribute('disabled','true');//boton copiar
    cont ++;
    limpiar();
}

function desencriptar(){
    //console.log('holaabro');
    //console.log(textoaEncriptar);
    let vaCampo = document.querySelector('#textarea');
    //console.log('desencriptar '+ textoaDesencriptar+'----'+vaCampo.value);
    if(textoaDesencriptar.value == vaCampo.value){
        //console.log('lo logramos');
    for(i=0;i<textoaEncriptar.length;i++){
        const lectura = textoaEncriptar[i];
        const texto = {
            'a': i+1,
            'e': i+4,
            'i': i+3,
            'o': i+3,
            'u': i+3
        }
        const guarda = lectura[i] || lectura;
        //console.log(guarda);
        textovisible += guarda;
    }
    //console.log(textovisible);
        document.getElementById('textoEncriptado').textContent = textovisible;
        document.querySelector('#encriptardato').removeAttribute('disabled','true');//boton encriptar
        document.querySelector('#desencriptardato').setAttribute('disabled','true');//boton desencriptar
        botonc.textContent ='Copiar';
        //inicioDato();
        limpiar();
        cont = 0;
        inicioDato();
        textoPreventivo2();
    }else{
        limpiar();
        textoPreventivo3();
        //console.log('entro cuando es diferente');
        //document.getElementById('#textarea').textContent = "";
        return valida2;
    }

    //console.log('fin sin entrar al else');
    //valida2();
}
function inicioDato(){
    textovisible = '';
    textoGuardado = '';
}
function limpiar(){
    document.querySelector('#textarea').value = '';
}
function myReplace(){
    let s = document.querySelector('#textarea').value;
    //console.log('paso1'+s);
    r=s;
    r = r.replace(new RegExp(/\s/g),"");
    r = r.replace(new RegExp(/[0123456789]/g),"");
    r = r.replace(new RegExp(/[àáâãäå]/g),"a");
    r = r.replace(new RegExp(/æ/g),"ae");
    r = r.replace(new RegExp(/ç/g),"c");
    r = r.replace(new RegExp(/[èéêë]/g),"e");
    r = r.replace(new RegExp(/[ìíîï]/g),"i");
    r = r.replace(new RegExp(/ñ/g),"n");
    r = r.replace(new RegExp(/[òóôõö]/g),"o");
    r = r.replace(new RegExp(/œ/g),"oe");
    r = r.replace(new RegExp(/[ùúûü]/g),"u");
    r = r.replace(new RegExp(/[ýÿ]/g),"y");
    r = r.replace(new RegExp(/\W/g),"");
    //console.log('paso2'+r);
    return r;
}