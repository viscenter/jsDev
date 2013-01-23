function TheFunction()
{
   leInput = document.getElementById("pageNum");

   if(isNaN(leInput.value))
   {
      alert("Input is not a number.");
   }
   else
   {
      window.location.href = 'test2.html';
   }

}

function ShowPage()
{
   lePage = document.getElementById("pageNum");
   alert("The page is");
   alert(lePage);
}