document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", function () {
    if (sidebar.style.left === "-250px") {
      sidebar.style.left = "0";
    } else {
      sidebar.style.left = "-250px";
    }
  });
});

function showMenu(menuType) {
  const items = document.querySelectorAll(".menu-item");
  const buttons = document.querySelectorAll(".menu-btn");

  items.forEach((item) => {
    if (item.classList.contains(menuType)) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });

  buttons.forEach((button) => {
    if (button.innerText.toLowerCase() === menuType) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}

// Display breakfast menu by default
document.addEventListener("DOMContentLoaded", () => {
  showMenu("breakfast");
});

// Add event listener to window
window.addEventListener("selectstart", function (event) {
  // Prevent selection
  event.preventDefault();
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Animation for the logo
  gsap.fromTo(
    ".logo",
    { scale: 3, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
  );

  // Delay for the fade-out effect
  gsap.to(".logo", {
    opacity: 0,
    duration: 1,
    delay: 1.5,
    ease: "power3.out",
    onComplete: showContent,
  });

  // Function to reveal the main content
  function showContent() {
    gsap.to(".main-content", {
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power3.out",
    });
    document.body.style.overflow = "auto"; // Allow scrolling after the animation
  }
});
const textContainer = document.getElementById("scrolling-text");
const textContent = textContainer.innerText;
textContainer.innerHTML = textContent.repeat(2); // Repeat text to ensure continuous scrolling

function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
