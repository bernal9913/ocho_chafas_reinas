var count = 0;
function clickcell(imon){
    if((window.getComputedStyle(imon).backgroundImage)=="none" ) {
        if(count != 8){
            count++; 
            imon.style="background-image:url(./common/cat.png); background-size: cover; ";
        } 
        
    }
    else {
        count--;
        imon.style="background-image:none;";
    }
    document.getElementById("div_counter").innerHTML = "Reinas colocadas: " + count ;
}

function simulacion(){
    alert("viva el pri");
}

function restartTable(counter){
    
    var celdas=document.getElementById("tb_chess").getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style="backgroundImage:none";    
    }
    count = counter;
    //document.getElementById("div_contador").innerHTML="reinascolocadas:"+ contador;;
    document.getElementById("div_counter").innerHTML = "Reinas colocadas: " + count ;

}

function sol1(){
    restartTable(8);
    var cell = document.getElementById("tb_chess");
    cell.rows[0].cells[4].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[1].cells[1].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[2].cells[3].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[3].cells[6].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[4].cells[2].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[5].cells[7].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[6].cells[5].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[7].cells[0].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
}

function sol2(){
    restartTable(8);
    var cell = document.getElementById("tb_chess");
    cell.rows[0].cells[4].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[1].cells[2].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[2].cells[7].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[3].cells[3].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[4].cells[6].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[5].cells[0].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[6].cells[5].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
    cell.rows[7].cells[1].style="background-image:url(./common/cat.png); background-size: cover; background-repeat:no-repeat; background-repeat:no-repeat;";
}