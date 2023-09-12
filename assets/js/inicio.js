// Adicionar funções na MOTO
function adicionarRotatingMoto() {
    const roda1 = document.querySelector('.moto .roda1');
    const roda2 = document.querySelector('.moto .roda2');
    const aroMotoDivTraseiro = document.querySelector('.moto .aro-moto-div-traseiro');
    const aroMotoDivDiateiro = document.querySelector('.moto .aro-moto-div-diateiro');
    const pneuDiateiro = document.querySelector('.moto .pneu-diateiro');
    const pneuTraseiro = document.querySelector('.moto .pneu-traseiro');
    
    roda1.classList.add('rotating');
    roda2.classList.add('rotating');
    aroMotoDivTraseiro.classList.add('rotating');
    aroMotoDivDiateiro.classList.add('rotating');
    pneuDiateiro.classList.add('rotating');
    pneuTraseiro.classList.add('rotating');
}

function removerRotatingMoto() {
    const roda1 = document.querySelector('.moto .roda1');
    const roda2 = document.querySelector('.moto .roda2');
    const aroMotoDivTraseiro = document.querySelector('.moto .aro-moto-div-traseiro');
    const aroMotoDivDiateiro = document.querySelector('.moto .aro-moto-div-diateiro');
    const pneuDiateiro = document.querySelector('.moto .pneu-diateiro');
    const pneuTraseiro = document.querySelector('.moto .pneu-traseiro');
    
    roda1.classList.remove('rotating');
    roda2.classList.remove('rotating');
    aroMotoDivTraseiro.classList.remove('rotating');
    aroMotoDivDiateiro.classList.remove('rotating');
    pneuDiateiro.classList.remove('rotating');
    pneuTraseiro.classList.remove('rotating');
}

// Adicionar funções na CARRO
function adicionarRotatingCarro() {
    const divAroCarroTraseiro = document.querySelector('.carro .div-aro-carro-traseiro');
    const divAroCarroDiateiro = document.querySelector('.carro .div-aro-carro-diateiro');
    const pneuDiateiro = document.querySelector('.carro .pneu-diateiro');
    const pneuTraseiro = document.querySelector('.carro .pneu-traseiro');
    
    divAroCarroTraseiro.classList.add('rotating');
    divAroCarroDiateiro.classList.add('rotating');
    pneuDiateiro.classList.add('rotating');
    pneuTraseiro.classList.add('rotating');
}

function removerRotatingCarro() {
    const divAroCarroTraseiro = document.querySelector('.carro .div-aro-carro-traseiro');
    const divAroCarroDiateiro = document.querySelector('.carro .div-aro-carro-diateiro');
    const pneuDiateiro = document.querySelector('.carro .pneu-diateiro');
    const pneuTraseiro = document.querySelector('.carro .pneu-traseiro');
    
    divAroCarroTraseiro.classList.remove('rotating');
    divAroCarroDiateiro.classList.remove('rotating');
    pneuDiateiro.classList.remove('rotating');
    pneuTraseiro.classList.remove('rotating');
}

// Adicionar funções na CAMINHONETE
function adicionarRotatingCaminhonete() {
    const divAroCaminhoneteTraseiro = document.querySelector('.div-pneu-caminhonete-traseiro');
    const divAroCaminhoneteDiateiro = document.querySelector('.div-pneu-caminhonete-diateiro');
    const pneuCaminhoneteTraseiro = document.querySelector('.pneu-caminhonete-traseiro');
    const pneuCaminhoneteDiateiro = document.querySelector('.pneu-caminhonete-diateiro');
    
    divAroCaminhoneteTraseiro.classList.add('rotating');
    divAroCaminhoneteDiateiro.classList.add('rotating');
    pneuCaminhoneteTraseiro.classList.add('rotating');
    pneuCaminhoneteDiateiro.classList.add('rotating');
}

function removerRotatingCaminhonete() {
    const divAroCaminhoneteTraseiro = document.querySelector('.div-pneu-caminhonete-traseiro');
    const divAroCaminhoneteDiateiro = document.querySelector('.div-pneu-caminhonete-diateiro');
    const pneuCaminhoneteTraseiro = document.querySelector('.pneu-caminhonete-traseiro');
    const pneuCaminhoneteDiateiro = document.querySelector('.pneu-caminhonete-diateiro');
    
    divAroCaminhoneteTraseiro.classList.remove('rotating');
    divAroCaminhoneteDiateiro.classList.remove('rotating');
    pneuCaminhoneteTraseiro.classList.remove('rotating');
    pneuCaminhoneteDiateiro.classList.remove('rotating');
}

const moto = document.querySelector('.moto');
moto.addEventListener('mouseenter', adicionarRotatingMoto);
moto.addEventListener('mouseleave', removerRotatingMoto);


const carro = document.querySelector('.carro');
carro.addEventListener('mouseenter', adicionarRotatingCarro);
carro.addEventListener('mouseleave', removerRotatingCarro);

const caminhonete = document.querySelector('.caminhonete');
caminhonete.addEventListener('mouseenter', adicionarRotatingCaminhonete);
caminhonete.addEventListener('mouseleave', removerRotatingCaminhonete);