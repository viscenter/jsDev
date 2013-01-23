function CheckIfNum(elem)
{
   leInput = elem.value;

   if(isNaN(leInput))
   {
      alert("Input is not a number.");
   }
   else
   {
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

function goHome()
{
   window.location.href = 'InitialPage.html';
}
