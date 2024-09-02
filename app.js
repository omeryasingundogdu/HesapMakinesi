let ekran = document.getElementById("sonuc");
let numberBir = "";
let numberIki = "";
let islem = "";

let numberPi = Math.PI;

function ekle(value) {
  ekran.value += value;
}
function operathor(operator) {
  numberBir = ekran.value;
  numberIki = "";
  islem = operator;
  ekran.value = "";
  console.log("ilk sayı: ", numberBir);
}

function sil() {
  ekran.value = ekran.value.slice(0, -1);
}

function fullSil() {
  ekran.value = ekran.value.slice(0, -100000000000);
  numberBir = "";
  numberIki = "";
  islem = "";
  console.clear();
}
function pi() {
  ekran.value = numberPi;
}
function leblebi() {
  ekran.value = "1837837";
}

function hesapla() {
  if (numberIki == "") {
    numberIki = ekran.value;
  } else {
    numberBir = ekran.value;
  }

  console.log("ikinci sayı: ", numberIki, "ilk sayı: ", numberBir);

  switch (islem) {
    case "+":
      sonuc = parseFloat(numberBir) + parseFloat(numberIki);
      break;
    case "-":
      sonuc = parseFloat(numberBir) - parseFloat(numberIki);
      break;
    case "*":
      sonuc = parseFloat(numberBir) * parseFloat(numberIki);
      break;
    case "/":
      sonuc = parseFloat(numberBir) / parseFloat(numberIki);
      break;
    case "pi":
      sonuc = parseFloat(Math.PI);
      break;
    default:
      sonuc = "Hatalı işlem";
  }
  ekran.value = sonuc;
}

let esit = (document.getElementById("esittir").onclick = hesapla);

function kopyala() {
  let metin = document.getElementById("sonuc");
  metin.select();
  document.execCommand("copy");
  alert("Kopyalandı: " + metin.value);
}
