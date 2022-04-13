// 햄버거 메뉴 
// function hamburger(x) {
//     x.classList.toggle("change");
// }

// function myFunction() {
//     var x = document.getElementById("topnav-right");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }

function search() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// 버튼 여러 개 추가
const print_buttons = function(id, num) {
    var str_html = "";
    for(var i = 0; i < num; i++) {
        var html_btn = '<input type="button" class="btn" id="' + '">'
        html_btn = html_btn.replace('{}', i);
        str_html = str_html + html_btn + '\n';
    }
    document.getElementById("").html(str_html);
}

// 아이콘 클릭하면 해당 메세지 보임 
function click_letter() {
    window.location.href = '../after_letter/after_letter.html'
}