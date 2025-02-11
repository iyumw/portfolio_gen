const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// async pq vai mandar uma requisição
async function getApiGithub() {
    try{
        // faz a requisição
        const dadosPerfil = await fetch(`https://api.github.com/users/iyumw`);
        // converte os dados em json
        const perfil = await dadosPerfil.json();

        let conteudo = `
            <img
            src="${perfil.avatar_url}"
            alt="GitHub Profile Picture - ${perfil.name}"
            />
            <article id="about_text">
            <h2>About Me</h2>
            <p>
                My name is Isis, but you can call me Yume! I am a 20 years old Fullstack Developer specialized in JavaScript, and also a student of Information Systems. I am passionate about solving problems and developing functional and intuitive applications. My training has allowed me to explore and apply technologies such as React, Nest.js, SQL, Java, Spring and Python.
            </p>
            <p>
                Besides technology, I am an amateur swimmer and believe that discipline, persistence, and continuous learning are essential both in sports and programming. I am always looking to improve my skills and contribute with innovative solutions.
            </p>
            <p>
                Want to know more about my projects? Check out my GitHub!
            </p>

            <div class="flex about_github">
                <a class="botao" href="${perfil.html_url}" target="_blank">GitHub</a>
                <p>${perfil.followers} Followers</p>
                <p>${perfil.public_repos} Repositories</p>
            </div>
            </article>
        `;

        sobre.innerHTML += conteudo;
    }
    catch(error){
        console.error("Error:", error);
    }
}

// valida o formulário

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome")

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres.";
        campoNome.focus();
        return;
    } else {
        txtNome.innerHTML = "";
    }

    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail")

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail válido.";
        campoEmail.focus();
        return;
    } else {
        txtEmail.innerHTML = "";
    }

    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto")

    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres.";
        campoAssunto.focus();
        return;
    } else {
        txtAssunto.innerHTML = "";
    }

    formulario.submit();
});

getApiGithub();