document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a[href^='#']:not([href='#home'])").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute("href").substring(1); // Get the section ID
            const targetSection = document.getElementById(targetId); // Find the target section

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for any fixed header spacing
                    behavior: "smooth" // Enables smooth scrolling
                });

                // Delay the scale animation until scrolling is done
                setTimeout(() => {
                    const heading = targetSection.querySelector("h1, h2, h3, h4, h5, h6");
                    if (heading) {
                        heading.style.transition = "transform 0.3s ease-in-out";
                        heading.style.transform = "scale(1.1)";

                        setTimeout(() => {
                            heading.style.transform = "scale(1)";
                        }, 300); // Reset after animation
                    }
                }, 600); // Adjust timing based on scroll duration
            }
        });
    });
});

// Add background effect on scroll
window.addEventListener("scroll", function () {
    const logo = document.querySelector(".logo a");
    if (window.scrollY > 100) { // When scrolled more than 100px
        logo.classList.add("bg-active");
    } else {
        logo.classList.remove("bg-active");
    }
});

