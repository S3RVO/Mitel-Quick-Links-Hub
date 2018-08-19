


//***************Variable Declarations**************//
var links = document.getElementsByTagName('a');





//***************Event Handlers**************//

// MiVoice Office 250 Link Event Handler
document.getElementById("mivo250-link").onclick = function(e) {
    checkLinks();
    hideAllContent();
    this.style.fontWeight = "700";
    if ($("#mivo250-content").hasClass("hide")){
            $("#mivo250-content").removeClass("hide");
           }
    e.preventDefault();
};

// MiVoice Business Link Event Handler
document.getElementById("mivoBiz-link").onclick = function(e) {
    checkLinks();
    hideAllContent();
    this.style.fontWeight = "700";
    if ($("#mivoBiz-content").hasClass("hide")){
            $("#mivoBiz-content").removeClass("hide");
           }
    e.preventDefault();
};





//***************Functions**************//

// normalize all link font weights
function checkLinks(){
    for (var i = 0; i < links.length; i++){
        if (links[i].style.fontWeight == "700"){
           links[i].style.fontWeight = "normal"; 
        }
    }

}

// Hide content from all main divs
function hideAllContent(){
    var allContentDivs = document.getElementsByClassName("main");
    
    for (var i = 0; i < allContentDivs.length; i++){
        if (!$(allContentDivs[i]).hasClass("hide")){
           $(allContentDivs[i]).addClass("hide"); 
        }
    }
}




