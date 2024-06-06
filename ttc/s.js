var ucapan, musik, nomorWhatsapp;
var swalo = Swal.mixin({ allowOutsideClick: false, confirmButtonText: "OK" });
var klikA = new Audio("https://dekatutorial.github.io/crd/klk.mp3");
klikA.loop = false;
klikA.autoplay = false;
function DekaTutorial(ucapan, musik, kirimPesan) {
  nomorWhatsapp = nomorWhatsapp;
  if (musik != "") {
    var audio = new Audio(musik);
    audio.loop = true;
    audio.autoplay = false;
  }
  for (var x = 0; x < Math.floor(window.innerWidth / 35); x++) {
    var divku = document.createElement("div");
    document.querySelector(".t").appendChild(divku);
  }
  var sisa = window.innerHeight % 40;
  var tinggi = window.innerHeight - sisa;
  var kurangin = 2;
  if (sisa < 20) {
    kurangin += 1;
  }
  var bawah = sisa + 26 + (kurangin - 2) * 40;

  for (var x = 0; x < tinggi / 40 - kurangin; x++) {
    var divku = document.createElement("div");
    document.querySelector(".b").appendChild(divku);
  }
  document.querySelector(".lv").children[1].style = "bottom:" + bawah + "px";

  ucapan.reverse();

  var crdsElem = document.createElement("div");
  crdsElem.classList.add("crds");
  ucapan.forEach((elem) => {
    typeof elem.gambar === "undefined" ? (elem.gambar = "") : (elem.gambar = elem.gambar);
    typeof elem.ucapan === "undefined" ? (elem.ucapan = "") : (elem.ucapan = elem.ucapan);
    var cardContainerElem = document.createElement("div");
    cardContainerElem.classList.add("crd-ctnr");

    var cardElem = document.createElement("div");
    cardElem.classList.add("crd");

    if (elem.gambar != "") {
      var imgElemDiv = document.createElement("div");
      var imgElem = document.createElement("img");
      imgElem.setAttribute("src", elem.gambar);
      imgElemDiv.appendChild(imgElem);
      cardElem.appendChild(imgElemDiv);
    }
    if (elem.ucapan != "") {
      var txtElem = document.createElement("p");
      txtElem.textContent = elem.ucapan;
      cardElem.appendChild(txtElem);
    }

    cardContainerElem.appendChild(cardElem);
    crdsElem.appendChild(cardContainerElem);
  });

  var ctn = document.querySelector(".ctn");
  ctn.appendChild(crdsElem);
  var cardContainer = document.querySelectorAll(".crd-ctnr");
  var cards = document.querySelectorAll(".crd");
  var btnNext = document.querySelector(".next");
  var btnSend = document.querySelector(".send");
  var cardsLength = cards.length;
  var x = cardsLength - 1;
  var klik = true;

  var lv = document.querySelector(".lv");
  lv.children[0].addEventListener("click", () => {
    klikA.play();
    if (musik != "") {
      audio.play();
    }
    lv.classList.add("lv-out");
    setTimeout(() => {
      lv.remove();
      ctn.style = "display: block";
    }, 700);
  });

  btnNext.style = "bottom:" + bawah + "px";
  btnNext.addEventListener("click", () => {
    klikA.play();
    if (klik) {
      klik = false;
      cards[x].classList.add("out");
      setTimeout(() => {
        cardContainer[x].style = "display: none";
        if (x != 0) {
          cardContainer[x - 1].style = "display: flex";
          x--;
        }
      }, 700);
      if (x == 1) {
        btnNext.classList.add("btn-out");
        setTimeout(() => {
          btnNext.style = "display: none";
          btnSend.style = "display: inline; bottom:" + bawah + "px;";
        }, 500);
      }
      setTimeout(() => {
        klik = true;
      }, 1400);
    }
  });

  btnSend.addEventListener("click", () => {
    klikA.play();
    kirimPesan();
  });
  var pldr = document.querySelector(".pldr");
  var isRemove = false;
  function pldrRemove() {
    pldr.classList.add("rmv");
    setTimeout(() => {
      pldr.remove();
    }, 500);
  }
  setTimeout(() => {
    if (!isRemove) {
      pldrRemove();
    }
  }, 15000);


  window.addEventListener("load", () => {
    pldrRemove();
    isRemove = true;
  });
}

var tp = atob("PGRpdiBjbGFzcz0icGxkciI+PHA+PC9wPjxwPjwvcD48cD48L3A+PC9kaXY+PGRpdiBjbGFzcz0icHByIj48ZGl2IGNsYXNzPSJ0Ij48L2Rpdj48ZGl2IGNsYXNzPSJiIj48L2Rpdj48L2Rpdj4=");
function dt() {
  var top = document.createElement("div");
  top.innerHTML = tp;
  document.body.appendChild(top);
}
