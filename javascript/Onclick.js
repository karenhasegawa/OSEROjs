class Onclick extends GameDirecter{

    constructor(id){

        super();
      this.Conect(id);
    }

    Conect(id){
                      
       let changecoordinate = new ChangeCoordinate;
       let x,y;

       x = changecoordinate.pos_view_x(id);
       y = changecoordinate.pos_view_y(id);
        super.Conect(x,y);
    }

}