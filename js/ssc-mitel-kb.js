// initialize slideshow variables
var slideIndex = 1;
var product = "mivo250";


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
    product = "mivo250";
    slideIndex = 1;
    
    showDivs(slideIndex, product);
    
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
    product = "mivoBiz";
    slideIndex = 1;
    
    showDivs(slideIndex, product);
    
    e.preventDefault();
};

// MiVoice Call Recording Link Event Handler
document.getElementById("mivo-CR-link").onclick = function(e) {
    checkLinks();
    hideAllContent();
    this.style.fontWeight = "700";
    if ($("#mivo-call-recording-content").hasClass("hide")){
           $("#mivo-call-recording-content").removeClass("hide");
           }
    product = "mivoCR";
    slideIndex = 1;
    
    showDivs(slideIndex, product);
    
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


// Slideshow logic, with edits added to accomodate respective slideshows for each product category
// Original Slideshow code commented out below






showDivs(slideIndex, product);

function plusDivs(n) {
    showDivs(slideIndex += n, product);
}

function showDivs(n, p) {
    var i;
    var x = document.getElementsByClassName("mySlides"); // grab ALL slide containers

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; // hide ALL slide containers 
    }


    x = document.getElementsByClassName(p); // grab only target category slide containers
    
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    
    for (i = 0; i < x.length; i++) { // hide all target category containers
        x[i].style.display = "none";  
    }

    x[slideIndex-1].style.display = "block"; // reveal sole target category slide container as determined by slide #

}











// original slideshow code//

//<script>
//var slideIndex = 1;
//showDivs(slideIndex);
//
//function plusDivs(n) {
//  showDivs(slideIndex += n);
//}
//
//function showDivs(n) {
//  var i;
//  var x = document.getElementsByClassName("mySlides");
//  if (n > x.length) {slideIndex = 1}    
//  if (n < 1) {slideIndex = x.length}
//  for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//  }
//  x[slideIndex-1].style.display = "block";  
//}
//</script>




