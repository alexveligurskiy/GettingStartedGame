<div class="container"id="mapChooser">
      <h2>Choose your map</h2>
      <div class="btn-group btn-group-justified">
          <a id="map1" value="1" class="btn btn-primary ">Fisrt</a>
          <a  id="map2" value="2" class="btn btn-primary ">Second</a>
          <a  id="map3" value="3" class="btn btn-primary ">Third</a>
          <a  id="map4" value="4" class="btn btn-primary ">Fourth</a>
          <a  id="map5" value="5" class="btn btn-primary ">Fifth</a>
      </div>
    </div>
     <div class="container" id="colorChooser1">
      <h2>First player choose color</h2>
      <div class="btn-group btn-group-justified">
          <a id="color1" value="1" class="btn btn-primary ">Purple</a>
          <a  id="color2" value="2" class="btn btn-primary ">Red</a>
          <a  id="color3" value="3" class="btn btn-primary ">Green</a>
          <a  id="color4" value="4" class="btn btn-primary ">Yellow</a>
          
      </div>
    </div>
    <div class="container " id="colorChooser2">
      <h2>Second player choose color</h2>
      <div class="btn-group btn-group-justified">
          <a id="color5" value="1" class="btn btn-primary ">Purple</a>
          <a  id="color6" value="2" class="btn btn-primary ">Red</a>
          <a  id="color7" value="3" class="btn btn-primary ">Green</a>
          <a  id="color8" value="4" class="btn btn-primary ">Yellow</a>
          
      </div>
    </div>

document.getElementById("colorChooser1").style.visibility = "visible";
    document.getElementById("colorChooser1").style.height = "0";
        $('#color1').click(function(Event){
            document.getElementById("colorChooser1").style.display = "none";
            document.getElementById("colorChooser2").style.visibility = "visible";
            colorFirst = 1;
        }); 
        $('#color2').click(function(Event){
            document.getElementById("colorChooser1").style.display = "none";
            document.getElementById("colorChooser2").style.visibility = "visible";
            colorFirst = 2;
        }); 
        $('#color3').click(function(Event){
            document.getElementById("colorChooser1").style.display = "none";
            document.getElementById("colorChooser2").style.visibility = "visible";
            colorFirst = 3;
        }); 
        $('#color4').click(function(Event){
            document.getElementById("colorChooser1").style.display = "none";
            document.getElementById("colorChooser2").style.visibility = "visible";
            colorFirst = 4;
        }); 
        
        $('#color5').click(function(Event){
            document.getElementById("colorChooser2").style.display = "none";
            document.getElementById("field").style.visibility = "visible";
            colorSecond = 1;
        }); 
        $('#color6').click(function(Event){
            document.getElementById("colorChooser2").style.display = "none";
            document.getElementById("field").style.visibility = "visible";
            colorSecond = 2;
        }); 
        $('#color7').click(function(Event){
            document.getElementById("colorChooser2").style.display = "none";
            document.getElementById("field").style.visibility = "visible";
            colorSecond = 3;
        }); 
        $('#color8').click(function(Event){
            document.getElementById("colorChooser2").style.display = "none";
            document.getElementById("field").style.visibility = "visible";
            colorSecond = 4;
            
        }); 
/////1 карта

