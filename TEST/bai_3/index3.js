let count = 0;

const begin = () => {
    let result = Math.floor(Math.random() * 10);
    let btnStart = document.getElementById('btn-start');
    console.log(result);
    count ++;

    let number = document.getElementById("num").value;
    console.log(number);

    if(count > 3) {
        alert("Hết lượt rồi bạn ơi!");
        btnStart.setAttribute("disabled", true);
        document.getElementById("num").disabled = true;
    } else {
        if(number <1 || number >10) {
            alert("Vui lòng nhập lại");
        } else {
            if(number === result) {
                alert("Chính xác");
            } else {
                alert(`Số đúng là: ${result}` );
            }
    
        }
    }
}
const reset = () => {
     let btnStart = document.getElementById('btn-start');
     btnStart.removeAttribute("disabled");
     document.getElementById("num").disabled = false;
     count = 0;
}
