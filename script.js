const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
  "Live the life you love.",
  "dream big, work hard.",
  "Chase your dreams, not people.",
  "Believe you can, and you're halfway there.",
  "Stars can't shine without darkness.",
  "Embrace the journey, trust the process, enjoy the results.",
  "Fall seven times, stand up eight.",
  "Spread love everywhere you go.",
  "Happiness is by choice, not chance.",
  "Success is not final, failure is not fatal.",
  "The future belongs to those who believe in their dreams.",
  "Do more things that make you forget to check your phone.",
];

btn.addEventListener("click" ,() =>
{
  let random = Math.floor(Math.random()*12);
  output.textContent = quote[random];
})