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
        
        console.log("hello");

        return 1;
    }

    Othello(x,y,turn){

        let e = this.changecoordinate.pos(x,y);//8×8の2次元座標9×10+1の1次元座標に変更
        let t = turn % 2;//偶数の判定
        console.log(t,turn);

        let Vector=[-10,-9,-8,
                     -1, 0, 1,
                      8, 9,10];

        let white=Array(7), black=Array(7);

       
        if(this.Hantei_Array[e]==0){//マスが空いているか。

            if(t==0)this.Hantei_Array[e]==2;//先手黒に設定
            else this.Hantei_Array[e]==1;//後手白に設定

           for(let i=e+1;this.Hantei_Array[i]!=3;i+=Vector[5]){//　→　の処理

                if(this.Hantei_Array[e]==this.Hantei_Array[e+1])break;
                else if(this.Hantei_Array[i]==2) white.push(2);//違う色
                else if(this.Hantei_Array[i]==1) black.push(1);//違う色

            }
            
            //console.log(white,black,this.Hantei_Array[e]);
            //this.changepeace.setDisc(x,y,this.Hantei_Array[i]);
            //this.changepeace.setDisc(x,y,this.Hantei_Array[i]);

        }
              
       


    }

}