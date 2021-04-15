// immediate invoked function expression
(function () {
  const quotes = [
    {
      author: "Martin Fowler",
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    },
    {
      author: "John Johnson",
      quote: "First, solve the problem. Then, write the code.",
    },
    {
      author: "Oscar Wilde",
      quote: "Experience is the name everyone gives to their mistakes.",
    },
    {
      author: "Chris Heilmann",
      quote: "Java is to JavaScript what car is to Carpet.",
    },
    {
      author: "Francis Bacon",
      quote: "Knowledge is power.",
    },
    {
      author: "Chris Pine",
      quote:
        "Programming isn't about what you know; it's about what you can figure out.",
    },
    {
      author: "Ralph Johnson",
      quote: "Before software can be reusable it first has to be usable.",
    },
    {
      author: "Dennis Ritchie",
      quote:
        "The only way to learn a new programming language is by writing programs in it.",
    },
    {
      author: "Burt Rutan",
      quote: "Testing leads to failure, and failure leads to understanding.",
    },
    {
      author: "Jason C. McDonald",
      quote:
        "Don't write better error messages, write code that doesn't need them.",
    },
    {
      author: "Anonymous",
      quote:
        "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    },
    {
      author: "Linus Torvalds",
      quote: "Talk is cheap. Show me the code.",
    },
    {
      author: "Harold Abelson",
      quote:
        "Programs must be written for people to read, and only incidentally for machines to execute.",
    },
    {
      author: "Kent Beck",
      quote:
        "I'm not a great programmer; I'm just a good programmer with great habits.",
    },
    {
      author: "Muhammad Waseem",
      quote:
        "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    },
    {
      author: "The Developer of this page😁😂🤣",
      quote:
        "If you can't do what you can think of, you still don't know enough.",
    },
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
