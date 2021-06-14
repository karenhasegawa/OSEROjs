class ChangePieace extends GameDirecter{//子クラス、親クラスのメぞっとを使って拡張可能

    constructor(arrowid){ 
        console.log(hello);
        this.x = 0;
        this.y = 0;
        this.d = 1;

    }

    //(x,y)のマスに石を置く
    //d=0:石を消す
    //d=1:黒石を置く
    //d=2:白石を置く
    setDisc(){

        console.log(arrowid);

        let p = this.y * 8 + this.x;//2次元座標を1次元座標に変換
        console.log(p);
        let ID = document.getElementById(arrowid[p]);
        let pieaceElement = ID.firstChild;
   
        pieaceElement.style.display = this.d == 0 ? "none" : "block";

        if(d > 0){
            pieaceElement.style.backgroundColor = this.d == 1 ? "black" : "white";
        }

        console.log(pieaceElement);

    }
    

}