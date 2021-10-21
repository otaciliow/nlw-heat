// Objeto com os links para as redes sociais
const links = {
    github: 'otaciliow',
    youtube: 'otacilio-dml',
    facebook: 'otacilio-dml',
    instagram: 'otaciliow',
    twitter: 'otacilio_dml'
}

function mudarLink() {
    for (let li of socialLinks.children){ // o javascript entende que o elemento mencionado antes do ponto, é um id do documento HTML, tirando a necessidade de usar document.getElementById
        const social = li.getAttribute('class');

        // Altera o conteúdo do atributo href de cada <a> (filho) de cada li, para o conteúdo do obj links que seja igual ao nome mencionado na variável "social"
        li.children[0].href = `https://${social}.com/${links[social]}`;

    }
}

mudarLink();

// camelCase
// PascalCase
// snake_case