class GameDirecter{

    constructor (turn){

        this.judgment = new Judgment;//判定の初期設定へ
 
        if( turn == 0 ){
            this.Hantei_array = Array(91);//ゲーム開始で判定配列を生成
            this.judgment.Setup_Othello(this.Hantei_array);
            this.turn = 1;
            console.log("turn == 0");
        }
        
        if( turn > 0 ){

            GameDirecter.turn++; 
            console.log(GameDirecter.turn);
        } 
    }



    Conect(x,y){

        let changecoordinate = new ChangeCoordinate;
        
        x = changecoordinate.pos_view_x(id);
        y = changecoordinate.pos_view_y(id);

        
    }

}

GameDirecter.turn = 0;
