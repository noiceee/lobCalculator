function onLob() {
    let hehe = document.getElementById('output');
    let p1 = document.getElementById('person1').value;
    let p2 = document.getElementById('person2').value;
    if (p1 == "" || p2 == ""){
        alert("Error : Invalid Input\nAise kaise 🌚");
    }else{
        if (p1.toUpperCase() == "KARTIKEY" || p2.toUpperCase() == "KARTIKEY"){
            hehe.innerHTML = "100";
        }
        else if (p1.toUpperCase() == "KARTIKEY SINGH" || p2.toUpperCase() == "KARTIKEY SINGH"){
            hehe.innerHTML = "100";
        }else{
            hehe.innerHTML = Math.floor(Math.random()*101);
        }
    }
}
// Math.floor(Math.random()*101)