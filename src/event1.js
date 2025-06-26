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
