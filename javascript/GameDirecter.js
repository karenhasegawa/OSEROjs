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

        this.judgment.Othello(x,y,turn);
    }

}

GameDirecter.turn = 0;
