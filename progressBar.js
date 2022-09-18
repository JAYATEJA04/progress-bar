function whenClicked(){
    let input = document.getElementById('user-input').value;
    let input1 = document.getElementById('user-input');
    let bar = document.getElementById('progress');
    var width = 0;
    // let id = setInterval(frame, 200);

    // function frame(){

    //     if(width >= 10){
    //         clearInterval(id);
    //     } else {
    //         if(input <= 20){
    //             bar.style.width = input + '%';
    //             bar.style.background = "red";
    //             width += input;
    //         } else if(input > 20 && input <= 60){
    //             bar.style.width = input + '%';
    //             bar.style.background = "yellow";
    //             width += input;
    //         } else if(input > 60 && input <= 100){
    //             bar.style.width = input + '%';
    //             bar.style.background = "green";
    //             width += input;
    //         } else{
    //             alert("enter the number in between 1 and 100");
    //             width += input;
    //         }
    //     }
    // }
    if(input <= 20){
        bar.style.width = input + '%';
        bar.style.background = "red";
        width += input;
    } else if(input > 20 && input <= 65){
        bar.style.width = input + '%';
        bar.style.background = "yellow";
        width += input;
    } else if(input > 65 && input <= 100){
        bar.style.width = input + '%';
        bar.style.background = "green";
        width += input;
    } else{
        alert("enter the number in between 1 and 100");
        width += input;
    }
}