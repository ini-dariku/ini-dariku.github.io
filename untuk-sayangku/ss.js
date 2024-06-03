document.querySelector(".hilang1").addEventListener("click", notif1);
document.querySelector(".hilang2").addEventListener("click", notif2);
document.querySelector(".hilang3").addEventListener("click", notif3);
document.querySelector(".hilang4").addEventListener("click", notif4);
document.querySelector(".hilang5").addEventListener("click", kirimpesan);
document.querySelector(".hilang6").addEventListener("click", kirimpesan);
document.querySelector(".hilang7").addEventListener("click", kirimpesan);
// ============================
document.querySelector(".hilang8").addEventListener("click", notif8);
document.querySelector(".hilang9").addEventListener("click", notif9);
document.querySelector(".hilang10").addEventListener("click", notif10);
document.querySelector(".hilang11").addEventListener("click", notif11);
document.querySelector(".hilang12").addEventListener("click", notif12);
document.querySelector(".hilang13").addEventListener("click", notif13);
document.querySelector(".hilang14").addEventListener("click", notif14);
document.querySelector(".hilang15").addEventListener("click", kirimpesan);
// Custom
var pengirim = "";
var musik = "https://dekatutorial.github.io/v/mylove/musik.mp3";
var ucapansatu =
  "Assalamu'alaikum mas😊##Barakallah fi umrik ya....#Diumur mas yang udah bertambah ini, aku cuma mau bilang makasih karna udah hadir dihidup aku, jangan bosen jadi orang baik ya, jangan bosen buat selalu bersyukur, jangan bosen jadi gantengnya aku ups🤫🤫.";
var ucapandua = "Maaf aku blom bisa ngasih apa2 ke mas. Aku cuman bisa berdoa apapun yang terbaik buat mas kedepannya, buat segala impian mas dan buat kita😁#Doa yang terbaik🙌🙌";
var ucapantiga = "Love youuu mas🫶🫶#Maap aku gabisa jadi cewe yang romantis🤧";
var ucapanempat = "Jadi, Mau hadiah apa nih???";
// ============================
var ucapanlima = "I love u the most will ❤️##Much love, san 💍";
var ucapanenam = "=============";
var ucapantujuh = "My prayers are always with you and your family";
var ucapandelapan = "You are one of the reasons I am patient and enthusiastic about my day. You are the most beautiful gift that God has given me.";
var ucapansembilan = "You know Sometimes, I feel like taking my heart out of my chest to show you how much I love you";
var ucapansepuluh = "Words are not enough to correct what you mean around it.";
var ucapansebelas = "What is clear is that I really love you";
var ucapanduabelas = "Happy birthday to someone so sweet!";
var ucapantigabelas = "Wait for another interesting gift from me which is very simple";
var ucapanempatbelas = "I love you..#From me J";
var background1 = "https://dekatutorial.github.io/v/nvnrl/bg.jpg";
var background2 = "https://dekatutorial.github.io/v/nvnrl/bg.jpg";
var noWhatsapp = "";
var pesanWhatsapp = "";

var klik = new Audio("https://dekatutorial.github.io/v/mylove/klik.mp3");
klik.loop = false;
klik.autoplay = false;

// ======================================
var audio = new Audio(musik);
audio.loop = true;
audio.autoplay = true;
var notif = new Audio("https://dekatutorial.github.io/v/mylove/notif.mp3");
if (pengirim) {
  document.querySelector(".nama1").innerHTML = pengirim;
  document.querySelector(".nama2").innerHTML = pengirim;
}
// if (background1) {
//   document.querySelector(".background2").style.backgroundImage = "url('" + background1 + "')";
// }
if (background2) {
  document.querySelector(".background1").style.backgroundImage = "url('" + background2 + "')";
}
$(window).on("load", function () {
  start();
});
// ============================================
var swalo = Swal.mixin({ allowOutsideClick: false, confirmButtonText: "OK" });

