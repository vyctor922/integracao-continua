window.onload = function() {

    // Permite ao usuário alterar o tema da página ao escolher
    // uma opção na caixa de selação. O evento 'change' ocorre
    // sempre que uma opção diferente for selecionada. Por meio
    // 'localStorage', a opção do usuário é armazenada para ser
    // recuperada quando a página for recarregada.
    let selectTema = document.querySelector("select#tema");
    selectTema.addEventListener("change", evento => {
        let temaSelecionado = evento.target.value;
        if (temaSelecionado) {
            mudaTema(temaSelecionado);
            localStorage.setItem("tema", temaSelecionado);
        }
    });

    // Sempre que a página é recarregada, a função 'mudaTema'
    // é invocada para aplicar o tema escolhido pelo usuário.
    let tema = localStorage.getItem("tema");
    if (tema) {
        mudaTema(tema);
    }

}

// Função que muda o tema da página a partir de uma escolha
// do usuário. A alteração consiste em selecionar o arquivo CSS
// correspodente ao tema, modificando o atributo 'href' do elemento
// que inclui o arquivo CSS na página.
function mudaTema(tema) {
    let url = "assets/css/estilo-tema-" + tema + ".css";
    let linkTema = document.querySelector("#link-tema");
    linkTema.href = url;
}
