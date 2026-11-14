// Lucid One Page Theme - Interactive Scripts

document.addEventListener("DOMContentLoaded", function () {
  // 1. Mobile Navigation Toggle
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".header-section .nav ul li a");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("open");
      mainNav.classList.toggle("open");
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navToggle.classList.remove("open");
        mainNav.classList.remove("open");
      });
    });
  }

  // 2. Active Navigation on Scroll (ScrollSpy)
  const sections = document.querySelectorAll("section[id]");

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        document
          .querySelectorAll(".header-section .nav ul li")
          .forEach((li) => {
            li.classList.remove("active");
          });
        const activeLink = document.querySelector(
          `.header-section .nav ul li a[href="#${id}"]`
        );
        if (activeLink && activeLink.parentElement) {
          activeLink.parentElement.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);

  // 3. Testimonial Pagination Dots
  const dots = document.querySelectorAll(".pagination-dots .dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      dots.forEach((d) => d.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // 4. Contact Form Handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('input[type="submit"]');
      const originalValue = submitBtn.value;

      submitBtn.value = "SENDING...";
      submitBtn.disabled = true;

      setTimeout(() => {
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
        submitBtn.value = originalValue;
        submitBtn.disabled = false;
      }, 700);
    });
  }
});
