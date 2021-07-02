class ChangeCoordinate {

    pos_view(x,y){
       
        return y * 8 + x;//8×8の2次元座標を[64]の1次元座標に変換
    }
    
    // [64]の1次元座標を8×8の2次元座標に変換
    pos_view_x(id){
        return id%8;
    }

    pos_view_y(id){
        return Math.floor(id/8);//余り切り捨て
    }

    pos(x,y){//8×8の2次元座標9×10+1の1次元座標に変更
        return (y+1) * 9 + x+1; 
    }

    pos_x(p){//9×10+1の1次元座標を8×8の2次元座標に変更
        return p%9-1; 
    }

    pos_y(p){//9×10+1の1次元座標を8×8の2次元に変更
        return Math.floor(p/9)-1;//floor最大値
    }

}