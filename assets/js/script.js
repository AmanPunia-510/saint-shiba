let accord_items = document.querySelectorAll(".accordian-box");

accord_items.forEach(items => {
    const heading = items.querySelector(".heading-svg");
    const paragraph = items.querySelector(".accordian-p");
    const svg = items.querySelector(".accordian-svg");

    heading.addEventListener("click", () => {

        accord_items.forEach(other => {
            if (other !== items) {
                let para = other.querySelector(".accordian-p");
                let svg = other.querySelector(".accordian-svg");
                para.style.display = "none";
                svg.classList.remove("rotate")
            }
        });

        if (paragraph.style.display === "none") {
            paragraph.style.display = "block";
            svg.classList.add("rotate");
        }
        else {
            paragraph.style.display = "none"
            svg.classList.remove("rotate");
        }
    });
});