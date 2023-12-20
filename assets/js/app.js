let accordian = document.querySelectorAll(".accordian_item");
accordian.forEach(function (e) {
    e.addEventListener("click", function () {
        let hide = e.classList.contains("active");
        accordian.forEach(function (e) {
            e.classList.remove("active");
        })
        if (!hide) {
            e.classList.toggle("active");
        }
    })
})