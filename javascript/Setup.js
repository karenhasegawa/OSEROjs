class Setup{
    
    //Array_Id = new Array(0);

    constructor(){
        let ArrowId= new Array(0);
                                            console.log("Setup-start");
        ArrowId = this.Start(ArrowId);
  //                                          console.log(ArrowId);
        this.GmameMaker(ArrowId);
        this.View();
    }

    Start(ArrowId){
       new First(ArrowId);
        return ArrowId;
    }

    GmameMaker(ArrowId){
   
       new GameDirecter(ArrowId);
    }

    View(){

    }


}

  
