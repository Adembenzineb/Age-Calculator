

function CalculateAge() {
    const x = document.getElementById("date").value;
    //let yx = x.substring(0, 4);
    //let dx = x.substring(5, 7);
    //let mx = x.substring(8, x.length);
    const bd = new Date(x);

    //console.log(yx)
    //console.log(dx)
    //console.log(mx)


    const today = new Date();

    
    let y = today.getFullYear() - bd.getFullYear();
    let d = today.getDate() - bd.getDate();
    let m = today.getMonth() - bd.getMonth();

    if ( m < 0 || (m === 0 && d < 0)){
        y--;
        m += 12
    }

    if ( d < 0){
        lm = new Date(today.getFullYear(), today.getMonth(),0);
        d += lm.getDate();
        m--;
    }

   

    let age = String(y)+" years "+String(m)+" months "+String(d)+ " days";

    document.getElementById('res').innerHTML = age;









    console.log(today)
}