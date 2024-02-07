

function somador(){
    var resultAtual = parseInt(document.getElementById("resultAtual").value);
    var sum = 0;
    var i= 0 ;
    for( i= 0 ;i <= resultAtual; i++){
    sum += i;
     
    }
       
    document.getElementById("resultado").innerText = "A Ssoma total é "+sum;
    
    
}
