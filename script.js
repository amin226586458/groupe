/*
    زر الانضمام إلى الدردشة

    عند الضغط عليه يتم تحويل الصفحة الحالية
    إلى صفحة بيضاء بدون الحاجة إلى ملف آخر.
*/

document.getElementById("joinBtn").addEventListener("click", function () {

    document.body.innerHTML = `
        <div class="subscribe-page">
            <h1>هل نسيت أن تشترك؟ 😑</h1>
            <p>هيا افعلها الآن</p>
            <p class="watching">أنا أراقبك 👀</p>
        </div>
    `;

    document.body.style.background = "#ffffff";
    document.body.style.margin = "0";

    const page = document.querySelector(".subscribe-page");

    page.style.width = "100%";
    page.style.minHeight = "100vh";
    page.style.display = "flex";
    page.style.flexDirection = "column";
    page.style.alignItems = "center";
    page.style.justifyContent = "center";
    page.style.textAlign = "center";
    page.style.fontFamily = 'Arial, "Noto Sans Arabic", sans-serif';
    page.style.direction = "rtl";
    page.style.background = "#ffffff";

    page.querySelector("h1").style.margin = "0 0 18px";
    page.querySelector("h1").style.color = "#333";
    page.querySelector("h1").style.fontSize = "25px";
    page.querySelector("h1").style.fontWeight = "600";

    page.querySelectorAll("p").forEach(function (p) {
        p.style.margin = "0";
        p.style.color = "#555";
        p.style.fontSize = "20px";
        p.style.lineHeight = "1.8";
    });

    page.querySelector(".watching").style.marginTop = "15px";
    page.querySelector(".watching").style.color = "#777";
    page.querySelector(".watching").style.fontSize = "17px";
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
*/

document.querySelectorAll(".social-links a").forEach(function (link) {

    link.addEventListener("click", function (event) {
        event.preventDefault();
    });

});
