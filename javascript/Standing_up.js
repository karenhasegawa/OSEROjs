let game_board = null;

window.addEventListener('DOMContentLoaded',   
    function Standing_up(){//HTML/CSSに書き込むための初期設定+開始
        
        
        Array_Id = new Array(0);


        //初期設定
        new Initial_setting(Array_Id);

        //表示管理
        //new GameView();


        //ゲーム開始
        let turn = 1;
        game_board = new GameDirecter(turn);
    
    }
);
  
