
$(function(){
    var cells = [];
     
    var CELL_AVAILABLE_CLASS = 'available';
    var CELL_WALL_CLASS = 'wall';
    
    var whichMap = Math.floor((Math.random() * 5) +1);
    var colorFirst = 0;
    var colorSecond = 0;
    var a;
    var az;
    var b;
    var bz;
        a = 'first-p',
        az = 'first_z-p'
        
        b = 'first-r',
        bz = 'first_z-r'
   
    var CellStatus = {
        
        EMPTY : 'empty',
        FIRST : a,
        FIRST_Z : az,
        SECOND : b,
        SECOND_Z : bz
    };
    var imgPaths = {
        purple: "img/X-1.svg",
        purple_z:"img/X-1-z.png",
        red: "img/X-2.svg",
        red_z: "img/X-2-z.png",
        yellow:"img/X-3.svg",
        yellow_z:"img/X-3-z.png",
        green:"img/X-4.svg",
        green_z:"img/X-4-z.png"
    }
    var Cell = function(){
        this.available = 0;
        this.status = CellStatus.EMPTY;
        this.element = null;
    };
    var Game = function(){
        
        this.turn = 1;
        this.step = 1;
        this.stepHelp = 0;
        this.player = 'first';
        this.cellsChecked = [];
    };

        
    Cell.prototype.setAvailable = function(){
        this.available = 1;
        this.element.addClass(CELL_AVAILABLE_CLASS);
    };

    Cell.prototype.setNotAvailable = function(){
        this.available = 0;
        this.element.removeClass(CELL_AVAILABLE_CLASS);
    };
    Cell.prototype.setWall = function(){
        this.available = 0;
        this.element.addClass(CELL_WALL_CLASS);
        
    };

    Cell.prototype.setStatus = function(status){
        this.status = status;
        for(var p in CellStatus){
            this.element.removeClass(CellStatus[p]);
        }
        this.element.addClass(status);
    };
   

    Game.prototype.init = function(){
        
        fillField(11);
        this.calcAvailability();
    };
    Game.prototype.firstStep = function(){
        this.cellsChecked = [];
        this.stepHelp++;
        $('#steps_remains').html(1-this.stepHelp+1);
        if(this.stepHelp > 1){
            this.nextTurn();
        }
        this.calcAvailability();
    };
    Game.prototype.nextStep = function(){
        this.cellsChecked = [];
        this.step++;
        $('#steps_remains').html(3-this.step+1);
        if(this.step > 3){
            this.nextTurn();
        }
        this.calcAvailability();
    };

    Game.prototype.nextTurn = function(){
        if(this.player == 'second'){
            this.turn++;
            $('#turn').html(this.turn);
        }
        this.step = 1;
        $('#steps_remains').html(3);
        if(this.player === 'first'){
            this.player = 'second';
            $('#player').html('Second');
            //$('#player').css({color:'red'});
        }else{
            this.player = 'first';
            $('#player').html('First');
            //$('#player').css({color:'black'});
        }
    };

    Game.prototype.actionBorn = function(cell){
        if(this.player == 'first'){
            cell.setStatus(CellStatus.FIRST);
        }else{
            cell.setStatus(CellStatus.SECOND);
        }
    };

    Game.prototype.actionAbsorb = function(cell){
        if(this.player == 'first'){
            cell.setStatus(CellStatus.FIRST_Z);
        }else{
            cell.setStatus(CellStatus.SECOND_Z);
        }
    };
     
    Game.prototype.checkAvailability = function(x,y){
        /////////////
        
        var maps = {
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
        
        ///////////////
        
        function checkZombie(){
            if(typeof that.cellsChecked[neighbours[k].x] === 'undefined' || that.cellsChecked[neighbours[k].x][neighbours[k].y] !== 1){
                if(typeof that.cellsChecked[neighbours[k].x] === 'undefined') that.cellsChecked[neighbours[k].x] = [];
                that.cellsChecked[neighbours[k].x][neighbours[k].y] = 1;
                available_cnt += that.checkAvailability(neighbours[k].x,neighbours[k].y);
            }
        }
        var neighbours = [
            //те строки что закоментированы - откоментировать, чтобы добавить возможность ходит по диагонали!
            {x: x, y: y-1},
            {x: x, y: y+1},
            //{x: x-1, y: y-1},
            {x: x-1, y: y},
            //{x: x-1, y: y+1},
            //{x: x+1, y: y-1},
            {x: x+1, y: y},
            //{x: x+1, y: y+1}
        ];
        var available_cnt = 0;
        var k = 0;
        var that = this;
        if(this.player == 'first'){
            for(k=0;k<neighbours.length;k++){
                if(
                    typeof cells[neighbours[k].x] !== 'undefined'
                        && typeof cells[neighbours[k].x][neighbours[k].y] !== 'undefined'
                        && cells[neighbours[k].x][neighbours[k].y].status !== CellStatus.FIRST
                        && cells[neighbours[k].x][neighbours[k].y].status !== CellStatus.SECOND_Z
                    )
                {
                    if(cells[neighbours[k].x][neighbours[k].y].status === CellStatus.FIRST_Z){
                        checkZombie();
                    }else{
                        cells[neighbours[k].x][neighbours[k].y].setAvailable();
                        
                        if(whichMap==1){
                            maps.firstMap();
                        }
                        if(whichMap==2){
                            maps.secondMap();
                        }
                        if(whichMap==3){
                            maps.thirdMap();
                        }
                        if(whichMap==4){
                            maps.fourthMap();
                        }
                        if(whichMap==5){
                            maps.fifthMap();
                        }
                        available_cnt++;
                    }
                }
            }
        }else{
            for(k=0;k<neighbours.length;k++){
                if(
                    typeof cells[neighbours[k].x] !== 'undefined'
                        && typeof cells[neighbours[k].x][neighbours[k].y] !== 'undefined'
                        && cells[neighbours[k].x][neighbours[k].y].status !== CellStatus.SECOND
                        && cells[neighbours[k].x][neighbours[k].y].status !== CellStatus.FIRST_Z
                    )
                {
                    if(cells[neighbours[k].x][neighbours[k].y].status === CellStatus.SECOND_Z){
                        checkZombie();
                    }else{
                        cells[neighbours[k].x][neighbours[k].y].setAvailable();
                        //////// добавлять стены сюда!!
                        if(whichMap==1){
                            maps.firstMap();
                        }
                        if(whichMap==2){
                            maps.secondMap();
                        }
                        if(whichMap==3){
                            maps.thirdMap();
                        }
                        if(whichMap==4){
                            maps.fourthMap();
                        }
                        if(whichMap==5){
                            maps.fifthMap();
                        }
                        available_cnt++;
                    }
                }
            }
        }
        return available_cnt;
    };

    Game.prototype.calcAvailability = function(){
        for(var x = 0;x < cells.length; x++){
            for(var y = 0;y < cells[x].length; y++){
                cells[x][y].setNotAvailable();
                
            }
        }
        ////////////
       var maps = {
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
        ////////////
        if(this.turn == 1 && this.step == 1 && this.stepHelp == 0){
            for(y=0;y<cells.length;y++){
                if(this.player == 'first'){
                    
                    cells[0][y].setAvailable();
                    cells[1][y].setAvailable();
                    cells[2][y].setAvailable();
                    cells[3][y].setAvailable();
                    cells[4][y].setAvailable();
                    //cells[5][y].setAvailable();
                    //cells[6][y].setAvailable();
                    //cells[7][y].setAvailable();
                    //cells[8][y].setAvailable();
                    //cells[9][y].setAvailable();
                    //cells[10][y].setAvailable();
                    
                    if(whichMap == 1){
                        maps.firstMap();
                    }
                    
                    
                    if(whichMap == 2){
                        maps.firstMap();
                    }
                    if(whichMap==3){
                        maps.thirdMap();
                    }
                    if(whichMap==4){
                        maps.fourthMap();
                    }
                    if(whichMap==5){
                        maps.fifthMap();
                    }
                }else if(this.player == 'second'){
                    
                    
                    //cells[0][y].setAvailable();
                    //cells[1][y].setAvailable();
                    //cells[2][y].setAvailable();
                    //cells[3][y].setAvailable();
                    //cells[4][y].setAvailable();
                    //cells[5][y].setAvailable();
                    cells[6][y].setAvailable();
                    cells[7][y].setAvailable();
                    cells[8][y].setAvailable();
                    cells[9][y].setAvailable();
                    cells[10][y].setAvailable();
                    if(whichMap==1){
                        maps.firstMap();
                    }
                    if(whichMap==2){
                        maps.secondMap();
                    }
                    if(whichMap==3){
                        maps.thirdMap();
                    }
                    if(whichMap==4){
                        maps.fourthMap();
                    }
                    if(whichMap==5){
                        maps.fifthMap();
                    }
                }
            }
        }else{
            var available_cnt = 0;
            for(x = 0;x < cells.length; x++){
                for(y = 0;y < cells[x].length; y++){
                    if(this.player == 'first'){
                        if(cells[x][y].status == CellStatus.FIRST){
                            if(this.checkAvailability(x,y)){
                                available_cnt++;
                            }
                        }
                    }else if(this.player == 'second'){
                        if(cells[x][y].status == CellStatus.SECOND){
                            if(this.checkAvailability(x,y)){
                                available_cnt++;
                            }
                        }
                    }
                }
            }
            if(available_cnt == 0) this.gameover();
        }
    };

    Game.prototype.gameover = function(){
        alert('Игрок ' + this.player + ' проиграл!');
        window.location.reload();
    };

    Game.prototype.action = function(x,y){
        if(cells[x][y].available){
            if(cells[x][y].status == CellStatus.EMPTY)
            {
                this.actionBorn(cells[x][y]);
            }else{
                this.actionAbsorb(cells[x][y]);
            }
            this.nextStep();
        }
    };

    function fillField(dimension){
        var $field = $('#field ul.cell');
        
        for(var i=0; i<dimension; i++)
        {
            for(var j=0; j<dimension;j++){
                var el = $('<li data-x="' + j + '" data-y="' + i + '"></li>');
                $field.append(el);
                var cell = new Cell();
                cell.element = el;
                if(typeof cells[j] === 'undefined') 
                    cells[j] = [];
                cells[j][i] = cell;
            }
        }
    }

        var game = new Game();
        
        game.init();
    
    
    $('#field ul.cell > li').click(function(){
        var x = $(this).data('x');
        var y = $(this).data('y');
        game.action(x,y);
    });
    
});
