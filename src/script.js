// Smooth scrolling for in-page links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
    const navToggle = document.querySelector(".nav__toggle");
    const navLinksContainer = document.querySelector(".nav__links");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#") && targetId.length > 1) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
            // Close mobile menu after click
            if (navLinksContainer.classList.contains("nav__links--open")) {
                navLinksContainer.classList.remove("nav__links--open");
            }
        });
    });

    // Mobile nav toggle
    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navLinksContainer.classList.toggle("nav__links--open");
        });
    }

    // Simple accordion behaviour for challenges section
    const accordionItems = document.querySelectorAll(".accordion__item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion__header");
        const panel = item.querySelector(".accordion__panel");

        header.addEventListener("click", () => {
            const isOpen = item.classList.contains("accordion__item--open");

            // Close all items
            accordionItems.forEach(other => {
                other.classList.remove("accordion__item--open");
                const otherPanel = other.querySelector(".accordion__panel");
                if (otherPanel) {
                    otherPanel.style.maxHeight = null;
                    otherPanel.classList.remove("open");
                }
            });

            // Open this one if it was closed
            if (!isOpen) {
                item.classList.add("accordion__item--open");
                panel.classList.add("open");
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });

        // Initialise max-height for first item if desired (optional)
        if (item === accordionItems[0]) {
            item.classList.add("accordion__item--open");
            panel.classList.add("open");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
