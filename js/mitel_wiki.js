

// declare some variables
var mivoice250Content = "<div class='imgContent'><img src='../img/office250FrontAndBack.jpg'></div><div class='textContent'>Max Users: 250 (with optional expansion)<br>Digital Desktop Module (DDM) Slot Bays: 4<br>Supports up to 75 users without PEC-1<br>Supports 175 users with PEC-1<br>Supports 250 Users with PS-1</div>";





//var mivoiceBusinessContent = "<div class='imgContent'><img src='../img/mivoiceBizCXiFront.jpg'></div>";

var mivoiceBusinessContent = '<!-- Slideshow container --><div class="slideshow-container"><!-- Full-width images with number and caption text --><div class="mySlides fade"><div class="numbertext">1 / 3</div><img src="../img/mivoiceBizCXiFront.jpg" style="width:100%"><div class="text">CXi</div></div><div class="mySlides fade"><div class="numbertext">2 / 3</div><img src="img2.jpg" style="width:100%"><div class="text">Caption Two</div></div><div class="mySlides fade"><div class="numbertext">3 / 3</div><img src="img3.jpg" style="width:100%"><div class="text">Caption Three</div></div><!-- Next and previous buttons --><a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a></div><br><!-- The dots/circles --><div style="text-align:center"><span class="dot" onclick="currentSlide(1)"></span> <span class="dot" onclick="currentSlide(2)"></span><span class="dot" onclick="currentSlide(3)"></span></div>';

var content = document.getElementById('content-wrap');
var links = document.getElementsByTagName('a');

// clear content area
content.innerHTML = "";


//***************Functions**************//

// MiVoice Office 250 Content
document.getElementById("mivoice250").onclick = function(e) {
    checkLinks();
    this.style.fontWeight = 700;
    if (content.innerHTML != mivoice250Content){
            content.innerHTML = mivoice250Content;    
        } 
    e.preventDefault();
};

// MiVoice Business Content 
document.getElementById("mivoiceBusiness").onclick = function(e) {
    checkLinks();
    this.style.fontWeight = 700;
    if (content.innerHTML != mivoiceBusinessContent){
            content.innerHTML = mivoiceBusinessContent;    
        } 
    e.preventDefault();
};


// MISC FUNCTIONS

function checkLinks(){
    for (var i = 0; i < links.length; i++){
        if (links[i].style.fontWeight == "700"){
           links[i].style.fontWeight = "normal"; 
        }
    }

}





