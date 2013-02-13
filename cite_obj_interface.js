//cite management
var chad_cite;


//var page = 0;

var LastGospelPage = 233;

var FirstMarkPage = 0;
var LastMarkPage = 141;

var FirstMatthewPage = 141;
var LastMatthewPage = 217;

var FirstLukePage = 217;
var LastLukePage = 233;




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
	
	//block for the zoom function 
	chad_cite.defaultImageSize = "3000";
	chad_cite.buildUrl();
	document.getElementById("mainDisplay").setAttribute("data-zoomsrc", chad_cite.url); 
	MojoZoom.init();
	chad_cite.defaultImageSize = "1000";
	
	
 	// update the page number after changing page
 	updatePage();     
}

function getNextImage()
{
 	// change the source for the main image
 	document.getElementById("mainDisplay").src=chad_cite.nextPage();
	
	//block for the zoom function 
	chad_cite.defaultImageSize = "3000";
	chad_cite.buildUrl();
	document.getElementById("mainDisplay").setAttribute("data-zoomsrc", chad_cite.url); 
	MojoZoom.init();
	chad_cite.defaultImageSize = "1000";

	
 	// update the page number after changing page
 	updatePage();
	
	
	
}

function updatePage()
{
    var txt=document.getElementById("PageNumber");
	txt.innerHTML = "Page #"+((chad_cite.pageNumber).toString());
	//alert("I am cool5645");
}

function GoToPage(pageNum)
{
   chad_cite.pageNumber = pageNum;
   chad_cite.buildUrl();
   document.getElementById("mainDisplay").src=chad_cite.url;
   
   	//block for the zoom function 
	chad_cite.defaultImageSize = "3000";
	chad_cite.buildUrl();
	document.getElementById("mainDisplay").setAttribute("data-zoomsrc", chad_cite.url); 
	MojoZoom.init();
	chad_cite.defaultImageSize = "1000";

   
  updatePage();
}




function whichPage()
{
   Start();
   page = document.getElementById("myPage");
   page = Number(page.value);

   LeBook = document.getElementById("Book");
   LeBook = LeBook.value;
    
    switch(LeBook)
    {
      case "Luke":
	page = page+217;
	break;
      case "Mark":
	page = page;
	break;
      case "Matthew":
	page = page+140;
	break;
    }

   GoToPage(page);
          
}

function CheckIfNum()
{
   var good = false;
   var LePage = document.getElementById("myPage");
   var NumPage = Number(LePage.value);
   
   var LeBook = document.getElementById("Book");

   if(LePage.value === "") //check if page text box has any value. if it doesn't, tell the user through an alert box.
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
	       else
		{
		   good = true;
		}
	   }
       }
   }

  if(good)
  {
    //make sure page number doesn't exceed bounds of book

    switch(LeBook.value)
    {
        case "Mark":
            exceedsCheck(NumPage,FirstMarkPage,LastMarkPage);
            break;
        case "Matthew":
            exceedsCheck(NumPage,FirstMatthewPage,LastMatthewPage);
            break;
        case "Luke":
            exceedsCheck(NumPage,FirstLukePage,LastLukePage)
            break;
    }
      
   }

}

function exceedsCheck(PageNum, FirstPage, LastPage)
{
    if(PageNum+FirstPage > LastPage)
    {
	alert("Page number exceeds number of pages of the selected book.");
    }
    else
    {
	whichPage();
    }
}


