const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrContainer= document.querySelector('.qr-body');


generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();//does not refresh everytime you clicked on the button
    isEmptyInput();
   

});

sizes.addEventListener('change',(e)=>{
    sizes=e.target.value;
    isEmptyInput();
    generateQRCode();
})

function isEmptyInput(){
    if(qrText.value.length >0){
        generateQRCode();
    }
    else{
        alert("Please, enter text or URL");
    }
}


function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:sizes.value,
        width:sizes.value,
        colorLight:'#fff',
        colorDark:'#000',

    });
 }