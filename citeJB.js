
//citeUrn object file

//Constructor for citeUrn objects 
function citeUrn(server,dir, citeNS, workID, collectionID ,defaultImageSize, pageNumber, updateTargetID)
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

  //fill in the attributes for the object
  this.server = server;
  this.dir = dir;
  this.citeNS = citeNS;
  this.workID = workID;
  this.collectionID = collectionID;
  this.defaultImageSize = defaultImageSize;
  this.pageNumber = pageNumber;
  this.updateTargetID = updateTargetID;




  this.buildUrl = buildUrl;
  function buildUrl()
  {
     this.url = "http://" +this.server+this.dir+"?&request="+this.requestType+"&urn=urn:"+this.citeNS+":"+this.workID+":"+this.collectionID+pad(((this.pageNumber).toString()),3)+"&w="+defaultImageSize;
   //http://amphoreus.hpcc.uh.edu/tomcat/chsimg/Img?&request=GetBinaryImage&urn=urn:cite:fufolioimg:ChadRGB.Chad001&w=500";
  }
  
  
  this.nextPage = nextPage;
  function nextPage()
  {
    this.pageNumber = this.pageNumber +1 ;
    this.buildUrl();
    return this.url;
  }

  this.prevPage = prevPage;
  function prevPage()
  {
    if(this.pageNumber = 1)
    {
      //alert("This is the first page.")
    }
    else{
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
