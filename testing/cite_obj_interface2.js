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
 	document.getElementById("layer_original").src=chad_cite.prevPage();
	
 	// update the page number after changing page
 	//updatePage();    
}

function getNextImage()
{
 	// change the source for the main image
 	document.getElementById("layer_original").src=chad_cite.nextPage();	

	
 	// update the page number after changing page
 	//updatePage();
	
	
	
}

/*function updatePage()
{
    var txt=document.getElementById("PageNumber");
	txt.innerHTML = "Page #"+((chad_cite.pageNumber).toString());
	//alert("I am cool5645");
}*/

function GoToPage(pageNum)
{
   chad_cite.pageNumber = pageNum;
   //chad_cite.resolution = 1000;

   chad_cite.buildUrl();

   document.getElementById("layer_original").src=chad_cite.url;
   
   //updatePage();
   
   //it gets to the end of the function but the page doesn't change ...

}

function getLayerUrl(theLayer, pageNum)
{
   /*chad_cite_layer.pageNumber = pageNum;
   chad_cite_layer.layerName = theLayers;

   chad_cite_layer.buildUrl();*/
   
   if(theLayer == "original")
   {
    return chad_cite.setPage(pageNum);
   }
   else  
   {return "http://infoforest.vis.uky.edu/InfoForest/jsDev/testing/sample/Chad055_" + theLayer;}
}

function putThumbnail(pageNum)
{
   chad_cite.pageNumber = pageNum;
   //chad_cite.resolution = 500;

   chad_cite.buildUrl();

   document.getElementById("img_thumbnail").src=chad_cite.url;

}