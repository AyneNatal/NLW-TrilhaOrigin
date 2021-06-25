// abrir e fechar o menu

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (let icons of toggle){
    icons.addEventListener('click', function (){
        nav.classList.toggle('show');
    })
}

// esconder o menu qnd clicar em alguma opção

const links = document.querySelectorAll('nav ul li a');

for (let link of links){
    link.addEventListener('click', function (){
        nav.classList.remove('show');
    })
}

//Função p/ Deixar o header da pag com uma sombra leve qnd der scroll. (vai ser chamada no addEvent Listener abaixo)

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll (){
    if (window.scrollY >= navHeight){
        header.classList.add('scroll');

    } else{
        header.classList.remove('scroll');
    }
}


//Fazendo o carrossel com o Swiper
//Essas propriedades estão na documentação

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,

    breakpoints: {
        767: {
            slidesPerView: 2,
            setWripperSize: true
        }
    }
    
})

//Scroll Reveal: Mostrar elementos qnd der scroll na pag

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `
    #home .text, #home .image,
    #about .text, #about .image,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    {interval: 100}
)


//Função para voltar ao topo - aparecer depois de uma certa altura de rolagem (vai ser chamada no addEvent Listener abaixo).

const backToTopButton = document.querySelector('.back-to-top');

function backToTop () {
    if (window.scrollY >= 560){
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}


//Menu ativo conforme a seção visível na pág

const sections = document.querySelectorAll('main section[id]');

function activateMenuAtCurrentSection (){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for (let section of sections){
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;
        
        if (checkpointStart && checkpointEnd){
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active');
        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active');
        }
    }

}


//chamando as funções de scroll

window.addEventListener('scroll', function (){
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection();
})


