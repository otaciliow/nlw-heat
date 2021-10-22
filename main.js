// Objeto com os links para as redes sociais
const links = {
    github: 'otaciliow',
    youtube: 'otacilio-dml',
    facebook: 'otacilio-dml',
    instagram: 'otaciliow',
    twitter: 'otacilio_dml'
}

function changeLink() {
    for (let li of socialLinks.children){ // o javascript entende que o elemento mencionado antes do ponto, é um id do documento HTML, tirando a necessidade de usar document.getElementById
        const social = li.getAttribute('class');

        // Altera o conteúdo do atributo href de cada <a> (filho) de cada li, para o conteúdo do obj links que seja igual ao nome mencionado na variável "social"
        li.children[0].href = `https://${social}.com/${links[social]}`;

    }
}

changeLink();

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${links.github}`;
    
    // Acessa a url da API, pega o JSON que a API responde e devolve para a function.
    // Essa resposta se torna uma "promise", que é uma condicional para o retorno da fetch
    fetch(url)
    .then(response => response.json()) // esse retorno é gravado na variável "response", e ela cria um arquivo JSON com essas informações
    .then(data => {
        profilePic.src = data.avatar_url;
        profileUser.textContent = data.name;
        profileBio.textContent = data.bio;
        profileLink.href = data.html_url;
        profileLogin.innerHTML = data.login;
    })

    // É possível utilizar mais de uma promise, e elas serão escaláveis (uma será executada baseada na anterior)
}

getGitHubProfileInfos()

// camelCase
// PascalCase
// snake_case