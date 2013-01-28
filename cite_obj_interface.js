//cite management
var chad_cite;

function setUpObj()
{
  var txt=document.getElementById("buildD");
  chad_cite = new citeUrn("/amphoreus.hpcc.uh.edu", //set server
  "/tomcat/chsimg/Img",                               //set dir
  "cite",                                             // set CITE namespace
  "fufolioimg",                                       //set CITE work ID
  "ChadRGB.Chad" ,                                    //set collection ID
  "1000",                                             //set default Image size
   1,                                                 //set start page
   "updateTargetID" );                                //set the update target ID
   
}


function getPrev()
{
 	// change the source for the main image
 	document.getElementById("mainDisplay").src=chad_cite.prevPage();
 	// update the page number after changing page
 	updatePage();     
}

function getNextImage()
{
 	// change the source for the main image
 	document.getElementById("mainDisplay").src=chad_cite.nextPage();
 	// update the page number after changing page
 	updatePage();          
}

function updatePage()
{
    var txt=document.getElementById("PageNumber");
	txt.innerHTML = "Page #"+((chad_cite.pageNumber).toString());	
}

function GoToPage(pageNum)
{
   chad_cite.pageNumber = pageNum;
   chad_cite.buildUrl();
   document.getElementById("mainDisplay").src=chad_cite.url;
   updataPage();
}




function whichPage()
{
   Start();
   page = document.getElementById("myPage");
   page = Number(page.value);

   LeBook = document.getElementById("Book");
   LeBook = LeBook.value;

   if(LeBook === "Luke")
   { 
      page = page+217; //assuming that Luke starts at page 218
   }
   else 
   {  if(LeBook === "Mark")
      {
         page = page; //assuming that Mark starts at page 1
      }
      else
      {
         if(LeBook === "Matthew")
         { 
             page = page+140; //assuming that Matthew starts at page 141
         }  
      }
    }

   GoToPage(page);
          
}



function CheckIfNum()
{
   var LePage = document.getElementById("myPage");
   var NumPage = LePage.value;
   
   var LeBook = document.getElementById("Book");

   if(NumPage === "") //check if page text box has any value. if it doesn't, tell the user through an alert box.
   {
	alert("Please write the number of the page you want to view.");
   }
   else //there is a value in the text box
   {
   	if(isNaN(NumPage)) //check if page number is NOT a number. if it isn't, alert the user. 
   	{
          alert("Input is not a number.");
   	}
   	else //if page is a number, make sure it's a positive number
   	{    
          if(NumPage <= 0) //is the page number is negative or 0, alert the user
	   {
		alert("You can't go to a negative or zero page number.");
	   }
	   else //once all is good with the page number, check to see if a book was selected
	   {
	   	if(LeBook.value === "") //if book was not selected, alert the user.
	   	{
		   alert("Please select the book you want to view.");
	       }
	       else //if book was indeed selected, continue with calculating page number with page and book info and to display.
	       {
	          whichPage();
   	       }
	   }
       }
   }

}