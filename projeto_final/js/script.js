// Seleciona o elemento com id main-image (imagem que vai ficar no topo)
const mainImage = document.getElementById("main-image");

// Seleciona todos os elementos que tem a classe "bottom-image"
const bottomImages = document.querySelectorAll(".bottom-image");

// Roda um lalo de repetição pata cada elemento do bottomImages
bottomImages.forEach((image, index) => {
    // Escuta o clique encima de um dos elementos, com o objeto image
  image.addEventListener("click", () => {
    // Obtém o caminho da imagem atual na linha superior
    const currentImageSrc = mainImage.getAttribute("src");
    // Define o caminho da imagem na linha superior como o caminho da imagem clicada na linha inferior
    mainImage.setAttribute("src", image.getAttribute("src"));
    //// Define o caminho da imagem clicada na linha inferior como o caminho da imagem anterior da linha superior
    image.setAttribute("src", currentImageSrc);
  });
});


//forms
$(document).ready(function () {
    // Adicionando máscara ao campo de telefone
    $("#telefone").mask("(00)00000-0000");

    // Adicionando máscara ao campo de CPF
    $("#cpf").mask("000.000.000-00");

    // Adicionando máscara ao campo de data de nascimento
    $("#dataNascimento").mask("00/00/0000");
});

function validarFormulario() {
    const nome = $("#nome").val();
    const email = $("#email").val();
    const dataNascimento = $("#dataNascimento").val();
    const telefone = $("#telefone").val();
    const cpf = $("#cpf").val();

    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }

    if (email === "") {
        alert("Por favor, preencha o campo Email.");
        return false;
    }

    if (!validarEmail(email)) {
        alert("Email inválido. Por favor, insira um email válido.");
        return false;
    }

    if (dataNascimento === "" || !validardata(dataNascimento)) {
        alert("Por favor, preencha o campo Data de Nascimento.");
        return false;
    }
    

    if (telefone === "" || !validarTelefone(telefone)) {
        alert("Por favor, preencha o campo Telefone.");
        return false;
    }

    if (cpf === "" || !validarCPF(cpf)) {
        alert("CPF inválido. Por favor, insira um CPF válido.");
        return false;
    }

    return true;
}

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarCPF(cpf) {
    // Verifica se o CPF está no formato correto
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

function validardata (dataNascimento){
    // Verifica se a data de nascimento está no formato correto (DD/MM/YYYY)
    const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regexData.test(dataNascimento);
}

function validarTelefone(telefone) {
    // Verifica se o telefone está no formato correto
    return /^\(\d{2}\)\d{5}-\d{4}$/.test(telefone);
}