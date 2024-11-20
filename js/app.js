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
  