async function start() {
  await swalo.fire({ title: "Hi Sayang!" });

  klik.play();
  // gantiBg();

  audio.play();
  await swalo.fire({ title: "Are you feeling okay?", showDenyButton: 1, confirmButtonText: "Ok", denyButtonText: "Cancel", reverseButtons: true }).then(async (e) => {
    if (e.isConfirmed) {
      klik.play();
      await swalo.fire({ title: "I Love You❤️" });
    }
    if (e.isDenied) {
      klik.play();
      await swalo.fire({ title: "Aww! I'll give you a hug.\nCheer up !", imageUrl: "https://dekatutorial.github.io/v/peluk.gif" });
      klik.play();
      await swalo.fire({ title: "Are you feeling better?", showDenyButton: 1, confirmButtonText: "Ok", denyButtonText: "Cancel", reverseButtons: true }).then(async (e) => {
        if (e.isConfirmed) {
          klik.play();
          await swalo.fire({ title: "I Love You❤️" });
        }
        if (e.isDenied) {
          klik.play();
          await swalo.fire({ title: "Aww! I'll give you a hug.\nCheer up !", imageUrl: "https://dekatutorial.github.io/v/peluk.gif" });
        }
      });
    }

    klik.play();
    await swalo.fire({ title: "Aku mau sampein sesuatuu..." });

    klik.play();
    await swalo.fire({ title: "Kepoo yah?", showDenyButton: 1, confirmButtonText: "BANGETT", denyButtonText: "IYAA", reverseButtons: true });

    klik.play();
    await swalo.fire({ title: "HAHA okayy" });

    klik.play();
    $(".loading").fadeOut("slow");
  });
}
// ====================================
function notif1() {
  klik.play();
  audio.play();
  document.querySelector(".hilang1").style.display = "none";
  document.querySelector(".hilang2").style.display = "inline-block";
  notif.play();
  document.querySelector(".notif1").style.transform = "translateX(0)";
  typeWritersatu();
}

function notif2() {
  klik.play();
  notif.play();
  document.querySelector(".hilang2").style.display = "none";
  document.querySelector(".hilang3").style.display = "inline-block";
  document.querySelector(".notif1").style.display = "none";
  document.querySelector(".notif2").style.transform = "translateX(0)";
  typeWriterdua();
}
function notif3() {
  klik.play();
  notif.play();
  document.querySelector(".hilang3").style.display = "none";
  document.querySelector(".hilang4").style.display = "inline-block";
  document.querySelector(".notif2").style.display = "none";
  document.querySelector(".notif3").style.transform = "translateX(0)";

  typeWritertiga();
}

function notif4() {
  klik.play();
  notif.play();
  document.querySelector(".hilang4").style.display = "none";
  document.querySelector(".hilang5").style.display = "inline-block";
  document.querySelector(".notif3").style.display = "none";
  document.querySelector(".notif4").style.transform = "translateX(0)";

  typeWriterempat();
}

function notif5() {
  klik.play();
  notif.play();
  document.querySelector(".hilang5").style.display = "none";
  document.querySelector(".hilang6").style.display = "inline-block";
  document.querySelector(".notif4").style.display = "none";
  document.querySelector(".notif5").style.transform = "translateX(0)";

  typeWriterlima();
}

function notif6() {
  klik.play();
  notif.play();
  document.querySelector(".hilang6").style.display = "none";
  document.querySelector(".hilang7").style.display = "inline-block";
  document.querySelector(".notif5").style.display = "none";
  document.querySelector(".notif6").style.transform = "translateX(0)";

  typeWriterenam();
}

function notif7() {
  klik.play();
  notif.play();
  document.querySelector(".hilang7").style.display = "none";
  document.querySelector(".hilang8").style.display = "inline-block";
  document.querySelector(".notif6").style.display = "none";
  document.querySelector(".notif7").style.transform = "translateX(0)";

  typeWritertujuh();
}

function notif8() {
  klik.play();
  notif.play();
  document.querySelector(".hilang8").style.display = "none";
  document.querySelector(".hilang9").style.display = "inline-block";
  document.querySelector(".notif7").style.display = "none";
  document.querySelector(".notif8").style.transform = "translateX(0)";

  typeWriterdelapan();
}

function notif9() {
  klik.play();
  notif.play();
  document.querySelector(".hilang9").style.display = "none";
  document.querySelector(".hilang10").style.display = "inline-block";
  document.querySelector(".notif8").style.display = "none";
  document.querySelector(".notif9").style.transform = "translateX(0)";

  typeWritersembilan();
}

function notif10() {
  klik.play();
  notif.play();
  document.querySelector(".hilang10").style.display = "none";
  document.querySelector(".hilang11").style.display = "inline-block";
  document.querySelector(".notif9").style.display = "none";
  document.querySelector(".notif10").style.transform = "translateX(0)";

  typeWritersepuluh();
}

