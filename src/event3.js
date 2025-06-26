//スイッチ要素を取得
const switchOuter = document.querySelector(".switch_outer");
const toggleSwitch = document.querySelector(".toggle_switch");

//クリックでacitveクラスを切り替え
switchOuter.addEventListener("click", () => {
    switchOuter.classList.toggle("active");
    toggleSwitch.classList.toggle("active");
});