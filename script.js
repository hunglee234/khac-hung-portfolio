const texts = [
  "Backend Developer",
  "NodeJS Engineer",
  "DevOps Engineer",
  "Blockchain Enthusiast",
  "MongoDB Expert",
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typing.textContent += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (typing.textContent.length > 0) {
    typing.textContent = typing.textContent.slice(0, -1);

    setTimeout(eraseEffect, 50);
  } else {
    textIndex++;

    if (textIndex >= texts.length) {
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeEffect, 300);
  }
}

typeEffect();
