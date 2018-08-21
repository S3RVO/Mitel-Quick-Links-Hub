


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



// MiVo 250 slideshow logic
var slideIndex = 1;
showDivs_mivo250(slideIndex);

function plusDivs_mivo250(n) {
  showDivs_mivo250(slideIndex += n);
}

function showDivs_mivo250(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-mivo250");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// MiVo Business slideshow logic
var slideIndex = 1;
showDivs_mivoBiz(slideIndex);

function plusDivs_mivoBiz(n) {
  showDivs_mivoBiz(slideIndex += n);
}

function showDivs_mivoBiz(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-mivoBiz");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}




