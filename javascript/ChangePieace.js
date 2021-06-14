class ChangePieace extends GameDirecter{//子クラス、親クラスのメぞっとを使って拡張可能

    constructor(){                             
    
        
    }
    
    pieace = document.querySelector('.pieace');

    //(x,y)のマスに石を置く
    //d=0:石を消す
    //d=1:黒石を置く
    //d=2:白石を置く
    setDisc(x,y,d,arrowid){
        let p = y * 8 + x;//2次元座標を1次元座標に変換
        console.log(p);
        let ID = document.getElementById(arrowid[p]);
        let pieaceElement = ID.firstChild;
   
        pieaceElement.style.display = d == 0 ? "none" : "block";

        if(d > 0){
            pieaceElement.style.backgroundColor = d == 1 ? "black" : "white";
        }

        console.log(pieaceElement);

    }
    

}