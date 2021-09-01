class GameDirecter{

    constructor (turn){

        this.judgment = new Judgment;//判定の初期設定へ               
        this.judgment.Setup_Othello();
        console.log("今は黒の番です。");
        this.turn = 0;       
       
    }

    Conect(id){

        console.log(id);

        let changecoordinate = new ChangeCoordinate;
        let x,y;
        let tc;
        let ta;

        x = changecoordinate.pos_view_x(id);
        y = changecoordinate.pos_view_y(id);
        
        this.turn++;
        console.log( "仮ターン:"+this.turn);
        /*引数
            －1:ターンを進めない
            0:ターンを進める
        */  
        ta = this.judgment.Othello(x,y,this.turn);//ターンを返せる
        console.log('引数'+ta);
        this.turn += ta;       

        if(ta==0){//0:ターンを進めるのときパス判定を実行
            tc = this.judgment.isPass(this.turn+1);//次のターンを渡す
            console.log(tc);
            if(tc==1 || tc ==2){
                //(x,y,d)のマスに石を置く
                //d=0:石を消す
                //d=1:黒石を置く
                //d=2:白石を置く
                if(tc==1)console.log("ターン:"+ this.turn+"→黒をとばして白です");//とばす駒を判定した
                if(tc==2)console.log("ターン:"+ this.turn+"→白をとばして黒です");
                this.turn+=1;//パス発生でターンを一つとばす
                console.log("ispassの引数:"+tc);

                tc = this.judgment.isPass(this.turn+1);//次の次ターンを渡す
                if(tc==1 || tc ==2){
                    console.log("ゲーム終了");
                }

            }//パス

             gameview(this.turn);//表示
        }
                        
        console.log( "確定ターン:"+this.turn);
        let t = this.turn % 2;//偶数の判定        
        if(t==0)console.log("今は黒の番です");//(偶数)
        else console.log("今は白の番です");
       
        
       
    }



}
