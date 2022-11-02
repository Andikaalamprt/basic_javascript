function cekbb(nama, bb){
    this.nama = nama;
    this.bb = bb;
    this.cekstatus = function(){
        if(bb >= 55 && bb <= 90){
        alert("Kamu punya berat badan buruk!")
        console.log("buruk")
        }else if(bb >= 70 && bb <= 120){
        alert("Kamu perlu olahraga!")
        console.log("Olahraga!")
        }else if(bb >= 120){
        alert("Kamu harus kurangi makan!")
        console.log("Kurangi makan!")
        }else{
        alert("Kamu harus diet!")
        console.log("diet!")
    }
}
}

var romi = new cekbb("andika", 80)
console.log(andika.cekstatus())