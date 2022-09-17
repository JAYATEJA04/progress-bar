function whenClicked(){
    let input = document.getElementById('user-input').value;
    let input1 = document.getElementById('user-input');
    let bar = document.getElementById('bar');
    var width = 0;

    if(input <= 20){
        bar.style.width = input + '%';
        bar.style.background = "red";
    } else if(input > 20 && input <= 60){
        bar.style.width = input + '%';
        bar.style.background = "yellow";
    } else if(input > 60 && input <= 100){
        bar.style.width = input + '%';
        bar.style.background = "green";
    } else{
        alert("enter the number in between 1 and 100");
    }
}