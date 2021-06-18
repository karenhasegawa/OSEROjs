class GameDirecter{

    constructor (arrowid,turn){
 
        this.turn += turn;
        if( this.turn == 0){
            new ChangePieace(arrowid);
            this.Hantei_array = Array(91);//ゲーム開発で判定配列を生成
            this.judgment = new Judgment;//判定の初期設定へ
            this.turn = this.judgment.Setup_Othello(this.Hantei_array);
        }
        
    }



    Conect(x,y){
        let t = this.turn;
        this.judgment.Othello(x,y,t);
    }


   

    
    
}