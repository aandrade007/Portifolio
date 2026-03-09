window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1CSTMVPVWB');

particlesJS.load('particles-js', 'particles.json');

AOS.init();

const btnMenu = document.querySelector('.menu-hamburger');
const nav = document.querySelector('header nav');

btnMenu.addEventListener('click', function() {
    nav.classList.toggle('nav-open');
    btnMenu.classList.toggle('open');
    btnMenu.setAttribute('aria-expanded', btnMenu.classList.contains('open'));
});

document.querySelectorAll('nav .naveg').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 900) {
            nav.classList.remove('nav-open');
            btnMenu.classList.remove('open');
            btnMenu.setAttribute('aria-expanded', 'false');
        }
    });
});

const imgs = [
    "../img/Certificado do Git.jpeg", 
    "../img/CertificadoAlura_IA.png", 
    "../img/CerfificadoPyInterface.png", 
    "../img/CerificadoAlura_JS.png", 
    "../img/CertificadoProjCompleto.png", 
    "../img/CertificadoPyCompleto.png", 
    "../img/CertificadoPyPOO.png"
];
let index = 0;

const carouselDisplay = document.getElementById("carousel-display");
const indicatorsContainer = document.getElementById("indicators-container");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const totalCertificates = imgs.length;

function updateCarouselDisplay() {
    carouselDisplay.classList.add('transitioning'); 
    setTimeout(() => {
        carouselDisplay.innerHTML = '';
        
        const prevIndex = index - 1;
        const nextIndex = index + 1;

        const createImage = (src, className) => {
            const img = document.createElement('img');
            img.src = src;
            img.classList.add(className);
            img.alt = `Certificado ${className}`;
            return img;
        };

        if (prevIndex >= 0) {
            carouselDisplay.appendChild(createImage(imgs[prevIndex], 'side'));
        } else {
            const placeholder = document.createElement('div');
            placeholder.style.width = '130px'; 
            carouselDisplay.appendChild(placeholder);
        }

        carouselDisplay.appendChild(createImage(imgs[index], 'center'));

        if (nextIndex < totalCertificates) {
            carouselDisplay.appendChild(createImage(imgs[nextIndex], 'side'));
        } else {
            const placeholder = document.createElement('div');
            placeholder.style.width = '130px';
            carouselDisplay.appendChild(placeholder);
        }

        updateButtonsAndIndicators();
        carouselDisplay.classList.remove('transitioning'); 
    }, 80);
}

function createIndicators() {
    indicatorsContainer.innerHTML = '';
    imgs.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            index = i;
            updateCarouselDisplay();
        });
        indicatorsContainer.appendChild(dot);
    });
}

function updateButtonsAndIndicators() {
    const dots = indicatorsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });

    prevButton.disabled = index === 0;
    nextButton.disabled = index === totalCertificates - 1;

    prevButton.style.opacity = index === 0 ? '0.5' : '1';
    nextButton.style.opacity = index === totalCertificates - 1 ? '0.5' : '1';
}

nextButton.addEventListener("click", () => {
    if (index < totalCertificates - 1) {
        index++;
        updateCarouselDisplay();
    }
});

prevButton.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateCarouselDisplay();
    }
});

function configurarSaudacao() {
    const hora = new Date().getHours();
    let saudacao = "";
    if (hora < 12) saudacao = "Bom dia!";
    else if (hora < 18) saudacao = "Boa tarde!";
    else saudacao = "Boa noite!";
    document.querySelector('.inicio_euSou h3').innerText = `${saudacao} Bem-vindo ao meu portfólio acadêmico!`;
}

function animarContadorSkills() {
    const displayContador = document.getElementById('skill-count');
    const skills = document.querySelectorAll('.tecs_item');
    const totalSkills = skills.length;
    
    let jaAnimou = false;

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !jaAnimou) {
            jaAnimou = true;

            for (let i = 0; i <= totalSkills; i++) {
                setTimeout(() => {
                    displayContador.innerText = i;
                    displayContador.style.transform = "scale(1.2)";
                    setTimeout(() => {
                        displayContador.style.transform = "scale(1)";
                    }, 50);

                }, i * 100); 
            }
        }
    }, { threshold: 0.5 });

    observer.observe(document.getElementById('Skills'));
}

function renderizarHardSkills() {
    const listaHardSkills = [
        { nome: "HTML5", icone: "devicon-html5-plain" },
        { nome: "CSS3", icone: "devicon-css3-plain" },
        { nome: "JavaScript", icone: "devicon-javascript-plain" },
        { nome: "TypeScript", icone: "devicon-typescript-original"},
        { nome: "Python", icone: "devicon-python-plain" },
        { nome: "Flask", icone: "devicon-flask-original" },
        { nome: "Java", icone: "devicon-java-plain" },
        { nome: "Git", icone: "devicon-git-plain" },
        { nome: "GitHub", icone: "devicon-github-original" },
        { nome: "Docker", icone: "devicon-docker-plain" },
        { nome: "MySQL", icone: "devicon-mysql-plain" },
        { nome: "PHP", icone: "devicon-php-plain" }
    ];

    const container = document.getElementById('hard-skills-container');
    const displayContador = document.getElementById('skill-count');

    for (let i = 0; i < listaHardSkills.length; i++) {
        const skill = listaHardSkills[i];

        const itemDiv = document.createElement('div');
        itemDiv.className = 'tecs_item';
        
        itemDiv.innerHTML = `
            <i class="${skill.icone}"></i>
            <p>${skill.nome}</p>
        `;

        container.appendChild(itemDiv);
    }

    let jaAnimou = false;
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !jaAnimou) {
            jaAnimou = true;

            for (let i = 0; i <= listaHardSkills.length; i++) {
                setTimeout(() => {
                    displayContador.innerText = i;
                }, i * 80);
            }
        }
    }, { threshold: 0.5 });

    observer.observe(document.getElementById('Skills'));
}

function renderizarSoftSkills() {
    const listaSoftSkills = [
        { nome: "Comunicação", icone: "fa-comments" },
        { nome: "Trabalho em Equipe", icone: "fa-users" },
        { nome: "Resolução de Problemas", icone: "fa-lightbulb" },
        { nome: "Adaptabilidade", icone: "fa-gears" },
        { nome: "Pensamento Crítico", icone: "fa-brain" }
    ];

    const container = document.getElementById('soft-skills-container');
    const displayContador = document.getElementById('soft-skill-count');
    for (let i = 0; i < listaSoftSkills.length; i++) {
        const skill = listaSoftSkills[i];
        const card = document.createElement('div');
        card.className = 'tecs_soft';

        card.innerHTML = `
            <p>${skill.nome}</p><i class="fa-solid ${skill.icone}"></i>
        `;
        
        container.appendChild(card);
    }

    let jaAnimou = false;
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !jaAnimou) {
            jaAnimou = true;
            
            for (let i = 0; i <= listaSoftSkills.length; i++) {
                setTimeout(() => {
                    displayContador.innerText = i;
                }, i * 150);
            }
        }
    }, { threshold: 0.5 });
    
    observer.observe(document.getElementById('SoftSkills'));
}

const toggleBtn = document.querySelector('.mode-toggle');
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } 
    else {
        localStorage.setItem('theme', 'dark');
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
} 
else if (savedTheme === 'dark') {
    body.classList.remove('light-mode');
}
else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    body.classList.add('light-mode');
}

toggleBtn.addEventListener('click', toggleDarkMode);

window.onload = () => {
    configurarSaudacao();
    createIndicators();
    updateCarouselDisplay();
    animarContadorSkills();
    renderizarHardSkills();
    renderizarSoftSkills();
};