// Skills tabs
const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    // Remove active class from all tab contents
    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });

    // Add active class to the target content
    target.classList.add("skills__active");

    // Remove active class from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });

    // Add active class to the clicked tab
    tab.classList.add("skills__active");
  });
});

// mixitup filtering
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card"
  },
  animation: {
    duration: 300
  }
});

// link active work
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((item) => item.classList.remove("active-work"));

  this.classList.add("active-work");
}

linkWork.forEach((item) => item.addEventListener("click", activeWork));

// work popup

linkWork.forEach((l) => l.addEventListener("click", activeWork));

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  // console.log(portfolioItem);
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio__item-detail").innerHTML;
}

// services model
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

const modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

// Attach event listeners to the buttons that open the modals
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

// Attach event listeners to the buttons that close the modals
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

// testimonial swiper
// let swiper = new Swiper(".testimonials__container", {
//   spaceBetween: 24,
//   loop: true,
//   grabCursor: true,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 48
      }
    }
  });
});

// scroll active link
// Get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener that listens for scroll events
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position using scrollY instead of pageYOffset
  let scrollY = window.scrollY;

  // Loop through each section to get its height and top offset
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight; // Get the height of the section
    const sectionTop = current.offsetTop - 50; // Get the distance from the top of the viewport (with 50px offset)
    const sectionId = current.getAttribute("id"); // Get the section's id attribute

    // Add or remove the active class based on the scroll position
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // document.querySelector(`a[href*=${sectionId}]`).classList.add("active");
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      // document
      //   .querySelector(`a[href*=${sectionId}]`)
      //   .classList.remove("active");
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

// slide bar
// Get elements
const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLinks = document.querySelectorAll(".nav__link"); // Select all nav links

// Sidebar Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

// Sidebar Close
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

// Close sidebar when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar"); // Close sidebar
    const target = link.getAttribute("href"); // Get target section
    document.querySelector(target).scrollIntoView({ behavior: "smooth" }); // Scroll to the target section smoothly
  });
});
