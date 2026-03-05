// document.addEventListener("DOMContentLoaded", function () {
//   /*===== MENU SHOW =====*/
//   const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//       nav = document.getElementById(navId);

//     if (toggle && nav) {
//       toggle.addEventListener("click", () => {
//         nav.classList.toggle("show");
//       });
//     }
//   };
//   showMenu("nav-toggle", "nav-menu");

//   /*==================== REMOVE MENU MOBILE ====================*/
//   const navLink = document.querySelectorAll(".nav__link");

//   function linkAction() {
//     const navMenu = document.getElementById("nav-menu");
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove("show");
//   }
//   navLink.forEach((n) => n.addEventListener("click", linkAction));

//   /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
//   const sections = document.querySelectorAll("section[id]");

//   const scrollActive = () => {
//     const scrollDown = window.scrollY;

//     sections.forEach((current) => {
//       const sectionHeight = current.offsetHeight,
//         sectionTop = current.offsetTop - 58,
//         sectionId = current.getAttribute("id"),
//         sectionsClass = document.querySelector(
//           ".nav__menu a[href*=" + sectionId + "]"
//         );

//       if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
//         sectionsClass.classList.add("active-link");
//       } else {
//         sectionsClass.classList.remove("active-link");
//       }
//     });
//   };
//   window.addEventListener("scroll", scrollActive);

//   /*===== SCROLL REVEAL ANIMATION =====*/
//   const sr = ScrollReveal({
//     origin: "top",
//     distance: "60px",
//     duration: 2000,
//     delay: 200,
//     //     reset: true
//   });

//   sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
//   sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
//     delay: 400,
//   });
//   sr.reveal(".home__social-icon", { interval: 200 });
//   sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

//   /*===== POP-UP MSGS =====*/

//   // Popup Open
//   document.querySelector(".nav__logo").addEventListener("click", function () {
//     document.getElementById("popup").style.display = "block";
//     document.getElementById("popup-overlay").style.display = "block";
//   });

//   // Popup Close
//   document.getElementById("popup-close").addEventListener("click", function () {
//     document.getElementById("popup").style.display = "none";
//     document.getElementById("popup-overlay").style.display = "none";
//   });

//   // Close Popup on Outside Click
//   window.addEventListener("click", function (event) {
//     if (event.target == document.getElementById("popup-overlay")) {
//       document.getElementById("popup").style.display = "none";
//       document.getElementById("popup-overlay").style.display = "none";
//     }
//   });

//   /*===== WHATSAPP CHECK =====*/
//   function isWhatsAppDesktopInstalled() {
//     const userAgent = navigator.userAgent.toLowerCase();
//     return userAgent.includes("whatsapp");
//   }

//   const whatsappLink = document.getElementById("whatsappLink");

//   if (isWhatsAppDesktopInstalled()) {
//     const choice = confirm(
//       "Do you want to open WhatsApp Web or the WhatsApp Desktop app? Click 'Cancel' to open WhatsApp Web."
//     );
//     if (choice === true) {
//       whatsappLink.href = "whatsapp://send?phone=9573071149";
//     } else {
//       whatsappLink.href = "https://web.whatsapp.com/send?phone=9573071149";
//     }
//   } else {
//     whatsappLink.href = "https://web.whatsapp.com/send?phone=9573071149";
//   }

//   /*===== contact page =====*/

//   // document.addEventListener("DOMContentLoaded", function () {
//   //   document.querySelectorAll(".contact__input").forEach((input) => {
//   //     input.addEventListener("mousedown", function (event) {
//   //       event.preventDefault();
//   //       event.stopPropagation();
//   //     });
//   //   });
//   // });

//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;

//   // You can add validation here before sending the data
//   if (name === "" || email === "" || message === "") {
//     alert("Please fill out this field.");
//     return false;
//   }
// });

///////////////////////////////////////////////////////////////////////////////////////

/*========================================== Optimized Code ==========================================*/

document.addEventListener("DOMContentLoaded", function () {
  /*===== MENU SHOW =====*/
  const toggleMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  toggleMenu("nav-toggle", "nav-menu");

  /*==================== REMOVE MENU MOBILE ====================*/
  const closeMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  };
  document
    .querySelectorAll(".nav__link")
    .forEach((n) => n.addEventListener("click", closeMenu));

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll("section[id]");
  const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight,
        sectionTop = section.offsetTop - 58,
        sectionId = section.getAttribute("id"),
        navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    });
  };
  window.addEventListener("scroll", scrollActive);

  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
  });

  sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
  sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
    delay: 400,
  });
  sr.reveal(".home__social-icon", { interval: 200 });
  sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

  document.querySelectorAll('.skill-progress').forEach(el => {
    const end = el.dataset.progress;
    el.style.setProperty('--progress', '0%');
    setTimeout(() => {
      el.animate([{ '--progress': '0%' }, { '--progress': end + '%' }], {
        duration: 1200,
        fill: 'forwards',
      });
      el.style.setProperty('--progress', end + '%');
    }, 300);
  });

  /*===== POP-UP MSGS =====*/
  document.querySelector(".nav__logo").addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-overlay").style.display = "block";
  });
  document.getElementById("popup-close").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-overlay").style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("popup-overlay")) {
      document.getElementById("popup").style.display = "none";
      document.getElementById("popup-overlay").style.display = "none";
    }
  });

  /*===== What's app check =====*/
  const isWhatsAppDesktopInstalled = () =>
    navigator.userAgent.toLowerCase().includes("whatsapp");
  const whatsappLink = document.getElementById("whatsappLink");
  whatsappLink.href = isWhatsAppDesktopInstalled()
    ? confirm(
        "Do you want to open WhatsApp Web or the WhatsApp Desktop app? Click 'Cancel' to open WhatsApp Web."
      )
      ? "whatsapp://send?phone=9573071149"
      : "https://web.whatsapp.com/send?phone=9573071149"
    : "https://web.whatsapp.com/send?phone=9573071149";

  /*===== contact page =====*/
  document.getElementById("contactForm").addEventListener("input", function () {
    document.getElementById("emailPreview").innerHTML = `
      <div class="email-message__header">
        A message by <strong>${document.getElementById("name").value || "Anonymous"}</strong>
        (<span class="email">${document.getElementById("email").value || "No email"}</span>) has been written.
      </div>
      <div class="email-message__body">
        <p>${document.getElementById("message").value || "No message yet."}</p>
      </div>`;
  });

  /*===== Dark Mode Toggle =====*/
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check for saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
  }

  // Toggle dark mode on button click
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    const theme = body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
});
