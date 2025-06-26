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
