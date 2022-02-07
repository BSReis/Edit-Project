

let openqrcode = document.getElementById("qrCodeClick");
let qrcodeContant = document.getElementById("qrcodeSlideId");
let filterdark = document.getElementById("opacityDark")
let closeqrcode = document.getElementById("qrCodeClickOff")

openqrcode.addEventListener("click", () => {
    qrcodeContant.classList.add("slideUpQrcodeON");
    filterdark.classList.add("filterDark")

});

closeqrcode.addEventListener("click", () => {
    qrcodeContant.classList.remove("slideUpQrcodeON");
    filterdark.classList.remove("filterDark")
});
