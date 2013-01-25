var FirstPartOFurl = "http://amphoreus.hpcc.uh.edu/tomcat/chsimg/Img?&request=GetBinaryImage&urn=urn:cite:fufolioimg:ChadRGB.Chad";
var LastPartOfurl = "&w=500";
var page = 0;

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
