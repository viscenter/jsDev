
//citeUrn object file

//Constructor for citeUrn objects 
function citeUrn(server,dir, citeNS, workID, collectionID ,defaultImageSize, pageNumber, updateTargetID,maxPage)
{


 //crude type checking
  if (typeof pageNumber != 'number') alert("wrong type for pageNumber"); 
  if (typeof server != 'string') alert("wrong type for server");
  if (typeof dir != 'string') alert("wrong type for dir"); 
  if (typeof citeNS != 'string') alert("wrong type for citeNS"); 
  if (typeof workID != 'string') alert("wrong type for WorkID"); 
  if (typeof collectionID != 'string') alert("wrong type for collectionID");
  if (typeof defaultImageSize != 'string') alert("wrong type for defaultImageSize");
  if (typeof updateTargetID != 'string') alert("wrong type for updateTargetID");
  if (typeof maxPage != 'number') alert("wrong type for maxPage");

  //fill in the attributes for the object
  this.server = server;
  this.dir = dir;
  this.citeNS = citeNS;
  this.workID = workID;
  this.collectionID = collectionID;
  this.defaultImageSize = defaultImageSize;
  this.pageNumber = pageNumber;
  this.updateTargetID = updateTargetID;
  this.maxPage = maxPage;



  this.buildUrl = buildUrl;
  function buildUrl()
  {
     this.url = "http://" +this.server+this.dir+"?&request="+this.requestType+"&urn=urn:"+this.citeNS+":"+this.workID+":"+this.collectionID+pad(((this.pageNumber).toString()),3)+"&w="+defaultImageSize;
   //http://amphoreus.hpcc.uh.edu/tomcat/chsimg/Img?&request=GetBinaryImage&urn=urn:cite:fufolioimg:ChadRGB.Chad001&w=500";
  }
  
  
  this.nextPage = nextPage;
  function nextPage()
  {
    if(this.pageNumber < this.maxPage) //if not in the last page, proceed to go to next page
    {
          this.pageNumber = this.pageNumber +1 ;
          this.buildUrl();
    }
    else
    {
    	alert("In backend interface. the max page has been reached");
	}
    return this.url;
  }

  this.prevPage = prevPage;
  function prevPage()
  {
    if(this.pageNumber != 1) //if not in the first page, proceed to go to previous page
    {
          this.pageNumber = this.pageNumber -1;
          this.buildUrl();
    }
    return this.url;
  }

  
  //generate the rest of the attributes
  this.isCreated =true;
  this.requestType = "GetBinaryImage";
  this.buildUrl();



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
