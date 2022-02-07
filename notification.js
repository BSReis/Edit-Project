let active = document.getElementById("ativos");
let inactive = document.getElementById("historico");


active.addEventListener("click", () => {
    active.classList.remove("stantardOrganizer");
    active.classList.add("historyOrganizer");
    inactive.classList.remove("historyOrganizer");

    let cards = document.querySelectorAll(".cuponCard");
    let red = document.querySelectorAll(".addRed");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
    }
    for (let i = 0; i < red.length; i++) {
        red[i].style.color = "#018eaa";
    }

});

inactive.addEventListener("click", () => {
    inactive.classList.add("historyOrganizer");
    active.classList.remove("historyOrganizer");
    active.classList.add("stantardOrganizer");

    let cards = document.querySelectorAll(".cuponCard");
    let red = document.querySelectorAll(".addRed");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.opacity = "50%";
    }
    for (let i = 0; i < red.length; i++) {
        red[i].style.color = "red";
    }

});

