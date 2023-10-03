//Definindo a classe de contatos
class Contatos{
    constructor(nome, email, telefone, comoAjudar){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.comoAjudar = comoAjudar;
    }
}

//Definindo a classe GerenciadorContatos
class GerenciadorContatos{
    constructor(){
        //Inicializa a lista de contatos vazia
        this.contatos = []
    }

    adicionarContato(contato){
        //adiciona um contato a lista de contatos
        this.contatos.push(contato);
    }

    exibirContatos(){
        //Obtem a lista de contatos
        const listaContatos = document.getElementById('contato-lista');

        //limpa a lista de contatos
        listaContatos.innerHTML = '';
        
        //para cada contato na lista de contatos, cria um novo elemento 'li' e adiciona na lista de contatos
        for(const contato of this.contatos){
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} <br> ${contato.email} <br> ${contato.telefone} <br> ${contato.comoAjudar}`;
            listaContatos.appendChild(li)
        }
    }
}

//cria um objeto da clase Gerenciador Contatos
const gerenciadorContatos = new GerenciadorContatos();

//cria os elementos necessarios
const contatoForm = document.getElementById('contato-form');
const nomeF = document.getElementById('nome');
const emailF = document.getElementById('email');
const telefoneF = document.getElementById('telefone');
const comoAjudarF = document.getElementById('comoAjudar');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContato = document.getElementById('ocultar-contato');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const nome = nomeF.value;
    const email = emailF.value;
    const telefone = telefoneF.value;
    const comoAjudar = comoAjudarF.value;

    //criando objeto da classe Contato
    const contato = new Contatos(nome, email, telefone, comoAjudar);

    gerenciadorContatos.adicionarContato(contato);

    nomeF.value = ''
    emailF.value = ''
    telefoneF.value = ''
    comoAjudarF.value = ''
})

//estamos adicionando um manipulador de eventos para o botão mostrar contatos, que exibe a lista de contatos
mostrarContatos.addEventListener('click', () =>{
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
})

ocultarContato.addEventListener('click', () =>{
    listaContatos.style.display = 'none';
})


// Adicione essas linhas ao seu arquivo main.js
document.getElementById('mostrar-contatos').addEventListener('click', () => {
    const listaContatos = document.getElementById('contato-lista');
    listaContatos.innerHTML = ''; // Limpa a lista de contatos

    // Para cada contato na lista de contatos, cria um novo elemento 'li'
    for (const contato of gerenciadorContatos.contatos) {
        const li = document.createElement('li');
        li.innerHTML = `${contato.nome}<br>${contato.email}<br>${contato.telefone}<br>${contato.comoAjudar}`;
        listaContatos.appendChild(li);
    }

    // Aplica a classe 'mostrar' para exibir a lista de contatos formatada
    listaContatos.classList.add('mostrar');
});

document.getElementById('ocultar-contato').addEventListener('click', () => {
    const listaContatos = document.getElementById('contato-lista');
    // Remove a classe 'mostrar' para ocultar a lista de contatos
    listaContatos.classList.remove('mostrar');
});
