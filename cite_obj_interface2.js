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

}

function getNextImage()
{

 	// change the source for the main image
 	document.getElementById("mainDisplay").src=chad_cite.nextPage();	

}


function GoToPage(pageNum)
{

	document.getElementById("mainDisplay").src = chad_cite.setPage(pageNum);

 //  chad_cite.pageNumber = pageNum;
 //  chad_cite.buildUrl();

  // document.getElementById("mainDisplay").src=chad_cite.url;

}

function setUpThumbNail()
{
 
  ThumbNail_cite = new citeUrn("/amphoreus.hpcc.uh.edu", //set server
  "/tomcat/chsimg/Img",                               //set dir
  "cite",                                             // set CITE namespace
  "fufolioimg",                                       //set CITE work ID
  "ChadRGB.Chad" ,                                    //set collection ID
  "70",                                             //set default Image size
   1,                                                 //set start page
   "updateTargetID" );                                //set the update target ID
}

function getThumNail(page)
{
	//document.getElementById("img_thumbnail").scr  = ThumbNail_cite.setPage(page);
	return  ThumbNail_cite.setPage(page);
}

function browserCatch()
{
	var i = 1
	var wast;
	while( i < 233)
	{
		wast = ThumbNail_cite.setPage(i);
		i = i + 1;
	}

}