function notif11() {
  klik.play();
  notif.play();
  document.querySelector(".hilang11").style.display = "none";
  document.querySelector(".hilang12").style.display = "inline-block";
  document.querySelector(".notif10").style.display = "none";
  document.querySelector(".notif11").style.transform = "translateX(0)";

  typeWritersebelas();
}

function notif12() {
  klik.play();
  notif.play();
  document.querySelector(".hilang12").style.display = "none";
  document.querySelector(".hilang13").style.display = "inline-block";
  document.querySelector(".notif11").style.display = "none";
  document.querySelector(".notif12").style.transform = "translateX(0)";

  typeWriterduabelas();
}

function notif13() {
  klik.play();
  notif.play();
  document.querySelector(".hilang13").style.display = "none";
  document.querySelector(".hilang14").style.display = "inline-block";
  document.querySelector(".notif12").style.display = "none";
  document.querySelector(".notif13").style.transform = "translateX(0)";

  typeWritertigabelas();
}

function notif14() {
  klik.play();
  notif.play();
  document.querySelector(".hilang14").style.display = "none";
  document.querySelector(".hilang15").style.display = "inline-block";
  document.querySelector(".notif13").style.display = "none";
  document.querySelector(".notif14").style.transform = "translateX(0)";

  typeWriterempatbelas();
}

var i = 0;
var speed = 120;
var txtsatu = ucapansatu;
function typeWritersatu() {
  if (i < txtsatu.length) {
    document.querySelector(".isi1").scrollTop = document.querySelector(".isi1").scrollHeight;
    if (txtsatu.charAt(i) == "#") {
      document.querySelector(".gombal1").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal1").innerHTML += txtsatu.charAt(i);
    }

    i++;
    setTimeout(typeWritersatu, speed);
  }
}

var j = 0;
var txtdua = ucapandua;
function typeWriterdua() {
  if (j < txtdua.length) {
    document.querySelector(".isi2").scrollTop = document.querySelector(".isi2").scrollHeight;
    if (txtdua.charAt(j) == "#") {
      document.querySelector(".gombal2").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal2").innerHTML += txtdua.charAt(j);
    }

    j++;
    setTimeout(typeWriterdua, speed);
  }
}

var k = 0;
var txttiga = ucapantiga;
function typeWritertiga() {
  if (k < txttiga.length) {
    document.querySelector(".isi3").scrollTop = document.querySelector(".isi3").scrollHeight;
    if (txttiga.charAt(k) == "#") {
      document.querySelector(".gombal3").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal3").innerHTML += txttiga.charAt(k);
    }

    k++;
    setTimeout(typeWritertiga, speed);
  }
}

var l = 0;
var txtempat = ucapanempat;
function typeWriterempat() {
  if (l < txtempat.length) {
    document.querySelector(".isi4").scrollTop = document.querySelector(".isi4").scrollHeight;
    if (txtempat.charAt(l) == "#") {
      document.querySelector(".gombal4").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal4").innerHTML += txtempat.charAt(l);
    }

    l++;
    setTimeout(typeWriterempat, speed);
  }
}

var m = 0;
var txtlima = ucapanlima;
function typeWriterlima() {
  if (m < txtlima.length) {
    document.querySelector(".isi5").scrollTop = document.querySelector(".isi5").scrollHeight;
    if (txtlima.charAt(m) == "#") {
      document.querySelector(".gombal5").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal5").innerHTML += txtlima.charAt(m);
    }

    m++;
    setTimeout(typeWriterlima, speed);
  }
}

var n = 0;
var txtenam = ucapanenam;
function typeWriterenam() {
  if (n < txtenam.length) {
    document.querySelector(".isi6").scrollTop = document.querySelector(".isi6").scrollHeight;
    if (txtenam.charAt(n) == "#") {
      document.querySelector(".gombal6").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal6").innerHTML += txtenam.charAt(n);
    }

    n++;
    setTimeout(typeWriterenam, speed);
  }
}

var o = 0;
var txttujuh = ucapantujuh;
function typeWritertujuh() {
  if (o < txttujuh.length) {
    document.querySelector(".isi7").scrollTop = document.querySelector(".isi7").scrollHeight;
    if (txttujuh.charAt(o) == "#") {
      document.querySelector(".gombal7").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal7").innerHTML += txttujuh.charAt(o);
    }

    o++;
    setTimeout(typeWritertujuh, speed);
  }
}

