document.getElementById("next_btn").disabled = true;
const icon = document.getElementsByTagName('button');

// 아이콘 선택하면 다음으로 버튼 활성화
function select_icon() {
    document.getElementById("next_btn").disabled = false;
    // 해당 컨테이너 색으로 구분
    changeBorder();
}

function changeBorder() {
    icon.style.color = 'lightgray';
}

// 다음으로 버튼 이벤트 처리 
function to_letter() {
    window.location.href = 'letter.html'
}