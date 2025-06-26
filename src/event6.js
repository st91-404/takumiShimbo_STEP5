let countNum = 1;
// 定義
const display = document.getElementById("displayCount");
const button = document.getElementById("countBtn");

// clicked event
document.getElementById("countBtn").addEventListener("click", () => {
    // add
    countNum++;
    // 5を超えたら1に戻す
    if (countNum > 5) {
        countNum = 1;
    }
    display.textContent = countNum;
});
