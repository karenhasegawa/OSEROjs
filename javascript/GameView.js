function gameview(turn){
 
    let color;
    let view = document.querySelector('.coma_turn');

    let t = turn % 2;
    if(t==0)color="黒";//後手白に設定(偶数)
    else color="白";//先手黒に設定

    view.insertAdjacentHTML('beforeend','<br>['+turn+']'+color+' '+"場所");
}