var p = 0;
var txtdelapan = ucapandelapan;
function typeWriterdelapan() {
  if (p < txtdelapan.length) {
    document.querySelector(".isi8").scrollTop = document.querySelector(".isi8").scrollHeight;
    if (txtdelapan.charAt(p) == "#") {
      document.querySelector(".gombal8").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal8").innerHTML += txtdelapan.charAt(p);
    }

    p++;
    setTimeout(typeWriterdelapan, speed);
  }
}

var q = 0;
var txtsembilan = ucapansembilan;
function typeWritersembilan() {
  if (q < txtsembilan.length) {
    document.querySelector(".isi9").scrollTop = document.querySelector(".isi9").scrollHeight;
    if (txtsembilan.charAt(q) == "#") {
      document.querySelector(".gombal9").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal9").innerHTML += txtsembilan.charAt(q);
    }

    q++;
    setTimeout(typeWritersembilan, speed);
  }
}

var r = 0;
var txtsepuluh = ucapansepuluh;
function typeWritersepuluh() {
  if (r < txtsepuluh.length) {
    document.querySelector(".isi10").scrollTop = document.querySelector(".isi10").scrollHeight;
    if (txtsepuluh.charAt(r) == "#") {
      document.querySelector(".gombal10").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal10").innerHTML += txtsepuluh.charAt(r);
    }

    r++;
    setTimeout(typeWritersepuluh, speed);
  }
}

var s = 0;
var txtsebelas = ucapansebelas;
function typeWritersebelas() {
  if (s < txtsebelas.length) {
    document.querySelector(".isi11").scrollTop = document.querySelector(".isi11").scrollHeight;
    if (txtsebelas.charAt(s) == "#") {
      document.querySelector(".gombal11").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal11").innerHTML += txtsebelas.charAt(s);
    }

    s++;
    setTimeout(typeWritersebelas, speed);
  }
}

var t = 0;
var txtduabelas = ucapanduabelas;
function typeWriterduabelas() {
  if (t < txtduabelas.length) {
    document.querySelector(".isi12").scrollTop = document.querySelector(".isi12").scrollHeight;
    if (txtduabelas.charAt(t) == "#") {
      document.querySelector(".gombal12").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal12").innerHTML += txtduabelas.charAt(t);
    }

    t++;
    setTimeout(typeWriterduabelas, speed);
  }
}

var u = 0;
var txttigabelas = ucapantigabelas;
function typeWritertigabelas() {
  if (u < txttigabelas.length) {
    document.querySelector(".isi13").scrollTop = document.querySelector(".isi13").scrollHeight;
    if (txttigabelas.charAt(u) == "#") {
      document.querySelector(".gombal13").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal13").innerHTML += txttigabelas.charAt(u);
    }

    u++;
    setTimeout(typeWritertigabelas, speed);
  }
}

var v = 0;
var txtempatbelas = ucapanempatbelas;
function typeWriterempatbelas() {
  if (v < txtempatbelas.length) {
    document.querySelector(".isi14").scrollTop = document.querySelector(".isi14").scrollHeight;
    if (txtempatbelas.charAt(v) == "#") {
      document.querySelector(".gombal14").innerHTML += "<br>";
    } else {
      document.querySelector(".gombal14").innerHTML += txtempatbelas.charAt(v);
    }

    v++;
    setTimeout(typeWriterempatbelas, speed);
  }
}

