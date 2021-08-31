//functions to open and close the contact form 
function openForm() {
    document.getElementById("myForm").style.display ="block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none"; 
}




//function displays the first image in the slideshow when the page loads
var slideIndex = 1; 
showSlides(slideIndex); 

//function changes the slide down when the left or right
//arrows are clicked 
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides (slideIndex = n); 
}

function showSlides (n) {
    var slides =document.getElementsByClassName("mySlides"); 
    //takes all elements w/ class name "mySlides" and stores them
    //in variable array 'slides'
 //-----------------------------------
    //takes all elements w/ class name 'dot' and stores them
    //in the variable array "dots"
    var dots = document.getElementsByClassName("dot"); 
    if (n > slides.length) {slideIndex = 1}; 
    //if n is greater than the lenght of the array 'slides'
    //the index is set to one
    if (n < 1) {slideIndex = slides.length}; 
    //if n is less than 1, the slideIndex is set to the length
    //of the array slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";//the for loop takes each item
        //in the array slides and sets the display to none 
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", ""); //this for loop
        //takes each item in the arrays dots and removes "active" which removes the active
        //styling 
        slides[slideIndex - 1].style.display ="block";//this displays the image in the slideshow
        dots[slideIndex - 1].className +=" active";
        //this adds active styling to the dot associated with the image
    }
}