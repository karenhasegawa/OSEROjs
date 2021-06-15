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

    //turn
    
/*  
    0:空マス
    1:黒石
    2:白石
    3:盤外
*/
    Othello(){

       for(let i=0;i<this.hantei_array.length;i++){//全マスを番外設定
           this.hantei_array[i]=8;
       } 
       for(let y=0;y<8;y++){
           for(let x=0;x<8;x++){
                this.hantei_array[pos(x,y)]=0;//ボード上の値を空きマスに設定
           }
       }
       

    }
    
    pos(x,y){//1次元に変更
        return (y+1) * 9 + x+1; 
    }

    pos_x(p){//2次元に変更
        return p%9-1; 
    }

    pos_y(p){//2次元に変更
        return Math.floor(p/9)-1;//floor最大値
    }
}