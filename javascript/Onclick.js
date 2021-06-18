class Onclick{

    constructor(id){

       let judgment = new Judgment;
       let changecoordinate = new ChangeCoordinate;
       let x,y;

       x = changecoordinate.pos_view_x(id);
       y = changecoordinate.pos_view_y(id);

       judgment.Othello(x,y);

       
    }



}