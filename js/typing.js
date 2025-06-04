
  const words = ["Web Developer", "Frontend Developer", "ReactJS Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let typingSpan = document.querySelector(".typing");
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingSpan.textContent = currentWord.substring(0, charIndex--);
    } else {
      typingSpan.textContent = currentWord.substring(0, charIndex++);
    }

    let typeSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  document.addEventListener("DOMContentLoaded", type);

