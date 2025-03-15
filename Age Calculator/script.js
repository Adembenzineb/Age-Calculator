

function CalculateAge() {
    const x = document.getElementById("date").value;
    const bd = new Date(x);


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
