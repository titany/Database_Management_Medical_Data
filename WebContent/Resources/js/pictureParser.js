(function() {
	window.GATE = (window.GATE || {});
	window.GATE.Picture = (window.GATE.Picture || {});

    "use strict";


     window.GATE.Picture.GetArrayValuebyKey = function(type, currentArr) {
		var result = $(currentArr).filter(function(v) {
   		 return currentArr[v].key === type; // Filter out the appropriate one
		})[0];
		
		if (result != null && result != undefined){
			return result.value;
		}
		else
			return null
	}


    window.GATE.Picture.getImage = function(imageId) {    

       if(imageId != undefined){

         var image = window.GATE.Picture.GetArrayValuebyKey(imageId ,PICTUREARRAY);

         if(image != null){
            return image;
         }
         else{
            image = window.GATE.Overview.GetFile(imageId);
                   PICTUREARRAY.push({key : imageId , value : image});
                   return image;
                }
            }
            else{
                throw "unknown imageId";
            }
    }
     
   
    window.GATE.Picture.Initialize = function(){
    }
    
    
    window.GATE.Picture.LoadImage = function(imageId){
    
    if( imageId === null) return; 
    var data = window.GATE.Picture.getImage(imageId);
    
    window.GATE.Overview.ToggleCustomModal();
    $('#dicomImage').html('<img heigth="100%" width="100%" src="data:image/png;base64,' + data + '" alt="Red dot"/>');
    }

})(jQuery);

$(document).ready(function() {
   
});