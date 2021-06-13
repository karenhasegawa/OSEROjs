window.addEventListener('DOMContentLoaded',function(){

    
    for(let i=0;i<64;i++){
    //ボードの作成
        //--------要素--------//
        let newElement = document.createElement("div");
        let name = 'box_'+i;
        newElement.setAttribute("id",name);
        let parentDiv = document.getElementById("frame");
        parentDiv.appendChild(newElement);

        //----------css----------------------//
        newElement.style.backgroundColor = "#025502";
        newElement.style.width = "70px";
        newElement.style.height = "70px";
        newElement.style.margin = "1px 1px 1px 1px";
        newElement.style.float = "left";
        newElement.style.position="relative";
        newElement.style.display="block";

    //駒の作成
        //----------要素----------//
        let newPieace = document.createElement("div");
        let pieace = 'pieace';
        newPieace.setAttribute("class",pieace);
        let parentClass = document.getElementById(name);
        parentClass.appendChild(newPieace);
        //css->main.css


    } 

    //初期設定完了

    setDisc(8,8,1);

    //(x,y)のマスに石を置く
    //d=0:石を消す
    //d=1:黒石を置く
    //d=2:白石を置く
    function setDisc(x,y,d){
        let p = y * 8 + x;//2次元座標を1次元座標に変換
        console.log(p);

    }
    
    
});