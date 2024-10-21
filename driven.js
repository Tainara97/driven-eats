let prato = ""
let preçoPrato = ""
let bebiba = ""
let preçoBebida = ""
let sobremesa = ""
let preçoSobremesa = ""

function selecionarPrato(botao) { 
    prato = botao.querySelector(".descrição1").innerHTML;
    preçoPrato = botao.querySelector(".preço").innerHTML;
    
    const pratoSelecionadoAntes = document.querySelector(".pratos .selecionado"); 

    if (pratoSelecionadoAntes !== null) { 
        pratoSelecionadoAntes.classList.remove("selecionado");       
    }
    botao.classList.add("selecionado");
}

function selecionarBebida(botao) {
    bebida = botao.querySelector(".descrição1").innerHTML;
    preçoBebida = botao.querySelector(".preço").innerHTML;

    const bebidaSelecionadaAntes = document.querySelector(".bebidas .selecionado");

    if (bebidaSelecionadaAntes !== null) {
        bebidaSelecionadaAntes.classList.remove("selecionado");
    }

    botao.classList.add("selecionado");
}

function selecionarSobremesa(botao) {
    sobremesa = botao.querySelector(".descrição1").innerHTML;
    preçoSobremesa = botao.querySelector(".preço").innerHTML;

    const sobremesaSelecionadaAntes = document.querySelector(".sobremesas .selecionado");

    if (sobremesaSelecionadaAntes !== null) {
        sobremesaSelecionadaAntes.classList.remove("selecionado");
    }

    botao.classList.add("selecionado");

    if (prato !== "") { 
        if (bebida !== "") { 
            if (sobremesa !== "") { 
                document.querySelector(".continuar").classList.add("fechar-pedido");
                const texto = "Fechar pedido";
                document.querySelector(".continuar").innerHTML = texto;
            }
        }
    }
}

function fecharPedido() {
    document.querySelector(".tela-pedido").classList.remove("escondido"); 
    
    let total = Number(preçoPrato) + Number(preçoBebida) + Number(preçoSobremesa);
    
    const textoPedido = "Confirme seu pedido";
    const textoPrato = `${prato}: ${preçoPrato}`;
    const textoBebida = `${bebida}: ${preçoBebida}`;
    const textoSobremesa = `${sobremesa}: ${preçoSobremesa}`;
    const textoTotal = "TOTAL: " + total.toFixed(2);

    document.querySelector(".linha-pedido").innerHTML = textoPedido;
    document.querySelector(".linha-prato").innerHTML = textoPrato;
    document.querySelector(".linha-bebida").innerHTML = textoBebida;
    document.querySelector(".linha-sobremesa").innerHTML = textoSobremesa;
    document.querySelector(".linha-total").innerHTML = textoTotal;
    
    const textoWhatsapp = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n - Prato: ${prato}\n - Bebida: ${bebida}\n - Sobremesa: ${sobremesa}\n${textoTotal}`);
    const linkWhatsapp = "https://wa.me/5549999327227?text=" + textoWhatsapp;
    document.querySelector(".pedido-whatsapp").href = linkWhatsapp;
}

function cancelar() {
    document.querySelector(".tela-pedido").classList.add("escondido"); 
}