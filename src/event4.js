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
