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
        return 0;
    }

    Othello(x,y,turn){

        let e = this.changecoordinate.pos(x,y);//8×8の2次元座標9×10+1の1次元座標に変更
        let t = turn % 2;//偶数の判定（パス判定では使えない）
        let player = 0;
        let coordinate= new Array(64);

        let Vector=[-10,-9,-8,
                     -1, 0, 1,
                      8, 9,10];//八方向ベクトル

        let pieace= new Array(7);
        let n = 0;

        
        if(t==0)player=2;//先手黒に設定
        else player=1;//後手白に設定。

        if(player==1)console.log("今は白の番です");
        if(player==2)console.log("今は黒の番です");//表示は1ターン遅延があるので注意
    
        if(hantei_array[e]!=0)return -1;//マスが空いているか。(条件1) 

        for(let j=0;j<9;j++){//8方向判定

            console.log("現在のチェック座標:"+Vector[j]);

            if(hantei_array[e+Vector[j]]==player || hantei_array[e+Vector[j]]==0 || hantei_array[e+Vector[j]]==3){
                console.log(Vector[j]+":この方向には裏返しできません");
                if(j==8)return -1;
                continue;
                /*
                    現在のベクトルに対し裏返せない(置き場におけない)条件
                    ・現在のベクトルに対し、置き場のとなりがplayerと同じ色であるとき
                    ・現在のベクトルに対し、置き場のとなりが空きマスであるとき
                    ・現在のベクトルに対し、置き場のとなりが番外である時                    
                    （条件2までを処理）
                */
            }//条件2終了

            else{//条件3開始

                for(let i=e+Vector[j];hantei_array[i]!=hantei_array[i+Vector[j]];i+=Vector[j]){//playerと同じ色ではない限りチェックし続ける (条件3)      
                   
                  
                    /* if(hantei_array[i+Vector[j]]==player){//ベクトルの先がplayerと同じ色の時
                        console.log("");
                        break;
                    }*/

                    if(player==hantei_array[i+Vector[j]]){//ベクトルのとなりと違う色なら
                       
                        player==1 ? pieace.push(player) : pieace.push(2);//表示データの保存
                        coordinate.push(i);
                        console.log("push可能");
                        n += 1;
                        continue;
                    }
                   // }
       
                }
                
                console.log("push回数:"+n);

                if(n!=0){ /*表示の呼び出し*/
                    
                    hantei_array[e]=player;
                    this.changepeace.setDisc(x,y,hantei_array[e]);//置く駒の表示
                    console.log(x,y,hantei_array[e]);

                    for(let j=n-1;j>-2;j--){//末端からPOP

                        console.log(coordinate);

                        if(j==-1){

                            console.log("条件3をクリア後脱出");
                            return 0;//ターンは変更のまま//条件3をクリア後脱出
                        }
                        else{
                            let pop = coordinate.pop();
                            let pi =  pieace.pop();
                                                                   
                            x = this.changecoordinate.pos_x(pop);//9×10+1の1次元座標を8×8の2次元座標に変更
                            y = this.changecoordinate.pos_y(pop);//9×10+1の1次元座標を8×8の2次元に変更
                            hantei_array[pop]=pi;
                            /*9×10+1の座標はi*/ 
                            console.log(x,y,hantei_array[pop]);
                            this.changepeace.setDisc(x,y,hantei_array[pop]);
                            
                        }
                    }                  
                }//表示終了

                n=0;

                if(j==8){
                    console.log("全てのベクトルが3の条件に合わない");
                    return -1;//3の条件に合わない場合
                }               
                
            }//条件3終了

        }//8方向判定終了
              
    }//othello

}//クラス終わり

Judgment.Hantei_array = Array(91);
let hantei_array = Judgment.Hantei_array;//ゲーム開始で判定配列を生成