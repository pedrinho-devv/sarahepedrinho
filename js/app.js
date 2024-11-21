const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

//   gerador de frases

const quotes = [
    {
      quote: "Amor é fogo que arde sem se ver, é ferida que dói e não se sente.",
      author: "Luís de Camões",
    },
    {
      quote:
        "Que não seja imortal, posto que é chama, mas que seja infinito enquanto dure.",
      author: "Vinicius de Moraes",
    },
    {
      quote: "Sei que vou te amar por toda a minha vida.",
      author: "Vinicius de Moraes",
    },
    {
      quote: "Meu peito é capaz de amar-te com tal zelo e tanto amor.",
      author: "Carlos Drummond de Andrade",
    },
    {
      quote: "E que seja doce cada instante entre nós dois.",
      author: "Caio Fernando Abreu",
    },
    {
      quote:
        "Quando o amor vos chamar, segui-o, ainda que seus caminhos sejam árduos e escarpados.",
      author: "Khalil Gibran (naturalizado por poetas brasileiros)",
    },
    {
      quote: "O amor é quando a alma começa a dançar.",
      author: "Mário Quintana",
    },
    {
      quote:
        "O amor é a coisa mais alegre, mais triste e mais contraditória que existe.",
      author: "Arnaldo Jabor",
    },
    {
      quote: "Amo como o amor ama. Não sei razão para amar-te mais que amar-te.",
      author: "Fernando Pessoa",
    },
    {
      quote:
        "Se eu não te amasse tanto assim, talvez não visse flores onde eu vi.",
      author: "Herbert Vianna",
    },
    {
      quote:
        "Amei-te sem saber, sem querer, mas amei-te. E isso me basta.",
      author: "Pablo Neruda",
    },
    {
      quote: "E depois de tanto te amar, me perdi em ti como em um mar sem fim.",
      author: "Pablo Neruda",
    },
    {
      quote:
        "Eu te amo de um modo tão particular que, mesmo quando estou sozinho, te encontro em mim.",
      author: "Pablo Neruda",
    },
    {
      quote:
        "Amar é não ter mais domínio sobre os sentimentos e os sonhos que nos invadem.",
      author: "Pablo Neruda",
    },
    {
      quote: "Tu és a minha vida, o meu pão e o meu céu.",
      author: "Pablo Neruda",
    },
    {
      quote:
        "Que o amor seja a dor mais doce e a alegria mais pungente de nossas vidas.",
      author: "Pablo Neruda",
    },
    {
      quote: "Eu sou teu, mesmo que o mundo se acabe, eu sou teu.",
      author: "Pablo Neruda",
    },
    {
      quote: "Se tu me amasses com a mesma intensidade que eu te amo, seríamos eternos.",
      author: "Pablo Neruda",
    },
    {
      quote: "Eu te amo como se ama o mar: sem explicação, sem razão, sem fim.",
      author: "Pablo Neruda",
    },
    {
      quote:
        "As palavras mais belas são aquelas que se guardam, aquelas que só o coração entende.",
      author: "Florbela Espanca",
    },
    {
      quote:
        "Sou de ninguém, sou de todos, sou de mim mesma, e tu, apenas, sou teu para sempre.",
      author: "Florbela Espanca",
    },
    {
      quote:
        "E é por ti, amor, que o meu coração pulsa, que o meu corpo se aquece, que a minha alma se encontra.",
      author: "Florbela Espanca",
    },
    {
      quote: "Eu não sei amar pela metade. Eu amo com intensidade.",
      author: "Florbela Espanca",
    },
    {
      quote: "Os teus olhos são a luz do meu caminho, e o meu único destino é a tua mão.",
      author: "Florbela Espanca",
    },
    {
      quote:
        "Nada mais doce que o beijo do ser amado. Nada mais amargo que a saudade do amor perdido.",
      author: "Florbela Espanca",
    },
    {
      quote: "Eu sou do tipo que ama com a alma, não com o corpo.",
      author: "Florbela Espanca",
    },
    {
      quote: "Dize-me que me amas, e eu serei feliz até o fim dos meus dias.",
      author: "Florbela Espanca",
    },
    {
      quote: "Amor é como a chuva: vem, não avisa, e transforma tudo.",
      author: "Florbela Espanca",
    },
  ];
  
  
  const quoteBnt = document.getElementById("quoteBnt");
  const quoteText = document.querySelector(".text");
  const quoteAuthor = document.querySelector(".author");
  
  function getQuote() {
    const index = Math.floor(Math.random() * quotes.length);
  
    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = quotes[index].author;
  }
  
  quoteBnt.addEventListener("click", getQuote);
  

  // Dados da linha do tempo
const timelineData = [
  {
    title: "📍 26/05/24 - O início de tudo",
    text: "A primeira mensagem que mandei para ela.",
    img: "/img/primeiratalk.jpg",
  },
  {
    title: "💌 17/07/24 - O dia da declaração.",
    text: "O momento que mudou nossas vidas para sempre.",
    img: "/img/diadeclarar.png",
  },
  {
    title: "❤️ 17/07/24 - Nossa primeira foto",
    text: "Um marco em nossas vidas. Uma foto de dois apaixonados",
    img: "/img/firstimg.jpg",
  },
];

// Selecionando os elementos
const markers = document.querySelectorAll(".timeline-marker");
const content = document.getElementById("timeline-content");
const title = content.querySelector("h3");
const text = content.querySelector("p");
const image = content.querySelector("img");

// Adicionando evento de clique nos marcadores
markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    const index = marker.getAttribute("data-index");
    const data = timelineData[index];

    // Atualizando conteúdo
    title.textContent = data.title;
    text.textContent = data.text;
    image.setAttribute("src", data.img);

    // Mostrando a seção com animação
    content.style.display = "block";
  });
});


