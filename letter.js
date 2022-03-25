const uploadBtn=document.querySelector('.imageUpload');
const realInput=document.querySelector('#realInput');

uploadBtn.addEventListener('click',()=>{
    realInput.click();
})

function readFile(event){
    var reader=new FileReader();

    reader.onload=function(event){
        var img=document.getElementById("imagePreview");
        img.src=event.target.result;
        
    };

    reader.readAsDataURL(this.files[0]);

    
}

const inputImage = document.getElementById("realInput")
inputImage.addEventListener("change", e => {
    readImage(e.target);
})