$('#map1').click(function(Event){
        whichMap = 1; 
        document.getElementById("colorChooser1").style.visibility = "visible";
        document.getElementById("mapChooser").style.visibility = "hidden";
        document.getElementById("mapChooser").style.height = "0";
         $('#color1').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
            document.getElementsByClassName("first").style.backgroundImage = "url('img/X-1.svg')"
            document.getElementsByClassName("first_z").style.backgroundImage = "url('img/X-1-z.svg')"
            
        }); 
        $('#color2').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
            document.getElementsByClassName("first").style.backgroundImage = "url('img/X-2.svg')"
            document.getElementsByClassName("first_z").style.backgroundImage = "url('img/X-2-z.svg')"
        }); 
        $('#color3').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
            document.getElementsByClassName("first").style.backgroundImage = "url('img/X-3.svg')"
            document.getElementsByClassName("first_z").style.backgroundImage = "url('img/X-3-z.svg')"
        }); 
        $('#color4').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
            document.getElementsByClassName("first").style.backgroundImage = "url('img/X-4.svg')"
            document.getElementsByClassName("first_z").style.backgroundImage = "url('img/X-4-z.svg')"
        }); 
        
        $('#color5').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
            document.getElementsByTagNameNS("ul.cell > li.second").style.backgroundImage = "url('img/X-1.svg')"
            document.getElementsByTagNameNS("ul.cell > li.second_z").style.backgroundImage = "url('img/X-1-z.svg')"
        }); 
        $('#color6').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
            document.getElementsByTagName("ul.cell > li.second").style.backgroundImage = "url('img/X-2.svg')"
            document.getElementsByTagName("ul.cell > li.second_z").style.backgroundImage = "url('img/X-2-z.svg')"
        }); 
        $('#color7').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
            document.getElementsByTagName("ul.cell > li.second").style.backgroundImage = "url('img/X-3.svg')"
            document.getElementsByTagName("ul.cell > li.second_z").style.backgroundImage = "url('img/X-3-z.svg')"
        }); 
        $('#color8').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
            document.getElementsByTagName("ul.cell > li.second").style.backgroundImage = "url('img/X-4.svg')"
            document.getElementsByTagName("ul.cell > li.second_z").style.backgroundImage = "url('img/X-4-z.svg')"
        }); 
        

    });
    $('#map2').click(function(Event){

        whichMap = 2; 
        document.getElementById("colorChooser1").style.visibility = "visible";
        document.getElementById("mapChooser").style.visibility = "hidden";
        document.getElementById("mapChooser").style.height = "0";
         $('#color1').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color2').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color3').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color4').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        
        $('#color5').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color6').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color7').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color8').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        
    });
    $('#map3').click(function(Event){

        whichMap = 3; 
        document.getElementById("colorChooser1").style.visibility = "visible";
        document.getElementById("mapChooser").style.visibility = "hidden";
        document.getElementById("mapChooser").style.height = "0";
         $('#color1').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color2').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color3').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color4').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        
        $('#color5').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color6').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color7').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color8').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        
    });
    $('#map4').click(function(Event){

        whichMap = 4; 
        document.getElementById("colorChooser1").style.visibility = "visible";
        document.getElementById("mapChooser").style.visibility = "hidden";
        document.getElementById("mapChooser").style.height = "0";
         $('#color1').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color2').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color3').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color4').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        
        $('#color5').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color6').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color7').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color8').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        
    });
    $('#map5').click(function(Event){

        whichMap = 5; 
        document.getElementById("colorChooser1").style.visibility = "visible";
        document.getElementById("mapChooser").style.visibility = "hidden";
        document.getElementById("mapChooser").style.height = "0";
        $('#color1').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color2').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color3').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        $('#color4').click(function(Event){
            document.getElementById("colorChooser1").style.visibility = "hidden";
            document.getElementById("colorChooser1").style.height = "0";
            document.getElementById("colorChooser2").style.visibility = "visible";
        }); 
        
        $('#color5').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color6').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color7').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
        }); 
        $('#color8').click(function(Event){
            document.getElementById("colorChooser2").style.visibility = "hidden";
            document.getElementById("colorChooser2").style.height = "0";
            document.getElementById("field").style.visibility = "visible";
            
        }); 
        
    });