async function kirimpesan() {
  klik.play();
  var { value: pesanku } = await swalo.fire({ imageUrl: "https://dekatutorial.github.io/v/mylove/cutie1.gif", title: "Tulis hadiah", input: "textarea", confirmButtonText: "Kirim" });
  klik.play();
  if (pesanku) {
    await swalo.fire("Kirim jawabannya ke wa aku ya");
    if (noWhatsapp > 10) location.assign("https://wa.me/" + noWhatsapp + "?text=" + pesanku);
    else location.assign("https://wa.me/?text=" + pesanku);
  }
  // if (pesanku) {
  //   swalo.fire({
  //     title: "Mengirim pesan",
  //     didOpen: () => {
  //       swalo.showLoading();
  //     },
  //   });
  //   swalo.showLoading();

  //   var data = new FormData();
  //   data.append("pesan", pesanku);

  //   // console.log(...payload);

  //   fetch("func.php?act=add", {
  //     method: "POST",
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then(async (data) => {
  //       // alert(data.Status);
  //       if (data.Status == 200) {
  //         await swalo.fire({
  //           icon: "success",
  //           title: "Pesan berhasil dikirim!",
  //         });
  //       } else if (data.Status == 201) {
  //         await swalo.fire({
  //           icon: "error",
  //           title: "Pesan gagal terkirim!",
  //           text: "Silahkan ulangi lagi",
  //         });
  //       }
  //     });
  // }
  else {
    await swalo.fire({ imageUrl: "https://dekatutorial.github.io/v/mylove/cutie2.gif", confirmButtonText: "Ok", title: "Jangan dikosongin dong" });
    klik.play();
    kirimpesan();
  }
}
async function openmodal() {
  klik.play();
  var { value: pesanku } = await swalo.fire({ imageUrl: "https://dekatutorial.github.io/v/mylove/cutie1.gif", title: "Tulis pesan", input: "textarea", confirmButtonText: "Kirim" });
  klik.play();
  if (pesanku) {
    swalo.fire({
      title: "Mengirim pesan",
      didOpen: () => {
        swalo.showLoading();
      },
    });
    swalo.showLoading();

    var data = new FormData();
    data.append("pesan", pesanku);

    // console.log(...payload);

    fetch("func.php?act=add", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then(async (data) => {
        // alert(data.Status);
        if (data.Status == 200) {
          await swalo.fire({
            icon: "success",
            title: "Pesan berhasil dikirim!",
          });
        } else if (data.Status == 201) {
          await swalo.fire({
            icon: "error",
            title: "Pesan gagal terkirim!",
            text: "Silahkan ulangi lagi",
          });
        }
      });
  } else {
    await swalo.fire({ imageUrl: "https://dekatutorial.github.io/v/mylove/cutie2.gif", confirmButtonText: "Ok", title: "Jangan dikosongin dong" });
    klik.play();
    openmodal();
  }
}

function tanggal() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  let hari = days[d.getDay()];
  let tgl = d.getDate();
  let bln = months[d.getMonth()];
  document.querySelector(".tgl").innerHTML = hari + ", " + tgl + " " + bln;
}
function startTime() {
  tanggal();
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  h = checkTime(h);
  m = checkTime(m);
  document.getElementById("jam").innerHTML = h + ":" + m;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
// startTime();

// function cfvds(lengtf) {
//   var hsl = "";
//   var apl = "abcdefghijklmnopqrstuvwxyz";
//   for (var icfvsd = 0; icfvsd < lengtf; icfvsd++) {
//     var rind = Math.floor(Math.random() * apl.length);
//     hsl += apl.charAt(rind);
//   }
//   return hsl;
// }
// var ysa = Math.floor(Math.random() * 20);
// for (var indsk = 0; indsk < ysa; indsk++) {
//   var cdv = document.createElement("div");
//   var prg = document.createElement("p");
//   cdv.appendChild(prg);
//   window.document.body.appendChild(cdv);
// }

// var cls = cfvds(10);

// var divcr = document.createElement("div");
// divcr.innerHTML = atob("PHAgY2xhc3MgPSI=") + cls + atob("IiBvbmNsaWNrPSJhbGVydCgnVW50dWsgdGFucGEgd2F0ZXJtYXJrIHNpbGFoa2FuIG9yZGVyJykiID5NYWRlIGJ5IERla2EgVHV0b3JpYWw8L3A+");
// window.document.body.appendChild(divcr);

// var ds = document.createElement("style");
// ds.innerHTML =
//   "." +
//   cls +
//   atob(
//     "e3RleHQtZGVjb3JhdGlvbjogbm9uZTsgcG9zaXRpb246IGZpeGVkOyBib3R0b206IDEwcHg7IGxlZnQ6IDA7IHJpZ2h0OiAwOyB3aWR0aDogZml0LWNvbnRlbnQ7IG1hcmdpbjogYXV0bzsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGNvbG9yOiB3aGl0ZTsgei1pbmRleDogOTk7IG9wYWNpdHk6IDAuNTsgZm9udC1zaXplOiAwLjhlbTsgfQ=="
//   );
// window.document.head.appendChild(ds);

// var ysk = Math.floor(Math.random() * 20);
// for (var injdk = 0; injdk < ysk; injdk++) {
//   var cdv = document.createElement("div");
//   var prg = document.createElement("p");
//   cdv.appendChild(prg);
//   window.document.body.appendChild(cdv);
// }
