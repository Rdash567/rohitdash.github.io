// Dynamic Typing Animation for Header Text
const textElement = document.getElementById('animated-text');
const text = "Hi, I'm Rohit!";
let i = 0;

// Ensure the content is cleared before typing starts
textElement.innerHTML = ""; 

function typeText() {
  if (i < text.length) {
    textElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 100);
  }
}
typeText();

// Parallax Scrolling Effect
window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  document.body.style.backgroundPositionY = offset * 0.5 + "px";
});

// Interactive Project Cards
const projectCards = document.querySelectorAll(".project");
projectCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, #ff007a, #33194f)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255, 255, 255, 0.1)";
  });
});

// 3D Card Hover Effect
projectCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});

// Skills Visualization
const skills = document.querySelectorAll("#skills ul li");
skills.forEach((skill, index) => {
  const delay = index * 300; // Stagger animation
  setTimeout(() => {
    skill.style.opacity = 1;
    skill.style.transform = "translateY(0)";
  }, delay);
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
