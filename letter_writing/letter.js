

function readFile(event){
    var reader=new FileReader();

    reader.onload=function(e){
        var preview=document.querySelector("#preview");
        preview.src=e.target.result;
    };
       reader.readAsDataURL(event.target.files[0]);
}

function inputFile(){
    var uploadFile=document.getElementById("uploadFile");
    uploadFile.click();
}

