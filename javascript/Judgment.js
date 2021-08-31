class Judgment{

    constructor(id){
        this.changecoordinate = new ChangeCoordinate;
        this.changepeace = new ChangePieace;
        this.Hantei_array = Array(91);
    }
/*  
    0:空マス
    1:黒石
    2:白石
    3:盤外
*/
    Setup_Othello(){
        
        let hantei_array = this.Hantei_array;

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

        this.Hantei_array = hantei_array;

        this.keepdata = new KeepData;//データ保存のインスタンス作成(１ゲーム一つ)
        console.log(this.keepdata);

        return 0;
    }

    Othello(x,y,turn){

        let hantei_array = this.Hantei_array;
        let e = this.changecoordinate.pos(x,y);//8×8の2次元座標9×10+1の1次元座標に変更
        console.log(e);
        let t = turn % 2;//偶数の判定
        let player = 0;
        let coordinate= new Array(64);
        let Vector=[-10,-9,-8,
                     -1, 0, 1,
                      8, 9,10];//八方向ベクトル

        let pieace= new Array(7);
        let n = 0;
        let count=0;
        
        if(t==0)player=1;//先手黒に設定
        else player=2;//後手白に設定(偶数)

        //(x,y,d)のマスに石を置く
        //d=0:石を消す
        //d=1:黒石を置く
        //d=2:白石を置く
        if(player==1)console.log("黒を判定した");
        if(player==2)console.log("白を判定した");//表示は1ターン遅延があるので注意

        console.log(hantei_array[e]);
        if(hantei_array[e]!=0){
            //console.log("条件1リターン"); 
            return -1;//マスが空いているか。(条件1)       
        }

        for(let j=0;j<9;j++){//8方向判定

            n=0;

            //console.log("現在のチェック座標:"+Vector[j]);

            if(hantei_array[e+Vector[j]]==player || hantei_array[e+Vector[j]]==0 || hantei_array[e+Vector[j]]==3){
                //console.log(Vector[j]+":この方向には裏返しできません");               
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

                for(let i=e+Vector[j];hantei_array[i]!=player;i+=Vector[j]){//黒か白である限りチェックし続ける (条件3)      
                     //console.log("ベクトルの判定開始:"+i);                    
                    if(hantei_array[i]==0 || hantei_array[i]==3){                        
                    
                        for(let u=n-1;u>-2;u--){
                            coordinate.pop();pieace.pop();//データ消去
                            //console.log(Vector[j]+":データ消去");
                            n=0;
                        }
                        break;       
                    }
                    if(hantei_array[i]==1||hantei_array[i]==2){//ベクトルのとなりと違う色なら                       
                        player==1 ? pieace.push(player) : pieace.push(2);//表示データの保存
                        coordinate.push(i);
                        n += 1;console.log(player,hantei_array[i+Vector[j]]);
                        continue;
                    }
                }   
                                   
                //console.log("push回数:"+n);

                if(n!=0){ /*表示の呼び出し*/

                    count++;//turnのためのカウント
                    
                    hantei_array[e]=player;
                    this.changepeace.setDisc(x,y,hantei_array[e]);//置く駒の表示
                    //console.log(x,y,hantei_array[e]);

                    for(let u=n-1;u>-2;u--){//末端からPOP

                        //console.log(coordinate);

                        if(u==-1){
                            //console.log("条件3をクリア後脱出");
                            break;                          
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
                            console.log(this);
                            this.keepdata.keep();
                            
                        }

                    }                  
                }//表示終了        
                
            }//条件3終了

        }//8方向判定終了

        this.Hantei_array = hantei_array;

        if(count==0)return -1;
        else return 0;
        
    }//othello

    //(x,y,d)のマスに石を置く
        //d=0:石を消す
        //d=1:黒石を置く（奇数）
        //d=2:白石を置く（偶数）
    isPass(turn){//次のターンを受け取る

        let hantei_array = this.Hantei_array;
        let t = turn % 2;//偶数の判定
        let player;
        let count = 0;
        if(t==0)player=2;//後手白に設定(偶数)
        else player=1;//先手黒に設定
        let n = 0;
        
        let Vector=[-10,-9,-8,
                    -1, 0,  1,
                     8, 9, 10];//八方向ベクトル

        for(let x=0;x<8;x++){
            for(let y=0;y<8;y++){//9*10座標を8*8の座標の範囲絞って判定

                let e = this.changecoordinate.pos(x,y);                
                
                if(hantei_array[e]==player){//次ターンの駒を選択
        
                    //console.log("ispass駒"+x+" "+y+" "+player);
                    for(let j=0;j<9;j++){//8方向判定
            
                        n=0;
            
                        //console.log("ispass:現在のチェック座標:"+Vector[j]);
            
                        if(hantei_array[e+Vector[j]]==player || hantei_array[e+Vector[j]]==0 || hantei_array[e+Vector[j]]==3){
                            //console.log(Vector[j]+":ispassこの方向には裏返しできません");               
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
            
                            for(let i=e+Vector[j];hantei_array[i]!=0;i+=Vector[j]){//(条件3)      
                                 //console.log("ispass:ベクトルの判定開始");                                
                                if(hantei_array[i+Vector[j]]==3 || hantei_array[i]==player){
                                    n=0;
                                    break;
                                }                                                    
                                if(hantei_array[i]==1||hantei_array[i]==2){                     
                                    n += 1;//挟まれている駒をカウント
                                    continue;
                                }                               
                               
            
                            } 
                            //console.log("ispass:ひっくり返す回数:"+n);
                        }

                        if(n!=0){
                            console.log(x+" "+y+" "+Vector[j]);
                            count++;
                            console.log(Vector[j]);
                        }

                    }//8方向判定終わり                                                 
                           
                }
            }//for_y
        }//for_x

        //console.log("カウント："+count);

        this.Hantei_array = hantei_array;

        if(count == 0)return player;//playerは置けない
        else return 0;//playerはおける
    }//isPass


}//クラス終わり