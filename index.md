---
layout: index
---
<!--
<div class="head">
    <a href="/">
        <div class="logo"></div>
    </a>
    <a href="/getstarted"><div class="Get_started">Get Started</div></a>
    <div class="login">Login</div>
</div>

<div class="head2">
    <a href="/"><img class="logo2" src="/assets/css/images/logo2.svg"></a>
    <a href="/getstarted"><div class="Getting_started">Getting started</div></a>
    <h1>QR Marketing: <br>Connecting things with people</h1>
    <h2>There is a QR, NFC, and RFID Tag for every thing</h2>
    <a href="/getstarted"><div class="Start_for_Free">Start for Free</div></a>
    <img class="v0" src="/pictures/Vector0.png">
    <img class="v1" src="/pictures/Vector1.png">
    <img class="v2" src="/pictures/Vector2.png">
    <img class="v3" src="/pictures/Vector3.png">
    <img class="v4" src="/pictures/Vector4.png">
    <img class="v5" src="/pictures/Vector5.png">
    <img class="v6" src="/pictures/Vector6.png">
    <div class="c1"></div>
    <div class="c2"></div>
    <div class="c3"></div>
</div>
-->
<script src="https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js"></script>
<script>
    const client = contentful.createClient({
        space: "z21jj5gmza45",
        accessToken: "4_f_aSAAV3MTyRtysUVBcVFHGBIATYxUiwyVTdO311c"
    });
    var language = "en-US";
    function getlanguage() {
        var acceptlanguage = 'en-US de-DE';
        navigator.languages
        for (var i in navigator.languages) {
            if (acceptlanguage.indexOf(navigator.languages[i]) >= 0) {
                language = navigator.languages[i];
                break;
            }
        }
    }
    getlanguage();
    function button_rander(button) {
        return `<a href="${button.fields.url}"><div class="btn_${button.fields.type} btn_${button.fields.backgroundColor} ${button.fields.name.split(" ").join("_")}">${button.fields.text}</div></a>`;
    }
    function menu_rander(menu) {
        var links = [];
        for (let link of menu.fields.items) {
            links.push('<a href="' + link.fields.url + '"><div>' + link.fields.text + '</div></a>');
        }
        return `<div class="${menu.fields.name.split(" ").join("_")}">${links.join("")}</div>`;
    }
    client.getEntries({ 'sys.id': '3NRN3JqSUwJ7Y6fH2YRUm7', include: 10, locale: language }).then(function (Entries) {
        console.log(Entries);
        if (Entries.items.length > 0) {
            var entry = Entries.items[0];
            document.title = entry.fields.title;
            for (var component of entry.fields.components) {
                if (component.fields.name == "Page top blue") {
                    var template = `<div class="${component.fields.name.split(" ").join("_")}">
                        <div class="menubar"><div class="logo2"></div>${menu_rander(component.fields.menu)}${button_rander(component.fields.buttonBookADemo)}</div>
                        <div class="pagetop_content">
                            <div class="pagetop_text">
                            <h1>${component.fields.h1}</h1>
                            <h2>${component.fields.h2}</h2>
                            </div>
                            <div class="pagetop_btn">
                            ${button_rander(component.fields.buttonHowItWorks)}
                            ${button_rander(component.fields.buttonScheduleADemo)}
                            </div>
                        </div>
                        <img class="pagetop_img_1" src="/assets/css/images/pagetop_img_1.png">
                        <img class="pagetop_img_2" src="/assets/css/images/pagetop_img_2.svg">
                        <img class="pagetop_img_3" src="/assets/css/images/pagetop_img_3.svg">
                        </div>
                    `;
                    $(".main").prepend(template);
                    $(".menubar").click(function () {
                        if ($(".Top_menu").is(":visible")) {
                            $(".Top_menu").hide();
                            $(".Book_a_Demo").hide();
                            $(".menubar").removeClass("onopen");
                        }else{
                            $(".Top_menu").show();
                            $(".Book_a_Demo").show();
                            $(".menubar").addClass("onopen");
                        }
                    });

                }
            }
        }
    })
</script>
<div class="new">NEW</div>
<h1>Window Shop is here.</h1>
<div class="kv1">
    <div class="kv01sdiv">
        <img class="kv01s" src="/pictures/KV01s.png">
    </div>
    <img class="phone" src="/pictures/iphones.png?v=01">
</div>
<h2>Nothing can stop your customers from buying.</h2>
<div class="kv2"><img src="/pictures/KV02s.jpg"></div>
<p class="kv2text">Let your customers instantly buy the products they see in your window at the scan of a QR
            sticker.</p>
<div class="bg1">
    <div class="kv3">
        <div class="kvtext">
            <div class="num">1</div>
            <div class="kvtext1">Add sticker to your window.</div>
            <div class="kvtext2">The QR sticker links your products to your online Window Shop page.</div>
        </div>
        <img src="/pictures/KV03s.jpg">
    </div>
    <div class="kv4">
        <div class="kvtext">
            <div class="num">2</div>
            <div class="kvtext1">Scan barcodes of your products.</div>
            <div class="kvtext2">Update your online Window Shop products by scanning the barcodes of your
                products
                with your mobile device or tablet. No app required.</div>
            </div>
        <img src="/pictures/KV04s.png">
    </div>
    <div class="kv5">
        <div class="kvtext">
            <div class="num">3</div>
            <div class="kvtext1">Sell!</div>
            <div class="kvtext2">Your Window Shop is directly integrated with your E-commerce Shop.</div>
        </div>
        <img src="/pictures/iphones.png?v=01">
    </div>
</div>
<div class="kv6">
    <img src="/pictures/earth.png">
    <div class="kv6text1">Keep your shops <br>synced <br>- worldwide</div>
    <div class="kv6list">
        <div>My window shops</div>
        <div>London</div>
        <div>Paris</div>
        <div>Berlin</div>
        <div>New York</div>
        <div>Shanghai</div>
    </div>
</div>
<div class="foot">
    <div class="copy">Copyright © 2022 QR Marketing GmbH. All rights reserved.</div><a href="/imprint" class="Imprint">Imprint</a><a href="https://all4labels.com/de/datenschutzerklaerung/"
                class="Privacy">Privacy Policy</a>
</div>