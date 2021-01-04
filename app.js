// selecting all required elements 
const select_box = document.querySelector(".select-box");
select_x_btn = select_box.querySelector(".playerX");
select_o_btn = select_box.querySelector(".playerO");
play_board = document.querySelector(".play-board");
all_box = document.querySelectorAll("section span");
game_players = document.querySelector(".players");

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
        game_players.setAttribute("class", "players active player"); // * Adding three Classnames in player element
    }
}

let player_x_icon = "fas fa-times"; // * classname of fontawesome cross icon
let player_o_icon = "far fa-circle"; // * classname of fontawesome circle icon

// * User Click Function

function clicked_the_box(element){
    if(game_players.classList.contains("player")){ // * if paleyers element has contains .player
        element.innerHTML = `<i class="${player_o_icon}"></i>`; // * Adding circle icon tag inside user clicked element
        game_players.classList.add("active");
    }
    else {
        element.innerHTML = `<i class="${player_x_icon}"></i>`; // * Adding cross icon tag inside user clicked element
        game_players.classList.add("active");
    }
    element.style.pointerEvents = "none"; // * once user select any box can't be selected again
}