var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "--Oscar Wilde",
  },
  {
    quote: "“So many books, so little time.”",
    author: "--Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "--Marcus Tullius Cicero",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "--Mahatma Gandhi",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "--Robert Frost",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "--Mark Twain",
  },
  {
    quote:
      "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
    author: "--Martin Luther King Jr",
  },
  {
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "--Andre Gide, Autumn Leaves",
  },
  {
    quote:
      "“the people who are crazy enough to think they can change the world are the ones who do.”",
    author: "--Steve Jobs",
  },
  {
    quote:
      "“Never give up, for that is just the place and time that the tide will turn.”",
    author: "--Harriet Beecher Stowe",
  },
  {
    quote: "“either i will find a way, or i will make one.”",
    author: "--Philip Sidney",
  },
  {
    quote:
      "“i know where i'm going and i know the truth, and i don't have to be what you want me to be. i'm free to be what i want.”",
    author: "--Muhammad Ali",
  },
  {
    quote: "“The only way to do great work is to love what you do.”",
    author: "--Warren Buffett",
  },
  {
    quote:
      "“If you can't explain it simply, you don't understand it well enough.”",
    author: "--Stephen Hawking",
  },
];

function generateQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomQuote].quote;
  document.getElementById("author").innerHTML = quotes[randomQuote].author;
}
