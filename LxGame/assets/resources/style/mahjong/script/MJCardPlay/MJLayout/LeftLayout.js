
const MJCoord = require('MJCoord');


const LeftLayout = {
    init : function (count,scale) {
      this.mjNum = count;
      this.scale = scale;

        this.mjW = scale * MJCoord.RightInHandCard_W;
        this.mjH = scale * MJCoord.RightInHandCard_H;

        this.outCardW = MJCoord.RightInOutCard_W;
        this.outCardH = MJCoord.RightInOutCard_H;

        let height = cc.visibleRect.height;
        let start = cc.visibleRect.topLeft;

        this.distToDiff = 14;
        this.distToEdge = 50;
        this.w = this.mjNum*this.distToEdge;
        this.h = this.mjH*this.mjNum + this.distToDiff;

        //this.startOutPosX = Right

        this.startPosX = start.x+180-20; // + this.w;
        this.startPosY = start.y-100+4; //- this.mjH ;
    },

    /**
     * 获取胡牌位置
     * @param index 第几张手牌
     */
    getHuCardPos : function (index,blockNum) {
        let blockIndex = blockNum;
        //let x = this.startPosX -blockIndex*2- blockIndex*10*3-index*9;
        let x = this.startPosX-30;
        let y = this.startPosY -blockIndex*6- blockIndex*32*3*this.scale - index*38*this.scale;//this.startPosY - index*32*this.scale +(0-blockIndex*6 - blockIndex*32*3*this.scale);
        //let y = this.startPosY -blockIndex*6- blockIndex*32*3*this.scale - index*32*this.scale;
        return {
            x : x,
            y : y
        }
    },

    getHandCardWidth : function () {
      return  36*this.scale;
    },
    /**
     *  最后一张牌的偏移距离
     */
    getLastCardDiff : function () {
        //return cc.p(-4.5,-15);
        return cc.p(0,-15);
    },

    /**
     * 获取手牌
     * @param index
     * @param blockNum
     */
    getPosByIndex : function (index,blockNum) {
      let blockIndex = blockNum;
      //let x = this.startPosX +(0-blockIndex*2-2- blockIndex*10*3*this.scale)-index*this.scale*11;
      let x = this.startPosX -30;
      let y = this.startPosY - index*36*this.scale +(0-blockIndex*6-6- blockIndex*32*3*this.scale)+10;
      return {
          x : x,
          y : y
      }
    },

    /**
     * 获取吃碰杠牌的位置
     * @param blockIndex
     * @param index
     */
    getBlockPosByIndex : function (blockIndex,index) {
        let diffY = 0;
        let diffX = 0;
        if(index===3){
            index = 1;
            diffY = 5;
            diffX = -5;
        }
        if(index===4){
            index = 0;
            diffY = 5;
            diffX = -5;
        }
        if(index===5){
            index = 2;
            diffY = 5;
            diffX = -5;
        }
        if(index===6){
            index = 1;
            diffY = 10;
            diffX = -5;
        }
        //let x = this.startPosX -blockIndex*2- blockIndex*10*3*this.scale -index*10*this.scale + diffX;
        let x = this.startPosX - 30;
        let y = this.startPosY -blockIndex*6- blockIndex*32*3*this.scale - index*32*this.scale +diffY;
        return {
            x : x,
            y : y
        }
    },

    /**
     * 获取出牌的位置
     * @param index
     */
    getOutPos : function (index,num) {
        num = num || 0;
        //let sx = 376;
        //let sy = 588;
        let sx = 300-37;
        let sy = 548;
        let diffX = 0;
        let diffY = 0;
                //156,371
        if((num &  0x02) == 0x02){ //三人
          diffY = 50;
          diffX = -30;
            if(index < 12){

            }else if(index>11 & index<22){
              diffX += 56
              diffY -= 38;
              index -= 12;
            }else if(index>21 & index<30){
              diffX += 2*56;
              diffY -= 2*38;
              index -= 22;
            }else{
              diffX += 3*48;
              diffY -= 3*38;
              index -= 30;
            }
        }else{    //4人
            if(index>9&index<18){
                //diffX += 48;
                diffX += 56;
                diffY -= 38;
                index -=10;
            }else if (index<10) {

            }else{
                diffX += 2*56;
                diffY -= 2*38;
                index -=18;
            }
        }
        //let x = sx + diffX+index*(-9.8);
        let x = sx + diffX;
        let y = sy + diffY+index *(-37.1);
       // console.log(x,y);
        return {
            x : x,
            y : y
        }
    },

    getFlowerPos:function(index){
      let diffX = 220-20-30;
      let diffY = 230;
      let x = diffX ;
      let y = diffY+index*30.75;
      return{
        x:x,
        y:y
      };
    }

};

module.exports = LeftLayout;
