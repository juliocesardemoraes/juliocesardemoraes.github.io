$(function () {
    $('#myButton').floatingWhatsApp({
        phone: '+55359244-0033',
        popupMessage: 'Contato Pelo Whatsapp',
        message: "Mande uma mensagem para mim",
        showPopup: true,
        showOnIE: false,
        headerTitle: 'Bem vindo ao meu portfolio!',
        headerColor: 'var(--main-green)',
        backgroundColor: 'var(--main-green)',
        buttonImage: '<img src="whatsapp.svg" />'
    });
});

$(function () {
    $('#myButtonEn').floatingWhatsApp({
        phone: '+55359244-0033',
        popupMessage: 'Contact By Whatsapp',
        message: "Send an message to me",
        showPopup: true,
        showOnIE: false,
        headerTitle: 'Welcome to my Portfolio!',
        headerColor: 'var(--main-green)',
        backgroundColor: 'var(--main-green)',
        buttonImage: '<img src="whatsapp.svg" />'
    });
});



let ptLang = document.getElementById("ptLang");
let enLang = document.getElementById("enLang");

function trocarLingua(lingua){


    if(lingua=="ingles")
    {
        if(enLang.hasAttribute("hidden")){
            enLang.removeAttribute("hidden")
            ptLang.setAttribute("hidden",true);
        }
    }else if(lingua=="pt"){
        if(ptLang.hasAttribute("hidden")){
            ptLang.removeAttribute("hidden");
            enLang.setAttribute("hidden",true); 
        }
    }
}