Game.prototype.getMaps = function(x,y){
        var maps ={
        "firstMap" : function(){
            cells[2][cells[y].length-9].setNotAvailable();
            cells[2][cells[y].length-9].setWall();

            cells[2][cells[y].length-8].setNotAvailable();
            cells[2][cells[y].length-8].setWall();

            cells[2][cells[y].length-7].setNotAvailable();
            cells[2][cells[y].length-7].setWall();

            cells[2][cells[y].length-4].setNotAvailable();
            cells[2][cells[y].length-4].setWall();

            cells[3][cells[y].length-8].setNotAvailable();
            cells[3][cells[y].length-8].setWall();

            cells[5][cells[y].length-3].setNotAvailable();
            cells[5][cells[y].length-3].setWall();

            cells[6][cells[y].length-4].setNotAvailable();
            cells[6][cells[y].length-4].setWall();

            cells[6][cells[y].length-3].setNotAvailable();
            cells[6][cells[y].length-3].setWall();

            cells[6][cells[y].length-2].setNotAvailable();
            cells[6][cells[y].length-2].setWall();

            cells[6][cells[y].length-9].setNotAvailable();
            cells[6][cells[y].length-9].setWall();

            cells[7][cells[y].length-2].setNotAvailable();
            cells[7][cells[y].length-2].setWall();

            cells[7][cells[y].length-7].setNotAvailable();
            cells[7][cells[y].length-7].setWall();                    

            cells[8][cells[y].length-7].setNotAvailable();
            cells[8][cells[y].length-7].setWall();

            cells[8][cells[y].length-6].setNotAvailable();
            cells[8][cells[y].length-6].setWall(); 
        }
        , "secondMap" : function(){
            cells[2][cells[y].length-7].setNotAvailable();
            cells[2][cells[y].length-7].setWall();

            cells[2][cells[y].length-3].setNotAvailable();
            cells[2][cells[y].length-3].setWall();

            cells[3][cells[y].length-3].setNotAvailable();
            cells[3][cells[y].length-3].setWall();

            cells[3][cells[y].length-4].setNotAvailable();
            cells[3][cells[y].length-4].setWall();

            cells[4][cells[y].length-9].setNotAvailable();
            cells[4][cells[y].length-9].setWall();

            cells[6][cells[y].length-2].setNotAvailable();
            cells[6][cells[y].length-2].setWall();

            cells[7][cells[y].length-2].setNotAvailable();
            cells[7][cells[y].length-2].setWall();

            cells[7][cells[y].length-2].setNotAvailable();
            cells[7][cells[y].length-2].setWall();

            cells[7][cells[y].length-5].setNotAvailable();
            cells[7][cells[y].length-5].setWall();

            cells[7][cells[y].length-6].setNotAvailable();
            cells[7][cells[y].length-6].setWall();

            cells[7][cells[y].length-9].setNotAvailable();
            cells[7][cells[y].length-9].setWall();

            cells[8][cells[y].length-9].setNotAvailable();
            cells[8][cells[y].length-9].setWall();                    

            cells[8][cells[y].length-5].setNotAvailable();
            cells[8][cells[y].length-5].setWall();
        }
        ,"thirdMap" : function(){
            cells[1][cells[y].length-9].setNotAvailable();
            cells[1][cells[y].length-9].setWall();

            cells[1][cells[y].length-5].setNotAvailable();
            cells[1][cells[y].length-5].setWall();

            cells[1][cells[y].length-9].setNotAvailable();
            cells[1][cells[y].length-9].setWall();

            cells[2][cells[y].length-10].setNotAvailable();
            cells[2][cells[y].length-10].setWall();

            cells[2][cells[y].length-9].setNotAvailable();
            cells[2][cells[y].length-9].setWall();

            cells[2][cells[y].length-3].setNotAvailable();
            cells[2][cells[y].length-3].setWall();

            cells[4][cells[y].length-4].setNotAvailable();
            cells[4][cells[y].length-4].setWall();

            cells[5][cells[y].length-4].setNotAvailable();
            cells[5][cells[y].length-4].setWall();

            cells[5][cells[y].length-3].setNotAvailable();
            cells[5][cells[y].length-3].setWall();

            cells[5][cells[y].length-5].setNotAvailable();
            cells[5][cells[y].length-5].setWall();

            cells[6][cells[y].length-9].setNotAvailable();
            cells[6][cells[y].length-9].setWall();

            cells[6][cells[y].length-4].setNotAvailable();
            cells[6][cells[y].length-4].setWall();                    

            cells[8][cells[y].length-2].setNotAvailable();
            cells[8][cells[y].length-2].setWall();  

            cells[8][cells[y].length-9].setNotAvailable();
            cells[8][cells[y].length-9].setWall(); 

            cells[7][cells[y].length-9].setNotAvailable();
            cells[7][cells[y].length-9].setWall(); 

            cells[7][cells[y].length-8].setNotAvailable();
            cells[7][cells[y].length-8].setWall(); 
        }
        ,"fourthMap":function(){
            cells[2][cells[y].length-8].setNotAvailable();
            cells[2][cells[y].length-8].setWall();

            cells[3][cells[y].length-3].setNotAvailable();
            cells[3][cells[y].length-3].setWall();

            cells[3][cells[y].length-4].setNotAvailable();
            cells[3][cells[y].length-4].setWall();

            cells[3][cells[y].length-5].setNotAvailable();
            cells[3][cells[y].length-5].setWall();

            cells[4][cells[y].length-4].setNotAvailable();
            cells[4][cells[y].length-4].setWall();

            cells[4][cells[y].length-5].setNotAvailable();
            cells[4][cells[y].length-5].setWall();

            cells[6][cells[y].length-2].setNotAvailable();
            cells[6][cells[y].length-2].setWall();

            cells[6][cells[y].length-10].setNotAvailable();
            cells[6][cells[y].length-10].setWall();

            cells[7][cells[y].length-6].setNotAvailable();
            cells[7][cells[y].length-6].setWall();

            cells[7][cells[y].length-9].setNotAvailable();
            cells[7][cells[y].length-9].setWall();

            cells[7][cells[y].length-10].setNotAvailable();
            cells[7][cells[y].length-10].setWall();                    

            cells[8][cells[y].length-2].setNotAvailable();
            cells[8][cells[y].length-2].setWall();  

            cells[8][cells[y].length-9].setNotAvailable();
            cells[8][cells[y].length-9].setWall(); 

            cells[7][cells[y].length-9].setNotAvailable();
            cells[7][cells[y].length-9].setWall(); 

            cells[7][cells[y].length-8].setNotAvailable();
            cells[7][cells[y].length-8].setWall(); 
                        }
        ,"fifthMap":function(){
            cells[1][cells[y].length-8].setNotAvailable();
            cells[1][cells[y].length-8].setWall();

            cells[1][cells[y].length-10].setNotAvailable();
            cells[1][cells[y].length-10].setWall();

            cells[1][cells[y].length-4].setNotAvailable();
            cells[1][cells[y].length-4].setWall();

            cells[2][cells[y].length-6].setNotAvailable();
            cells[2][cells[y].length-6].setWall();

            cells[3][cells[y].length-3].setNotAvailable();
            cells[3][cells[y].length-3].setWall();

            cells[4][cells[y].length-8].setNotAvailable();
            cells[4][cells[y].length-8].setWall();

            cells[5][cells[y].length-2].setNotAvailable();
            cells[5][cells[y].length-2].setWall();

            cells[5][cells[y].length-5].setNotAvailable();
            cells[5][cells[y].length-5].setWall();

            cells[5][cells[y].length-10].setNotAvailable();
            cells[5][cells[y].length-10].setWall();

            cells[7][cells[y].length-4].setNotAvailable();
            cells[7][cells[y].length-4].setWall();

            cells[7][cells[y].length-7].setNotAvailable();
            cells[7][cells[y].length-7].setWall();                    

            cells[9][cells[y].length-2].setNotAvailable();
            cells[9][cells[y].length-2].setWall();  

            cells[8][cells[y].length-9].setNotAvailable();
            cells[8][cells[y].length-9].setWall(); 

            cells[9][cells[y].length-6].setNotAvailable();
            cells[9][cells[y].length-6].setWall(); 

        }
    }
 
    }
    