

function apenasLetrasMinusculas (textarea) {
    let letrasMinusculas = /[^a-z]/g;
    textarea.value = textarea.value.replace(letrasMinusculas, "");
}

function botaoCriptografar() {
    let texto = document.getElementById('texto').value;
    let codificacao = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    let resultadoCriptografar = '';
    for (let i = 0; i < texto.length; i++) {
        let cripto = texto[i];
        resultadoCriptografar += codificacao[cripto] || cripto;
    }
    document.getElementById('palavra').innerHTML = resultadoCriptografar;

    let palavra = document.getElementById('palavra');
    let palavraBotao = document.getElementById('palavraBotao');
    let imagem = document.getElementById('imagem');
    palavra.style.display= 'block';
    palavraBotao.style.display= 'block';
    imagem.style.display= 'none';
    document.getElementById('texto').value = '';
}

function botaoDescriptografar() {
    let texto = document.getElementById('texto').value;
        let decodificacao = texto
            .replace(/ai/g, 'a')
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        
        document.getElementById('palavra').innerHTML = decodificacao;

    palavra.style.display= 'block';
    palavraBotao.style.display= 'block';
    imagem.style.display= 'none';
    document.getElementById('texto').value = '';
}

function botaoCopiar() {
    let palavraCopiada = document.getElementById('palavra');
    palavraCopiada.select();
    document.execCommand('copy');
}