class GameDirecter{

    constructor (turn){

        this.judgment = new Judgment;//判定の初期設定へ
        
 
        if( turn == 1 ){
            this.judgment.Setup_Othello();
        }
        
        if( turn > 1 ){

            GameDirecter.turn++; 
         
        } 
    }



    Conect(id){

        let changecoordinate = new ChangeCoordinate;
        let turn = GameDirecter.turn;
        let x,y;

        x = changecoordinate.pos_view_x(id);
        y = changecoordinate.pos_view_y(id);

        GameDirecter.turn += this.judgment.Othello(x,y,turn);//ターンを返せる
        /*戻り値
            －1:ターンを進めない
            0:ターンを進める
        */
       console.log( "現在ターン:"+GameDirecter.turn);
    }

}

GameDirecter.turn = 0;
