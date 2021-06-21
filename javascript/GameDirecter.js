class GameDirecter{

    constructor (turn){

        this.judgment = new Judgment;//判定の初期設定へ
        
        if( turn == 1 ){//turnは1から！！
            this.judgment.Setup_Othello();
            console.log("今は黒の番です。");
        }
        
        if( turn > 1 ){

            GameDirecter.turn++;//ターンは1（奇数：黒）からスタート 
         
        } 
    }

    Conect(id){

        let changecoordinate = new ChangeCoordinate;
        let x,y;
        let tc;
        let ta;

        x = changecoordinate.pos_view_x(id);
        y = changecoordinate.pos_view_y(id);

        /*引数
            －1:ターンを進めない
            0:ターンを進める
        */
        ta = this.judgment.Othello(x,y,GameDirecter.turn);//ターンを返せる
        
        console.log(ta);
        GameDirecter.turn += ta;

        //console.log( "仮定ターン:"+GameDirecter.turn);

        if(ta==0){//0:ターンを進めるのときパス判定を実行
            tc = this.judgment.isPass(GameDirecter.turn+1);//次のターンを渡す
            if(tc==1 || tc ==2){
                //(x,y,d)のマスに石を置く
                //d=0:石を消す
                //d=1:黒石を置く
                //d=2:白石を置く
                if(tc==1)console.log("ターン:"+ GameDirecter.turn+"→黒をとばして白です");//とばす駒を判定した
                if(tc==2)console.log("ターン:"+ GameDirecter.turn+"→白をとばして黒です");
                GameDirecter.turn+=1;//パス発生でターンを一つとばす
                console.log("ispassの引数:"+tc);

                tc = this.judgment.isPass(GameDirecter.turn+1);//次の次ターンを渡す
                if(tc==1 || tc ==2){
                    console.log("ゲーム終了");
                }

            }//パス
        }
                        
        console.log( "現在ターン:"+GameDirecter.turn);
       
    }

}

GameDirecter.turn = 0;
