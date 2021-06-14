function Setup(){

    Array_Id = new Array(0);
    let changepieace = new ChangePieace(Array_Id);

    //初期設定
    new First(Array_Id);//基礎作成   
    changepieace.first_Coord_setDisc();//最初の駒セット

    //システム管理
    

    //表示管理
    //new GameView();



}
  
