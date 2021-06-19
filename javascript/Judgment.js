class Judgment{

    constructor(id){
        this.changecoordinate = new ChangeCoordinate;
        this.changepeace = new ChangePieace;
    }
/*  
    0:空マス
    1:黒石
    2:白石
    3:盤外
*/
    Setup_Othello(){
    

        for(let i=0;i<hantei_array.length;i++){//全マスを番外設定
            hantei_array[i]=3;
        } 
        for(let y=0;y<8;y++){
            for(let x=0;x<8;x++){
                let e = this.changecoordinate.pos(x,y);
                hantei_array[e]=0;//ボード上の値を空きマスに設定
                //ゲーム開始の初期位置の設定
                if(x==3 && y ==3){
                    hantei_array[e]=2;
                    this.changepeace.setDisc(x,y,hantei_array[e]);
                }
                if(x==4 && y ==3){
                    hantei_array[e]=1;
                    this.changepeace.setDisc(x,y,hantei_array[e]);
                }
                if(x==3 && y ==4){
                    hantei_array[e]=1;
                    this.changepeace.setDisc(x,y,hantei_array[e]);
                }
                if(x==4 && y ==4){
                    hantei_array[e]=2;
                    this.changepeace.setDisc(x,y,hantei_array[e]);
                }
            }
        }
        
        console.log(hantei_array);

        return 0;
    }

    Othello(x,y,turn){

        let e = this.changecoordinate.pos(x,y);//8×8の2次元座標9×10+1の1次元座標に変更
        let t = turn % 2;//偶数の判定（パス判定では使えない）
        let player=0;
        //let d5;
        this.x = x;
        this.y = y;


        let Vector=[-10,-9,-8,
                     -1, 0, 1,
                      8, 9,10];//八方向ベクトル

        let pieace=Array(7);

        
        if(t==0)player=2;//先手黒に設定
        else player=1;//後手白に設定

        console.log("今は"+player+"の番です。");

        if(hantei_array[e]!=0)return -1;//マスが空いているか。

        for(let j=0;j<9;j++){//8方向判定
            console.log("現在のチェック座標:"+Vector[j]);
            if(player==hantei_array[e+Vector[j]]){
                console.log(Vector[j]+":この方向にはおけません");//原点のとなりに同じ色がある
                j--;
                continue;
            }
            else {//その方向に置けるなら

                for(let i=e+1;hantei_array[i]!=3;i+=Vector[j]){//番外ではない限りチェックし続ける       
                   
                    console.log(hantei_array[i],i);
                    if(hantei_array[i]==hantei_array[i+1])break;//現在地のとなりと同じ色なら

                    else if(hantei_array[i]!=hantei_array[i+1]){//

                        player==1 ? pieace.push(player) : pieace.push(2);
                        console.log("push可能");
                        break;
                    }
    
    
                }
             }

             console.log(pieace);
                   
        }

         /*表示の呼び出し*/
             for(let j=9;j==0;j--){
                for(let i=e;hantei_array[i]!=3;i+=Vector[j]){
                    hantei_array[i]=pieace.pop();
                    console.log(hantei_array[i]);
                    x = this.changecoordinate.pos_x(hantei_array[i]);
                    y = this.changecoordinate.pos_y(hantei_array[i]);
                    this.changepeace.setDisc(x,y,hantei_array[i]);
                }
             }
        return 0;
              
    }

}//クラス終わり

Judgment.Hantei_array = Array(91);
let hantei_array = Judgment.Hantei_array;//ゲーム開始で判定配列を生成