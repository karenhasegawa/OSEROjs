class GameDirecter{//親クラス

    constructor (arrowid){
        //console.log(arrowid);
        this.arrowid=arrowid;
        this.hantei_array = Array(91);
    }

    //(x,y)のマスに石を置く
    //d=0:石を消す
    //d=1:黒石を置く
    //d=2:白石を置く
    setDisc(x,y,d){
        
        let p = y * 8 + x;//2次元座標を1次元座標に変換
        console.log(p);
        let ID = document.getElementById(this.arrowid[p]);
        let pieaceElement = ID.firstChild;

        pieaceElement.style.display = d == 0 ? "none" : "block";

        if(d > 0){
            pieaceElement.style.backgroundColor = d == 1 ? "black" : "white";
        }
    }
    

    Othello(){
        ///for(let i=0; i < this.hantei_array.length ;i++)
        

    }
}