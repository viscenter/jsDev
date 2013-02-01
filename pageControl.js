var FirstPartOFurl = "http://amphoreus.hpcc.uh.edu/tomcat/chsimg/Img?&request=GetBinaryImage&urn=urn:cite:fufolioimg:ChadRGB.Chad";
var LastPartOfurl = "&w=1000";
var page = 0;

var LastGospelPage = 233;

var FirstMarkPage = 0;
var LastMarkPage = 141;

var FirstMatthewPage = 141;
var LastMatthewPage = 217;

var FirstLukePage = 217;
var LastLukePage = 233;


function whichPage()
{
   Start();
   page = document.getElementById("myPage");
   page = Number(page.value);

   LeBook = document.getElementById("Book");
   LeBook = LeBook.value;

   if(LeBook === "Luke")
   { 
      page = page+FirstLukePage; //assuming that Luke starts at page 218
   }
   else 
   {  if(LeBook === "Mark")
      {
         page = page+FirstMarkPage; //assuming that Mark starts at page 1
      }
      else
      {
         if(LeBook === "Matthew")
         { 
             page = page+FirstMatthewPage; //assuming that Matthew starts at page 142
         }  
      }
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
		   if(LeBook.value === "Mark")
		   {
			if(NumPage+FirstMarkPage > LastMarkPage)
			{
			   alert("Page number exceeds number of pages of the selected book.");
                     }
                     else
			{
	                 whichPage();
			}
		   }
		   if(LeBook.value === "Matthew")
		   {  	
		       if(NumPage+FirstMatthewPage > LastMatthewPage)
			{
			   alert("Page number exceeds number of pages of the selected book.");
                     }
                     else
			{
	                 whichPage();
			}
		   }
		   if(LeBook.value === "Luke")
		   {
			if(NumPage+FirstLukePage > LastLukePage)
			{
			   alert("Page number exceeds number of pages of the selected book.");
                     }
                     else
			{
	                 whichPage();
			}
		   }
   }

}

function GoToPage(pageNum)
{
   page = pageNum;
   var strpage = page.toString();
   document.getElementById("mainDisplay").src=(FirstPartOFurl +  pad(strpage,3) + LastPartOfurl);
   displayPage(page);
}

function getPrev()
{
	page = page- 1;
	var strpage = page.toString();
	document.getElementById("mainDisplay").src=(FirstPartOFurl +  pad(strpage,3) + LastPartOfurl);
       displayPage(page);
}

function getNextImage()
{
	page = page+ 1;
	var strpage = page.toString();
	document.getElementById("mainDisplay").src=(FirstPartOFurl + pad(strpage,3) + LastPartOfurl);
       displayPage(page);
}

function displayPage(page)
{
       var txt=document.getElementById("PageNumber");
	txt.innerHTML = "Page #"+page;
}

function pad(str,lenght)
{
	var hold = str;
	while((hold.length) < 3)
	{
		hold = "0" + hold;
	}
	return hold;
}
