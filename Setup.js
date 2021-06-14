class Setup{

    constructor(){
        console.log("Setup-start");
        this.Start();
    }

    Start(){

        let Array_Id = new Array(0);
        new First(Array_Id);

    }


}







  /*
    setup();

    function Setup(){

        
    }

    //配列の確認用
    //    console.log(Array_Id);
    let pieace = document.querySelector('.pieace');

    //(x,y)のマスに石を置く
    //d=0:石を消す
    //d=1:黒石を置く
    //d=2:白石を置く
    function setDisc(x,y,d){
        let p = y * 8 + x;//2次元座標を1次元座標に変換
        console.log(p);
        let ID = document.getElementById(Array_Id[p]);
        let pieaceElement = ID.firstChild;
   
        pieaceElement.style.display = d == 0 ? "none" : "block";

    if(d > 0){
        pieaceElement.style.backgroundColor = d == 1 ? "black" : "white";
    }

    console.log(pieaceElement);

}

*/
