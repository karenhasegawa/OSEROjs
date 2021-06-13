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
        parentDiv.style.margin = "6px 6px 6px 6px";

    //駒の作成
        //----------要素----------//
        let newPieace = document.createElement("div");
        let pieace = 'pieace';
        newPieace.setAttribute("class",pieace);
        let parentClass = document.getElementById(name);
        console.log(parentClass);
        parentClass.appendChild(newPieace);





    }   
});