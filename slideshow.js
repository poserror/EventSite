        var index = 1;
        showImage(1);
        function incIndex(n)
        {
            index = index + n;
            showImage(index);
        }
        function showImage(n){
            var i;            
            var x = document.getElementsByClassName("slider");
            if(n > x.length){
                index = 1;
            }
            if(n < 1)
            {
                index = x.length;
            }
            for(i=0 ; i<x.length ; i++)//to remove all images
            {
                x[i].style.display = "none";        
            }
            x[index-1].style.display = "block"; //only clicked image is displayed            
        }
        autoSlide();
        
        function autoSlide(){            
            var i;            
            var x = document.getElementsByClassName("slider");
        
            for(i=0 ; i<x.length ; i++)//to remove all images
            {
                x[i].style.display = "none";        
            }
            if(index > x.length){
                index = 1;
            }
            x[index-1].style.display = "block";
            index++;
            setTimeout(autoSlide,5000);
        }        
