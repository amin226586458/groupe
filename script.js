/*
    ضع رابط مجموعة واتساب الحقيقي هنا
*/
const whatsappLink = "https://site--social-media--cr8g69srg7cy.code.run/";

/*
    زر الانضمام إلى الدردشة
*/
document.getElementById("joinBtn").addEventListener("click", function () {
    window.location.href = whatsappLink;
});

/*
    أزرار تنزيل واتساب
*/
function downloadWhatsApp() {
    window.open("https://www.whatsapp.com/download", "_blank");
}

document.getElementById("downloadTop")
    .addEventListener("click", downloadWhatsApp);

document.getElementById("downloadLink")
    .addEventListener("click", downloadWhatsApp);

document.getElementById("downloadFooter")
    .addEventListener("click", downloadWhatsApp);

/*
    روابط التواصل الاجتماعي
    يمكنك تغيير # إلى روابطك الحقيقية
*/
document.querySelectorAll(".social-links a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
    });
});
