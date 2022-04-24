

function readFile(event){
    var reader=new FileReader();
    var container = document.getElementById("img_container");

    reader.onload=function(e){
        var preview=document.querySelector("#preview");
        preview.src=e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    container.style.border = "0px solid rgb(180, 180, 180)";
}

function inputFile(){
    var uploadFile=document.getElementById("uploadFile");
    uploadFile.click();
}

function writing() {
    if(document.getElementById("content").value == "" || document.getElementById("nickname").value == "") {
        document.getElementById("submit_btn").disabled = true;
    } else {
        document.getElementById("submit_btn").disabled = false;
    }
}

function submit() {
    window.location.href = '../submit_letter/submit.html'
}