function generateTable(){
    for (let i = 1; i <= myI.value; i++) {
        // console.log("box"+i)
        myTable.innerHTML += `<tr>`
        for (let j = 1; j <= myJ.value; j++) {
            // console.log(i+"*"+j+"="+i*j)
            myTable.innerHTML += `<td>${i}*${j}=${i*j}</td>`
        }
        myTable.innerHTML += `</tr>`
        // console.log(myI.value + "*" + i +"="+ myI.value*i)
    }
}
