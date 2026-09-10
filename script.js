// زر الانضمام إلى الدردشة
document.getElementById("joinBtn").addEventListener("click", function () {
    // ضع هنا رابط مجموعة واتساب الحقيقي
    const whatsappLink = "https://site--social-media--cr8g69srg7cy.code.run/";

    window.location.href = whatsappLink;
});

// أزرار التنزيل
function downloadWhatsApp() {
    // رابط تنزيل واتساب الرسمي
    window.open("https://www.whatsapp.com/download", "_blank");
}

document.getElementById("downloadTop").addEventListener("click", downloadWhatsApp);
document.getElementById("downloadLink").addEventListener("click", downloadWhatsApp);
document.getElementById("downloadFooter").addEventListener("click", downloadWhatsApp);

// منع الروابط الاجتماعية التجريبية من الانتقال إلى أعلى الصفحة
document.querySelectorAll(".social-links a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
    });
});