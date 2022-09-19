function whenClicked(){
    let input = document.getElementById('user-input').value;
    let input1 = document.getElementById('user-input');
    let bar = document.getElementById('progress');
    var width = 0;
    if(input <= 20){
        bar.style.width = 20 + '%';
        bar.style.background = "red";
        width += input;
    } else if(input > 20 && input <= 65){
        bar.style.width = 65 + '%';
        bar.style.background = "yellow";
        width += input;
    } else if(input > 65){
        bar.style.width = 99 + '%';
        bar.style.background = "green";
        width += input;
    }
}