//I layers
var LegacyURL = "";
var ThreedURL = "";
var SpectralURL = "";

//ST layers
var TransparentURL = "";
var HighlightURL = "";
var TranslateURL = "";

var LastPartOfurl = "&w=500";

function applyIlayer(elem)
{
   Ilayer = elem.value;
   var txt=document.getElementById("Ilayer");

   if(Ilayer === "Legacy")
   { 
      txt.innerHTML = "<img align='middle' src='Home.png' alt='Computerman' width='500' height='750'>"; 
   }
   else 
   {  if(Ilayer === "3D")
      {
         //source = (ThreedURL +  pad(strpage,3) + LastPartOfurl);
	  //string = "<img align='middle' src='" + source + "' alt='Computerman' width='500' height='750'>";
	  //txt.innerHTML = string;

         txt.innerHTML = "<img align='middle' src='apage.jpg' alt='Computerman' width='500' height='750'>"; 
      }
      else
      {
         if(Ilayer === "Spectral")
         { 
             txt.innerHTML = "<img align='middle' src='Home.png' alt='Computerman' width='500' height='750'>";
         }
         else
         {
             if(Ilayer === "nothing")
             {
                txt.innerHTML = "";
             }
         }  
      }
    }
          
}

function ST_translate(elem)
{
   //alert("In function");

   var txt=document.getElementById("Translate");

   if (elem.checked) //add layer 
   { 
     txt.innerHTML = "<img align='middle' src='Home.png' alt='Computerman' width='500' height='750'>";
   }
   else //remove layer
   { 
     txt.innerHTML = "";
   }
}

function ST_transcript(elem)
{
   //alert("It worked! You clicked on layer 2!");

   var txt=document.getElementById("Transcript")

   if (elem.checked) //add layer 
   {
     txt.innerHTML = "<img align='middle' src='apage.jpg' alt='Computerman' width='500' height='750'>";
   }
   else //remove layer
   {
     txt.innerHTML = "";
   }

}

function ST_highlight(elem)
{
   //alert("It worked! You clicked on layer 2!");

   var txt=document.getElementById("Highlights")

   if (elem.checked) //add layer 
   {
     txt.innerHTML = "<img align='middle' src='apage.jpg' alt='Computerman' width='500' height='750'>";
   }
   else //remove layer
   {
     txt.innerHTML = "";
   }

}
