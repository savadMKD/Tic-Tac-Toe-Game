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
let player_sign = "X"; // * Suppose player will be X

// * User Click Function

function clicked_the_box(element){
    if(game_players.classList.contains("player")){ // * if paleyers element has contains .player
        element.innerHTML = `<i class="${player_o_icon}"></i>`; // * Adding circle icon tag inside user clicked element
        game_players.classList.add("active");
        // * if player slect o we will change the player sign value to O
        player_sign = "O";
        element.setAttribute("id", player_sign);
    }
    else {
        element.innerHTML = `<i class="${player_x_icon}"></i>`; // * Adding cross icon tag inside user clicked element
        game_players.classList.add("active");
        element.setAttribute("id", player_sign);
    }
    element.style.pointerEvents = "none"; // * once user select any box can't be selected again
    let random_delay_time = ((Math.random() * 1000) + 200).toFixed(); // * generating random time delay so bot will be delay randomly to select box
    setTimeout(() => {
        bot(); // * Calling Bot Function
    }, random_delay_time); // * Passing random delay time
}

// * Bot Click Function 

function bot(){
    // * First Change the player sign.... so if user has X value in id then bot will have O
    player_sign = "O";
    let array = []; // * Creating Empty Array... We Will Store unselected box index in this array
    for(let i = 0; i < all_box.length; i++){
        array.push(i); // * Inserting unclicked or seleceted boxes inside array means that span has no chidren
    }
    let random_box = array[Math.floor(Math.random() * array.length)]; // * Getting Random Index from array so bot will select random unselected box
    console.log(random_box);
    if(array.length > 0){
        if(game_players.classList.contains("player")){ // * if paleyers element has contains .player
            all_box[random_box].innerHTML = `<i class="${player_x_icon}"></i>`; // * Adding cross icon tag inside user clicked element
            game_players.classList.remove("active");
            // * If User is O then the box id value will be X
            player_sign = "X";
            all_box[random_box].setAttribute("id", player_sign);
        }
        else {
            all_box[random_box].innerHTML = `<i class="${player_o_icon}"></i>`; // * Adding circle icon tag inside user clicked element
            game_players.classList.remove("active");
            all_box[random_box].setAttribute("id", player_sign);
        }
    }
    all_box[random_box].style.pointerEvents = "none"; // * once bot select any box then user can't select or click that box
}