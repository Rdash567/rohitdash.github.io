document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Typing Animation for Header Text
  const textElement = document.getElementById("animated-text");
  if (textElement) {
    const text = "Hi, I'm Rohit!";
    let i = 0;
    textElement.innerHTML = ""; // Clear before typing starts

    function typeText() {
      if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 100);
      }
    }
    typeText();
  }

  // Parallax Scrolling Effect (Optimized)
  window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      document.body.style.backgroundPositionY = window.scrollY * 0.5 + "px";
    });
  });

  // Interactive Project Cards
  const projectCards = document.querySelectorAll(".project");
  projectCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.background = `radial-gradient(circle at ${x}% ${y}%, #ff007a, #33194f)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.background = "rgba(255, 255, 255, 0.1)";
    });

    // 3D Card Hover Effect
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
    setTimeout(() => {
      skill.style.opacity = "1";
      skill.style.transform = "translateY(0)";
    }, index * 300);
  });

  // Reveal Sections and Timeline Items on Scroll
  const revealElements = () => {
    document.querySelectorAll("section, .timeline-item").forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 100) {
        element.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealElements);
  revealElements(); // Run once on load
});
