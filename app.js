// set up text to print, each item in array is new line
var aText = new Array(
    "Hi, I'm Rohan", 
    "I am a Data science student at the University of California: San Diego",
    "Welcome to my first website!",
    "Below is some of my work."
    );
    var iSpeed = 50; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row

    var blinkSpeed = 0;
    setInterval(function() {
        TimeRanges.innerHTML = blinkSpeed++;}, 1000);
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("welcometext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 2000);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }

    function scrollDown() {
        window.scroll({
            top: 1000,
            behavior: 'smooth'
          });
    }
    
    
    typewriter();
    setTimeout(scrollDown,16000)
    