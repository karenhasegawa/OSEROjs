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
    Setup_Othello(){
    

        for(let i=0;i<hantei_array.length;i++){//全マスを番外設定
            hantei_array[i]=3;
        } 
        for(let y=0;y<8;y++){
            for(let x=0;x<8;x++){
                let e = this.changecoordinate.pos(x,y);
                hantei_array[e]=0;//ボード上の値を空きマスに設定
                //ゲーム開始の初期位置の設定
                if(x==3 && y ==3){
                    hantei_array[e]=2;
                    this.changepeace.setDisc(x,y,hantei_array[e]);
                }
                if(x==4 && y ==3){
                    hantei_array[e]=1;
                    this.changepeace.setDisc(x,y,hantei_array[e]);
                }
                if(x==3 && y ==4){
                    hantei_array[e]=1;
                    this.changepeace.setDisc(x,y,hantei_array[e]);
                }
                if(x==4 && y ==4){
                    hantei_array[e]=2;
                    this.changepeace.setDisc(x,y,hantei_array[e]);
                }
            }
        }
        
        console.log(hantei_array);

        return 1;
    }

    Othello(x,y,turn){

        let e = this.changecoordinate.pos(x,y);//8×8の2次元座標9×10+1の1次元座標に変更
        let t = turn % 2;//偶数の判定
        let player=0;
        let d5;
        this.x = x;
        this.y = y;


        let Vector=[-10,-9,-8,
                     -1, 0, 1,
                      8, 9,10];

        let pieace=Array(7);

       
        if(hantei_array[e]==0){//マスが空いているか。

           for(let i=e+1;hantei_array[i]!=3;i+=Vector[5]){//　→　の処理
                
                x += Vector[5];
                if(t==0)player=2;//先手黒に設定
                else player=1;//後手白に設定

                console.log(x,y);
                if(player==hantei_array[e+1])break;
                else if(hantei_array[i]==2) this.changepeace.setDisc(x,y,2);//違う色
                else if(hantei_array[i]==1) this.changepeace.setDisc(x,y,1);//違う色

            }
            
            /*for(let j=0;player != pieace[j];j++){
                console.log(pieace[j]);
                x +=  Vector[5];            
                d5 = hantei_array[e+x];                
                this.changepeace.setDisc(x,y,d5);//ｙ座標は変わらない
                console.log(x,y,d5);
            }*/

        }
              
       


    }

}

Judgment.Hantei_array = Array(91);
let hantei_array = Judgment.Hantei_array;//ゲーム開始で判定配列を生成