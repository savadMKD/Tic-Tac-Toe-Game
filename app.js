// selecting all required elements 
const select_box = document.querySelector(".select-box");
select_x_btn = select_box.querySelector(".playerX");
select_o_btn = select_box.querySelector(".playerO");
play_board = document.querySelector(".play-board");
all_box = document.querySelectorAll("section span");

window.onload = () => { // * Once Window loaded
    for (let i = 0; i < all_box.length; i++) { // * Add onclick attribute in all available section's span
        all_box[i].setAttribute("onclick", "clicked_the_box(this)");
    }

    select_x_btn.onclick = () => {
        select_box.classList.add("hide"); // * hide the select box when button_x clicked
        play_board.classList.add("show"); // * showing playboard section when button_x clicked
    }
    select_o_btn.onclick = () => {
        select_box.classList.add("hide"); // * hide the select box when button_o clicked
        play_board.classList.add("show"); // * showing playboard section when button_o clicked
    }
}

let player_x_icon = "fas fa-times"; // * classname of fontawesome cross icon
let player_o_icon = "fas fa-circle"; // * classname of fontawesome circle icon

function clicked_the_box(element){
    
}