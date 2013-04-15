
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
   "updateTargetID",								  //set the update target ID
   	233 );                                			  //set MaxPage
}


function getPrev()
{
 	// change the source for the main image
 	document.getElementById("layer_original").src=chad_cite.prevPage();

}

function getNextImage()
{

 	// change the source for the main image
 	document.getElementById("layer_original").src=chad_cite.nextPage();	

}


function GoToPage(pageNum)
{

	document.getElementById("layer_original").src = chad_cite.setPage(pageNum);

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
   "updateTargetID",
    233 );                                //set the update target ID
}

function getThumNail(page)
{
	//document.getElementById("img_thumbnail").scr  = ThumbNail_cite.setPage(page);
	return  ThumbNail_cite.setPage(page);
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



