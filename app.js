const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Abrir menu'); navigation.classList.remove('open');}
menuButton.addEventListener('click', () => {const open = menuButton.getAttribute('aria-expanded') !== 'true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
window.matchMedia('(min-width: 801px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
  let total=0;
  document.querySelectorAll('.product').forEach(product=>{const show=button.dataset.filter==='todas'||button.dataset.filter===product.dataset.category;product.hidden=!show;if(show)total++;});
  document.querySelector('#filter-status').textContent=`${total} ${total===1?'joia exibida':'joias exibidas'}`;
}));
const products={
  tanzanita:{name:'Solitário Tanzanita',image:'tanzanita',description:'A intensidade da tanzanita encontra o brilho dos diamantes naturais. Um anel para quem se reconhece na delicadeza de um detalhe singular.',post:'p/DesO_TamZri/'},
  brincos:{name:'Argolas Áurea',image:'brincos',description:'Curvas marcantes e um brilho que acompanha seus movimentos. Conheça as argolas apresentadas pela Áurea e consulte as especificações desta peça.',post:'p/DfdbMteu0Z2/'},
  pulseira:{name:'Composição em Ouro',image:'pulseira',description:'Uma composição de pulseiras em ouro 18K para explorar diferentes detalhes e combinações. Consulte as opções e os modelos disponíveis.',post:'p/DfSQF0PFq2U/'},
  corrente:{name:'Corrente Piastrine',image:'corrente',description:'Corrente Piastrine maciça em ouro 18K. Uma escolha de presença para usar sozinha ou compor com outras peças. Consulte medidas e disponibilidade.',post:'p/DeJ8gyAlj8b/'},
  grumet:{name:'Grumet Personalizada',image:'grumet',description:'Uma pulseira Grumet com identidade própria. Explore com a Áurea as possibilidades de personalização para criar uma peça que represente você.',post:'p/Dc6U8hhFt1b/'},
  riviera:{name:'Riviera de Diamantes',image:'riviera',description:'Ouro branco e diamantes naturais em uma Riviera que valoriza o brilho em cada detalhe. Consulte as características desta joia com a equipe.',post:'p/DcKW3fmlqva/'}
};
const dialog=document.querySelector('#product-dialog');let previousTrigger;
document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>{const product=products[button.dataset.product];if(!product)return;previousTrigger=button;document.querySelector('#dialog-title').textContent=product.name;document.querySelector('#dialog-description').textContent=product.description;const image=document.querySelector('#dialog-image');image.src=`img/${product.image}.jpg`;image.alt=product.name;document.querySelector('#dialog-source').href=`https://www.instagram.com/aurea18.k/${product.post}`;dialog.showModal();document.body.classList.add('modal-open');}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');previousTrigger?.focus();});
document.querySelector('#year').textContent=String(new Date().getFullYear());
