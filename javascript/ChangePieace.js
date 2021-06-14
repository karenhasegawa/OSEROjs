class ChangePieace extends GameDirecter{//子クラス、親クラスのメぞっとを使って拡張可能

    constructor(Array_Id){
       super(Array_Id);
    }
    
    //(x,y)のマスに石を置く
    //d=0:石を消す
    //d=1:黒石を置く
    //d=2:白石を置く
    first_Coord_setDisc(){
      
        super.setDisc(3,3,2);
        super.setDisc(4,3,1);
        super.setDisc(3,4,1);
        super.setDisc(4,4,2);

    }
    

}