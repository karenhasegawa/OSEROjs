class Judgment{

    constructor(){
        this.hantei_array = Array(91);
    }
/*  
    0:空マス
    1:黒石
    2:白石
    3:盤外
*/
    Othello(){

        for(let i=0;i<this.hantei_array.length;i++){//全マスを番外設定
            this.hantei_array[i]=8;
        } 
        for(let y=0;y<8;y++){
            for(let x=0;x<8;x++){
                this.hantei_array[pos(x,y)]=0;//ボード上の値を空きマスに設定
            }
        }

        this.hantei_array[pos(this.x_getview,this.y_getview)]=this.d_getview;//初期位置の設定
    
    }

}