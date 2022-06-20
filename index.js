const boxes = document.querySelectorAll(".box");
const reset = document.querySelector('button');
reset.style.visibility='hidden';
let bek = 0;
let game = true;

const onClick = (event) => {
    clickTS();
    check();
    let box = event.target;
        if (bek % 2 == 0) {
        if (box.innerHTML  == '❌' || box.innerHTML == '⭕'){
            return;}
            else{
                box.innerHTML = "❌"
                bek +=1;}
        
        } else{
            if (box.innerHTML == '❌' || box.innerHTML == '⭕'){
                return;
            }
            else{
                box.innerHTML = '⭕'
                bek += 1;
            };
        }  
        check();
    }



const clickTS = () => {
    console.log("play")
    audio = document.getElementById('audio')
    audio.play()
}


const check=()=>{
    if (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML){
        let ezz = boxes[0].innerHTML == "❌"  ? "grey" : "rgb(3, 29, 51)";
        boxes[0].style.background = ezz;
        boxes[1].style.background = ezz;
        boxes[2].style.background = ezz;
        game = false;
        if (game==false){
            reset.style.visibility = 'visible';} 
        if(reset.style.visibility == 'visible' && reset.clicked == true){
            boxes.innerHTML = '';}
        return}
        
        else if (boxes[3].innerHTML != "" && boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML){
        let ezz = boxes[3].innerHTML == "❌"  ? "grey" : "rgb(3, 29, 51)";
        boxes[3].style.background = ezz;
        boxes[4].style.background = ezz;
        boxes[5].style.background = ezz;
        game = false;
        if (game==false){
            reset.style.visibility = 'visible';} 
        if(reset.style.visibility == 'visible' && reset.clicked == true){
            boxes.innerHTML = '';}
        return}
    
    
        else if (boxes[6].innerHTML != "" && boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML){
        let ezz = boxes[6].innerHTML == "❌"  ? "grey" : "rgb(3, 29, 51)";
        boxes[6].style.background = ezz;
        boxes[7].style.background = ezz;
        boxes[8].style.background = ezz;
        game = false;
        if (game==false){
            reset.style.visibility = 'visible';} 
        if(reset.style.visibility == 'visible' && reset.clicked == true){
            boxes.innerHTML = '';}
        return}
    
    
        else if (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML){
        let ezz = boxes[0].innerHTML == "❌"  ? "grey" : "rgb(3, 29, 51)";
        boxes[0].style.background = ezz;
        boxes[4].style.background = ezz;
        boxes[8].style.background = ezz;
        game = false;
        if (game==false){
            reset.style.visibility = 'visible';} 
        if(reset.style.visibility == 'visible' && reset.clicked == true){
            boxes.innerHTML = '';}
        return}
    
    
        else if (boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML){
        let ezz = boxes[2].innerHTML == "❌"  ? "grey" : "rgb(3, 29, 51)";
        boxes[2].style.background = ezz;
        boxes[4].style.background = ezz;
        boxes[6].style.background = ezz;
        game = false;
        if (game==false){
            reset.style.visibility = 'visible';} 
        if(reset.style.visibility == 'visible' && reset.clicked == true){
            boxes.innerHTML = '';}
        return}
    
    
        else if (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML){
        let ezz = boxes[0].innerHTML == "❌"  ? "grey" : "rgb(3, 29, 51)";
        boxes[0].style.background = ezz;
        boxes[3].style.background = ezz;
        boxes[6].style.background = ezz;
        game = false;
        if (game==false){
            reset.style.visibility = 'visible';} 
        if(reset.style.visibility == 'visible' && reset.clicked == true){
            boxes.innerHTML = '';}
        return}
    
    
        else if (boxes[1].innerHTML != "" && boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML){
        let ezz = boxes[1].innerHTML == "❌"  ? "grey" : "rgb(3, 29, 51)";
        boxes[4].style.background = ezz;
        boxes[1].style.background = ezz;
        boxes[7].style.background = ezz;
        game = false;
        if (game==false){
            reset.style.visibility = 'visible';} 
        if(reset.style.visibility == 'visible' && reset.clicked == true){
            boxes.innerHTML = '';}
        return}
    
    
        else if (boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML){
        let ezz = boxes[2].innerHTML == "❌"  ? "grey" : "rgb(3, 29, 51)";
        boxes[8].style.background = ezz;
        boxes[5].style.background = ezz;
        boxes[2].style.background = ezz;
        game = false;
        if (game==false){
            reset.style.visibility = 'visible';} 
        if(reset.style.visibility == 'visible' && reset.clicked == true){
            boxes.innerHTML = '';}
        return} 
    }




 

for (let i = 0; i < 9; i++) {
    boxes[i].addEventListener("click", onClick)
}

