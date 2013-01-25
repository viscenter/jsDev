function Start()
{
   var txt=document.getElementById("Buttons");

   string = "<div id='TheButtons'>"

   string = string + "\n" + "<a href='http://infoforest.vis.uky.edu/InfoForest/java_scrip_test/3djs/3d.html'> 3d</a>";
   string = string + "\n" + "<input type='button' onclick='goHome()' value='Home Page' />";
   string = string + "\n" + "<button> Click to fade in/out layers</button>";
   string = string + "\n" + "<input type='button' onclick='getPrev()' value='Previous Image' />";
   string = string + "\n" + "<input type='button' onclick='getNextImage()' value='Next Image' />";

   string = string + "\n\n" + "<select id='I_layer' onchange='applyIlayer(this)'>";
   string = string + "\n" + "<option value='' disabled selected style='display:none;'>I layers</option>";
   string = string + "\n" + "<option value='Legacy'>Legacy</option>";
   string = string + "\n" + "<option value='3D'>3D</option>";
   string = string + "\n" + "<option value='Spectral'>Spectral</option>";
   string = string + "\n" + "<option value='nothing'>none</option>";
   string = string + "\n" + "</select>";


   string = string + "\n\n\n" + "ST layers:";
   string = string + "\n" + "<div id='ST_layers'>";
   string = string + "\n" + "<label><input type='checkbox' name='translate_layer' value='Translate' id='translate' onchange='ST_translate(this);'> Translate</label><br>";
   string = string + "\n" + "<label><input type='checkbox' name='transcript_layer' value='Transcript' id='transcript' onchange='ST_transcript(this);'>Transcript</label><br>";
   string = string + "\n" + "<label><input type='checkbox' name='highlight_layer' value='Highlights' id='highlights' onchange='ST_highlight(this);'>Highlights</label>";
   string = string + "\n" + "</div>";

   string = string + "\n\n" + "</div>";

   txt.innerHTML = string;

}

function goHome()
{
   var txtButtons=document.getElementById("Buttons");
   var txtPage=document.getElementById("PageNumber");
   var pageNum=document.getElementById("myPage");

   txtButtons.innerHTML = "";
   txtPage.innerHTML = "";
   pageNum.value = "";

   document.getElementById("mainDisplay").src="Chad_Cover_Image.jpg";
	
}