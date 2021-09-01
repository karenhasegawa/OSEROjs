class Population_Intell {

    constructor(){
        
        console.log('コンピュータと対戦');
        this.pcturn = game_board.Pc_Conect();
        let t = this.turn % 2;//偶数の判定        
        if(t==0)console.log("PCは黒の番です");//(偶数)
        else console.log("PCは白の番です");
        
    }

    

}