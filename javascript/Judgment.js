class Judgment{

    constructor(id){
        this.changecoordinate = new ChangeCoordinate;
        this.changepeace = new ChangePieace;
    }
/*  
    0:空マス
    1:黒石
    2:白石
    3:盤外
*/
    Setup_Othello(hantei_array){

        this.Hantei_Array = hantei_array;

        for(let i=0;i<this.Hantei_Array.length;i++){//全マスを番外設定
            this.Hantei_Array[i]=3;
        } 
        for(let y=0;y<8;y++){
            for(let x=0;x<8;x++){
                let e = this.changecoordinate.pos(x,y);
                this.Hantei_Array[e]=0;//ボード上の値を空きマスに設定
                //ゲーム開始の初期位置の設定
                if(x==3 && y ==3){
                    this.Hantei_Array[e]=2;
                    this.changepeace.setDisc(x,y,this.Hantei_Array[e]);
                }
                if(x==4 && y ==3){
                    this.Hantei_Array[e]=1;
                    this.changepeace.setDisc(x,y,this.Hantei_Array[e]);
                }
                if(x==3 && y ==4){
                    this.Hantei_Array[e]=1;
                    this.changepeace.setDisc(x,y,this.Hantei_Array[e]);
                }
                if(x==4 && y ==4){
                    this.Hantei_Array[e]=2;
                    this.changepeace.setDisc(x,y,this.Hantei_Array[e]);
                }
            }
        }
        
        this.turn=1;
    }

    Othello(x,y){

        let a = this.changecoordinate.pos(x,y);
        console.log(this.Hantei_Array);
        this.Hantei_Array[a]=1;
        console.log(this.Hantei_Array[a]);
        
        //this.changepeace.setDisc(x,y,this.Hantei_Array[e]);


    }

}