/*const form = document.getElementById('cadastrar');
const tabelaCorpo = document.getElementById('tabela-corpo');
const nome = []; // Array para armazenar os nomes
const tel = []; // Array para armazenar os telefones

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    impedeRepit();
})

function adicionaLinha() {
const inputCadastraNome = document.getElementById('nome-cadastro');
    const inputCadastraTel = document.getElementById('numero-cadastro');

    const nomeInput = inputCadastraNome.value.trim();
    const telefone = inputCadastraTel.value.trim();

    if (nomeInput === '' || telefone === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verifica se o nome já está no array
    if (nome.includes(nomeInput)) {
        alert(`O nome ${nomeInput} já foi inserido`);
        return;
    }

    if (tel.includes(telefone)) {
        alert(`O numero ${telefone} já foi inserido`);
        return;
    }

    // Adiciona o nome e telefone aos arrays
    nome.push(nomeInput);
    tel.push(telefone);

    // Cria uma nova linha na tabela
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nomeInput}</td>
        <td>${telefone}</td>
        <td>Adicionado com sucesso</td>
    `;
    tabelaCorpo.appendChild(newRow);

    // Limpa os campos de entrada
    inputCadastraNome.value = '';
    inputCadastraTel.value = '';
}*/
const form = document.getElementById('cadastrar');
const tabelaCorpo = document.getElementById('tabela-corpo');
const nome = []; // Array para armazenar os nomes
const tel = []; // Array para armazenar os telefones

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
});

function adicionaLinha() {
    const inputCadastraNome = document.getElementById('nome-cadastro');
    const inputCadastraTel = document.getElementById('numero-cadastro');

    const nomeInput = inputCadastraNome.value.trim();
    let telefone = inputCadastraTel.value.trim();

    // Verifica se os campos estão preenchidos
    if (nomeInput === '' || telefone === '') {
        mostraMensagem('Por favor, preencha todos os campos.', 'error');
        if (nomeInput === '') inputCadastraNome.classList.add('campo-invalido');
        if (telefone === '') inputCadastraTel.classList.add('campo-invalido');
        return;
    }
    if (telefone.replace(/\D/g, '').length !== 11) {
        mostraMensagem('O número de telefone deve conter 11 dígitos.', 'error');
        inputCadastraTel.classList.add('campo-invalido');
        return;
    }
    // Verifica se o nome já está no array
    if (nome.includes(nomeInput)) {
        mostraMensagem(`O nome ${nomeInput} já foi inserido`, 'error');
        return;
    }

    if (tel.includes(telefone)) {
        mostraMensagem(`O número ${telefone} já foi inserido`, 'error');
        return;
    }

    // Adiciona o nome e telefone aos arrays
    nome.push(nomeInput);
    tel.push(telefone);

    // Cria uma nova linha na tabela
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nomeInput}</td>
        <td>${telefone}</td>
    `;
    tabelaCorpo.appendChild(newRow);

    // Limpa os campos de entrada
    inputCadastraNome.value = '';
    inputCadastraTel.value = '';

    mostraMensagem('Adicionado com sucesso', 'success');
}

// Remove a classe de "campo inválido" quando o usuário começa a preencher um campo
document.getElementById('nome-cadastro').addEventListener('input', function () {
    this.classList.remove('campo-invalido');
});

document.getElementById('numero-cadastro').addEventListener('input', function () {
    this.classList.remove('campo-invalido');
});

// Função para mostrar a mensagem com efeito cascata
function mostraMensagem(mensagem, tipo) {
    const mensagemDiv = document.createElement('div');
    mensagemDiv.className = `mensagem-${tipo}`;
    mensagemDiv.textContent = mensagem;

    const container = document.querySelector('.container');
    container.insertBefore(mensagemDiv, form);

    setTimeout(() => {
        mensagemDiv.remove();
    }, 3000);
}
