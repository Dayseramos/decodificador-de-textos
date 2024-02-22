function mostarMensagem(tag, texto){
    let show = document.querySelector(tag);
    show.innerHTML = texto;
}

function criptografar(words) {    
    words = words.replace(/e/g, 'enter');
    words = words.replace(/i/g, 'imes');
    words = words.replace(/a/g, 'ai');
    words = words.replace(/o/g, 'ober');
    words = words.replace(/u/g, 'ufat');
    return words;
    
}
function chamarCripto(){   
    let buscarValorCrip = document.querySelector('textarea').value;
    let palavraCriptografada  = criptografar(buscarValorCrip);    
    let result = palavraCriptografada.toLowerCase();
    mostarMensagem('h2', result);
    limparCampo();
    escondeComTempo();
    
}




function descriptografar(palavraCriptografada) {    
    palavraCriptografada = palavraCriptografada.replace(/enter/g, 'e');
    palavraCriptografada = palavraCriptografada.replace(/imes/g, 'i');
    palavraCriptografada = palavraCriptografada.replace(/ai/g, 'a');
    palavraCriptografada = palavraCriptografada.replace(/ober/g, 'o');
    palavraCriptografada = palavraCriptografada.replace(/ufat/g, 'u');
    return palavraCriptografada;
}

function chamarDescripotor (){
    let buscarValorDescrip = document.querySelector('textarea').value;
    let palavraDescriptografada = descriptografar(buscarValorDescrip);
    mostarMensagem('h2',palavraDescriptografada);
    limparCampo();
    escondeComTempo();
    

}
function copiarTexto() {    
    var elementoDeTexto = document.getElementById("texto");    
    var areaDeTransferencia = document.createElement("textarea");
    areaDeTransferencia.value = elementoDeTexto.textContent;  
    document.body.appendChild(areaDeTransferencia);
    areaDeTransferencia.select();
    areaDeTransferencia.setSelectionRange(0, 99999); 
    document.execCommand("copy");  
    document.body.removeChild(areaDeTransferencia);
    
    
    
  }

function limparCampo(){
    area = document.querySelector('textarea');
    area.value = "";
  }

function mostrar(el){
    document.getElementById(el).style.display = 'block';
    copiarTexto();

    setTimeout(function()
    {
        document.getElementById("mensagemOculta");  
        esconder('mensagemOculta');
        meninoCard('imgLupa');
    }, 2000);

 }

 function esconder(el){
    document.getElementById(el).style.display = 'none';
    
 }

 function meninoCard(el){
    document.getElementById(el).style.display = 'none';
 }
 

const myTimeout = setTimeout(escondeComTempo, 4000);

function escondeComTempo() {
  document.getElementById("mensagemOculta");  
  esconder('mensagemOculta');
  meninoCard('imgLupa');
 
}



