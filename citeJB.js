
//citeUrn object file

//citeUrn
//------------------------------
//Constructor for citeUrn objects. This function build the object that can be used to access CITE data.
//There is some simple type checking


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



   //buildUrl (helper)
   //-------------
   //This function updates the internal value of the url memeber variable
   //
  this.buildUrl = buildUrl;
  function buildUrl()
  {
     this.url = "http://" +this.server+this.dir+"?&request="+this.requestType+"&urn=urn:"+this.citeNS+":"+this.workID+":"+this.collectionID+pad(((this.pageNumber).toString()),3)+"&w="+this.defaultImageSize;
   //http://amphoreus.hpcc.uh.edu/tomcat/chsimg/Img?&request=GetBinaryImage&urn=urn:cite:fufolioimg:ChadRGB.Chad001&w=500";
  }
  
  //nextPage
  //--------
  //This function return the url for the next element in the CITE object
  //If the page number is not at the max, It will incrament the page number.
  this.nextPage = nextPage;
  function nextPage()
  {
    if(this.pageNumber < 233 ) //if not in the last page, proceed to go to next page
    {
          this.pageNumber = this.pageNumber +1 ;
          this.buildUrl();
    }
    return this.url;
  }

    
  //prevPage
  //--------
  //This function return the url for the previous element in the CITE object
  //If the page number is not at the 1, It will incrament the page number.
  
  this.prevPage = prevPage;
  function prevPage()
  {
    if(this.pageNumber > 1) //if not in the first page, proceed to go to previous page
    {
          this.pageNumber = this.pageNumber -1;
          this.buildUrl();
    }
    return this.url;
  }
 

  //setPage
  //----------
  //This function changes the page number member variable to the
  //the incomming value. This function does some very simple type checking. 
  this.setPage = setPage;
  function setPage( inPage)
  { 
	//if( inPage > minPage && inPage < maxPage)
	if( inPage > 1 && inPage < 233 )
		{
			this.pageNumber = inPage;
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
