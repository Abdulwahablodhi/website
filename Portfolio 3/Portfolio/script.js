// JavaScript for smooth scrolling to sections
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-list a");

  // Add click event listeners to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Get the target section's ID from the link's href
      const targetId = this.getAttribute("href").substring(1);

      // Find the target section by its ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Scroll smoothly to the target section
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
