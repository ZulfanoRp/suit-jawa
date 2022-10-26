let tanya = true;

while (tanya) {
    
    // menangkap pilihan player
    let player = prompt("pilih : gajah, orang, semut");

    // menangkap pilihan computer
    // membangkitkan bilangan random
    let computer = Math.random();

    if (computer < 0.34) {
        computer = "gajah";
    } if (computer >= 0.34 && computer < 0.67) {
        computer = "orang";
    } else {
        computer = "semut";
    }

    // console.log(computer);


    // menentukan rules
    let hasil = "";
    if (player == computer) {
        hasil = "SERI!";
    } else if (player == "gajah") {

        hasil = (computer == "orang") ? "MENANG!" : "KALAH!";

    } else if (player == "orang") {

        hasil = (computer == "semut") ? "MENANG!" : "KALAH!";

    } else if (player == "semut") {
        // if (computer == "gajah") {
        //     hasil = "MENANG!"
        // } else {
        //     hasil = "KALAH!";;
        // }

        hasil (computer == "gajah") ? "MENANG!" : "KALAH!";
    } else {
        hasil = "memasukan pilihan yang salah";
    }


    // tampilkan hasilnya
    alert(`Kamu Memilih : ${player} dan Komputer memilih : ${computer} \nmaka hasilnya ${hasil}`)

    tanya = confirm("Mau main lagi? ");
}

alert("Terimakasih sudah bermain");