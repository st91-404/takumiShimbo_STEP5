//1
//処理
var sampleTextarea = document.getElementById('sampleTextarea');
var displayText = document.getElementById('displayText');
var displayButton = document.getElementById('displayButton');

//表示するためのもの
displayButton.addEventListener('click',() => {
    var textValue = sampleTextarea.value;
    if(textValue.trim() == ''){
    displayText.textContent ="入力値が空です。";
    }else{
    displayText.textContent = sampleTextarea.value;
    }
});

//2
//input
const changeButton = document.getElementById("changeButton");
const h2 = document.querySelector(".myColor");
const bgColors = ["lightblue","lightgreen","lightcoral"];
let currentColorIndex = 0;
//output
changeButton.addEventListener('click',()=>{
    currentColorIndex = (currentColorIndex + 1) % bgColors.length;
    h2.style.backgroundColor = bgColors[currentColorIndex];
}
);

//3
//スイッチ要素を取得
const switchOuter = document.querySelector(".switch_outer");
const toggleSwitch = document.querySelector(".toggle_switch");

//クリックでacitveクラスを切り替え
switchOuter.addEventListener("click", () => {
    switchOuter.classList.toggle("active");
    toggleSwitch.classList.toggle("active");
});

//45
//定義
const dataForm = document.getElementById("dataForm");
const addTextButton = document.getElementById("addTextButton");
const dataTableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
//event時に
dataForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const textContent = document.getElementById("textContent").value;
    // create table row
    const newRow = dataTableBody.insertRow();
    const textContentCell = newRow.insertCell(0);
    const actionCell = newRow.insertCell(1); // 削除ボタン用

    textContentCell.textContent = textContent;

    // create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", function() {
        dataTableBody.removeChild(newRow);

    // 行数が3未満なら追加ボタンを有効化
    if (dataTableBody.rows.length < 3) {
        addTextButton.disabled = false;
    }
    });

    actionCell.appendChild(deleteButton);

    dataForm.reset();

    // 行が3になったら追加ボタンを無効化
    if (dataTableBody.rows.length >= 3) {
        addTextButton.disabled = true;
    }
});

//6
const commentForm = document.getElementById("commentForm");
const addCommentButton = document.getElementById("addCommentButton");
const commentTableBody = document.getElementById("commentTable").getElementsByTagName("tbody")[0];

commentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const comment = document.getElementById("comment").value;

    // 行数が3以上なら先頭の行（古い行）を削除
    if (commentTableBody.rows.length >= 3) {
    commentTableBody.deleteRow(0);
    }

    // create table
    const newRow = commentTableBody.insertRow();
    const commentCell = newRow.insertCell(0);
    const actionCell = newRow.insertCell(1);

    commentCell.textContent = comment;

    // create delete button 
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", function () {
        commentTableBody.removeChild(newRow);
    });

    actionCell.appendChild(deleteButton);

    commentForm.reset();
});

//7
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
