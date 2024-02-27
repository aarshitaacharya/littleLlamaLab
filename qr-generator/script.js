const content = document.querySelector(".container input");

const imageBox = document.getElementById("imgBox");
const image = document.getElementById("qrImage");

let api_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function qrGenerator(){

    if(content.value.length!=0){
        image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ content.value;
    imageBox.classList.add("show-img");
    }else{
        imageBox.classList.remove('show-img');
        content.classList.add("error");
        setTimeout(()=>{
            content.classList.remove("error");
        },1000);
        
    }
    
}
