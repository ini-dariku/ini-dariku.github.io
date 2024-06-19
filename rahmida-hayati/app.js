function DekaTutorial(konten, musik, nomorWhatsapp, btnOpen, btnPesan) {
  if (musik != "") {
    var musikk = new Audio(musik);
    musikk.loop = true;
    musikk.autoplay = true;
  }
  musikk.play();
  var key = {
    data: "asddasd",
    openn: "salon",
  };
  console.log(key["data"]);
  Object.keys(key).forEach((k) => {
    keys = k;
    valuess = key[`${k}`];
    console.log(`${keys} : ${valuess}`);
  });
  let slidesItem = "";
  konten.forEach((e) => {
    typeof e.ucapan === "undefined" ? (e.ucapan = "") : () => {};
    typeof e.gambar === "undefined" ? (e.gambar = "") : () => {};

    let items = `<div class="swiper-slide">`;

    e.gambar != "" ? (items += `<div class="img" style="background-image: url('${e.gambar}')"></div>`) : () => {};
    e.ucapan != "" ? (items += `<div class="txt">${e.ucapan}</div>`) : () => {};

    items += `</div>`;
    slidesItem += items;
  });
  let main = document.createElement("div");
  main.innerHTML = `
      <div class="preload" id="preload">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="open" id="openn">
        <div class="love" id="love"><svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34" fill="#f29066"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg></div>
        <span class="txt">${btnOpen}</span>
      </div>
      <div class="bg"></div>
      <div class="bg-love"></div>
      
      <div class="container">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            ${slidesItem}
          </div>
        </div>
        <div class="nav">
          <div class="nav-prev nav-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z"/></svg>
          </div>
          <div class="nav-next nav-btn"> 
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>
          </div>
        </div>
        <button class="kirim">${btnPesan}</button>
      </div>
      <div style="position: fixed; bottom: 10px; left: 10px; text-align: center; color: #cf7d5a; font-size: 0.8rem; letter-spacing: 1px"></div>
      `;
  document.body.appendChild(main);
  function tampilLope() {
    bgLove = document.querySelector(".bg-love");
    x = innerWidth / 30;
    for (i = 0; i < x; i++) {
      delay = Math.random() * 5 + "s";
      durasi = Math.random() * (7 - 3) + 3 + "s";

      var div = document.createElement("div");
      div.setAttribute("style", "animation-delay: " + delay + ";animation-duration: " + durasi);
      div.innerHTML =
        '<span> <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34" fill="#f29066"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg> </span>';

      bgLove.appendChild(div);
    }
  }
  tampilLope();

  window.onload = function () {
    preload.style = "transition: .5s ease-out all; opacity: 0";
    setTimeout(() => {
      preload.remove();
    }, 500);
  };

  love.addEventListener("click", () => {
    if (musik != "") musikk.play();
    openn.style = "transition: .5s ease-out all; transform: translateY(-100vh)";
    setTimeout(() => {
      swiperrr.classList.add("swiper-in");
    }, 300);
    setTimeout(() => {
      navv.classList.add("nav-in");
    }, 1200);
  });

  const swalo = Swal.mixin({ allowOutsideClick: false, showCancelButton: false });

  function getDateNow() {
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const date = new Date();

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const hour = date.getHours();
    let minutes = date.getMinutes();
    minutes < 10 ? (minutes = `0${minutes}`) : minutes;
    return `${day} ${month} ${year} (${hour}:${minutes})`;
  }
  async function kirimPesan() {
    var { value: pesan } = await swalo.fire({ title: "Tulis pesan", input: "textarea", confirmButtonText: "Kirim" });
    if (pesan) {
      if (nomorWhatsapp.length > 10) {
        if ((nomorWhatsapp = "nomorWhatsapp")) nomorWhatsapp = "";
        await swalo.fire("Kirim pesannya ke wa aku ya");
        location.assign(`https://wa.me/${nomorWhatsapp}?text=${pesan}`);
      } else {
        swalo.fire({
          title: "Mengirim pesan",
          didOpen: () => {
            swalo.showLoading();
          },
        });
        let pesanz = `<div class="cp">Pesan :<br />${pesan}<p>${getDateNow()}</p></div>`;
        var data = new FormData();
        data.append("p", pesanz);

        fetch("", {
          method: "POST",
          body: data,
        })
          .then((res) => res.json())
          .then(async (data) => {
            if (data.s == 200) {
              swalo.fire({
                icon: "success",
                title: "Pesan berhasil dikirim!",
              });
            }
          });
      }
    } else {
      await swalo.fire({ imageUrl: "https://files.dariku.my.id/mylove/cutie2.gif", confirmButtonText: "OK", title: "Jangan dikosongin dong" });
      kirimPesan();
    }
  }

  document.querySelector(".kirim").onclick = kirimPesan;

  const lengthSwiper = document.querySelectorAll(".swiper-slide").length;
  console.log(lengthSwiper);
  const swiperrr = document.querySelector(".swiper");
  const navv = document.querySelector(".nav");
  const kirimm = document.querySelector(".kirim");
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,

    navigation: {
      nextEl: ".nav-next",
      prevEl: ".nav-prev",
    },
  });
  swiper.on("slideChange", function () {
    lengthSwiper == this.activeIndex + 1 ? kirimm.classList.add("nav-in") : () => {};
    console.log(this.activeIndex);
  });

  console.log(Math.floor(Math.random() * 10));
}
