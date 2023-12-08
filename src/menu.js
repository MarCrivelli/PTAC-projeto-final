var menuItem = document.querySelectorAll('.ItemMenu')

// A função "selecionarLink" está removendo a classe ativo de um item que não foi clicado e está adicionando a um item clicado
function selecionarLink(){
    //foreach serve para fazer uma varredura no array
    menuItem.forEach((item) => 
    //vai remover dinamicamente uma classe de um item
    item.classList.remove('ativo')
    )
    // 
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
//vai ser verificado se o usuário clicou
  item.addEventListener('click', selecionarLink)
)

var botaoExpandir = document.querySelector('#botaoExpandir');
var menuLateral = document.querySelector('.menuLateral');



