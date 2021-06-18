class GameDirecter{

    constructor (arrowid){
 
        //console.log(arrowid);
        new ChangePieace(arrowid);
        this.Hantei_array = Array(91);//ゲーム開発で判定配列を生成
        this.judgment = new Judgment;//判定の初期設定へ
        this.judgment.Setup_Othello(this.Hantei_array);
    }


   

    
    
}