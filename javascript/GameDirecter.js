class GameDirecter{

    constructor (turn){

        this.judgment = new Judgment;//判定の初期設定へ
        
        if( turn == 1 ){
            this.judgment.Setup_Othello();
            console.log("今は黒の番です。");
        }
        
        if( turn > 1 ){

            GameDirecter.turn++; 
         
        } 
    }

    Conect(id){

        let changecoordinate = new ChangeCoordinate;
        let turn = GameDirecter.turn;
        let x,y;
        let tc;

        x = changecoordinate.pos_view_x(id);
        y = changecoordinate.pos_view_y(id);

        GameDirecter.turn += this.judgment.Othello(x,y,turn);//ターンを返せる
        /*戻り値
            －1:ターンを進めない
            0:ターンを進める
        */
        tc = this.judgment.isPass(GameDirecter.turn);//次のターンを渡す
        if(tc!=true){
            if(tc==1)console.log("ターン:"+ GameDirecter.turn+"白をとばして黒です");//とばす駒を判定した
            if(tc==2)console.log("ターン:"+ GameDirecter.turn+"黒をとばして白です");
            GameDirecter.turn++;//パス発生でターンを一つとばす
        }//パス
        
        console.log("ispassの引数:"+tc);
        console.log( "現在ターン:"+GameDirecter.turn);

       
    }

}

GameDirecter.turn = 0;
