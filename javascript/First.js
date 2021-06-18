class First{

    constructor(ArrowId){
 //                                      console.log(ArrowId);
        this.Roop(ArrowId);
 //                                       console.log(ArrowId);
    }

    Roop(arrowid){

        let name;

        for(let i=0;i<64;i++){
            name = i;
            this.BoardMaker(name);
            this.PieaceMaker(name);
            //----------ID保存------------------//
            arrowid.push(name);
        }

//                                          console.log(arrowid);
        return arrowid;
        
    }

    BoardMaker(name){//ボードの作成
        
        //--------要素--------// 
        let newElement = document.createElement("div");
        newElement.setAttribute("id",name);
        let parentDiv = document.getElementById("frame");
        parentDiv.appendChild(newElement);

        //------onclick追加-----------//
        let input =document.getElementById(name);
        input.setAttribute("onclick","getID(this)");

        //----------css----------------------//
            newElement.style.backgroundColor = "#025502";
            newElement.style.width = "70px";
            newElement.style.height = "70px";
            newElement.style.margin = "1px 1px 1px 1px";
            newElement.style.float = "left";
            newElement.style.position="relative";
            newElement.style.display="block";

    }

    PieaceMaker(name){//駒の作成
        
        //----------要素----------//
        let newPieace = document.createElement("div");
        let pieace = 'pieace';
        newPieace.setAttribute("class",pieace);
        let parentClass = document.getElementById(name);
        parentClass.appendChild(newPieace);//css->main.css

    }


}

/*初期設定完了*/
