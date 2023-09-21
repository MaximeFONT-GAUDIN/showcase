document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
        if(links[links.length - 1] == link) {
            return;
        }
        if(links[0] == link) {
            return;
        }
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1); // Récupère l'identifiant de la section à cibler
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth", // Active le défilement fluide
                });
            }
        });
    });
});
