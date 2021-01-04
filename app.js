// selecting all required elements 
const select_box = document.querySelector(".select-box");
select_x_btn = select_box.querySelector(".playerX");
select_o_btn = select_box.querySelector(".playerO");
play_board = document.querySelector(".play-board");

window.onload = () => { // Once Window loaded
    select_x_btn.onclick = () => {
        select_box.classList.add("hide");
        play_board.classList.add("show");
    }
}