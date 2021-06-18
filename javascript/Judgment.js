class Judgment{

    constructor(hantei_array){
        this.hantei_array = hantei_array;
        this.changecoordinate = new ChangeCoordinate;
        this.changepeace = new ChangePieace; 
    }
/*  
    0:空マス
    1:黒石
    2:白石
    3:盤外
*/
    Setup_Othello(){

        for(let i=0;i<this.hantei_array.length;i++){//全マスを番外設定
            this.hantei_array[i]=8;
        } 
        for(let y=0;y<8;y++){
            for(let x=0;x<8;x++){
                e = this.changecoordinate.pos(x,y);
                this.hantei_array[e]=0;//ボード上の値を空きマスに設定
                //ゲーム開始の初期位置の設定
                if(x==3 && y ==3){
                    this.hantei_array[e]=2;
                    this.changepeace.setDisc(x,y,this.hantei_array[e]);
                }
                if(x==4 && y ==3){
                    this.hantei_array[e]=1;
                    this.changepeace.setDisc(x,y,this.hantei_array[e]);
                }
                if(x==3 && y ==4){
                    this.hantei_array[e]=1;
                    this.changepeace.setDisc(x,y,this.hantei_array[e]);
                }
                if(x==4 && y ==4){
                    this.hantei_array[e]=2;
                    this.changepeace.setDisc(x,y,this.hantei_array[e]);
                }
            }
        }

        this.turn=1;
    }

}