class ChangePieace{
    
    //(x,y,d)のマスに石を置く
    //d=0:石を消す
    //d=1:黒石を置く
    //d=2:白石を置く
    setDisc(x,y,d){

        let changecoordinate = new ChangeCoordinate;
        let p = changecoordinate.pos_view(x,y);
        let ID = document.getElementById(p);

        let pieaceElement = ID.firstChild;
        
        pieaceElement.style.display = d == 0 ? "none" : "block";

        if(d > 0){
            pieaceElement.style.backgroundColor = d == 1 ? "black" : "white";
        }

    }

    outDisc(x,y){//非表示設定
        let changecoordinate = new ChangeCoordinate;
        let p = changecoordinate.pos_view(x,y);
        let ID = document.getElementById(p);

        let pieaceElement = ID.firstChild;

        pieaceElement.style.display = "none";
    }
}