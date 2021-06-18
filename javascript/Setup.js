function Setup(){//HTML/CSSに書き込むための初期設定+開始

    Array_Id = new Array(0);


    //基礎作成の初期設定
    new First(Array_Id);

    //表示管理
    //new GameView();


    //ゲーム開始
    new GameDirecter(Array_Id);//コンポーネントの呼び出しは1度だけ；   
    
    



}
  
