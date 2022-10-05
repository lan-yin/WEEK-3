// 使用者打開網頁時，立刻透過 JavaScript fetch 連線以上網址，取得景點資料。
fetch(
    "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
  )
    .then((res) => res.json())
    .then((data) => {
        function getImg(n) {
            pic_url =
              "https://" + data["result"]["results"][n]["file"].split("https://")[1];
            let img = document.createElement("img");
            img.setAttribute("src", pic_url);
            return img;
        }
        function getTitle(n) {
            let pTag = document.createElement("P");
            t = document.createTextNode(data["result"]["results"][n]["stitle"]);
            // pTag.createTextNode = data["result"]["results"][n]["stitle"];
            return pTag.appendChild(t);
        }

        // The Promotion Part
        document.querySelector(".promotion1").appendChild(getImg(0));
        document.querySelector(".promotion1").insertAdjacentHTML('beforeend', getTitle(0).textContent);
        document.querySelector(".promotion2").appendChild(getImg(1));
        document.querySelector(".promotion2").insertAdjacentHTML('beforeend', getTitle(1).textContent);

       
        // document.querySelector(".bottom")
        document.querySelector(".one").appendChild(getImg(2));
        document.querySelector(".one").insertAdjacentHTML('beforeend', getTitle(2).textContent);
        document.querySelector(".two").appendChild(getImg(3));
        document.querySelector(".two").insertAdjacentHTML('beforeend', getTitle(3).textContent);
        document.querySelector(".three").appendChild(getImg(4));
        document.querySelector(".three").insertAdjacentHTML('beforeend', getTitle(4).textContent);
        document.querySelector(".four").appendChild(getImg(5));
        document.querySelector(".four").insertAdjacentHTML('beforeend', getTitle(5).textContent);
        document.querySelector(".five").appendChild(getImg(6));
        document.querySelector(".five").insertAdjacentHTML('beforeend', getTitle(6).textContent);
        document.querySelector(".six").appendChild(getImg(7));
        document.querySelector(".six").insertAdjacentHTML('beforeend', getTitle(7).textContent);
        document.querySelector(".seven").appendChild(getImg(8));
        document.querySelector(".seven").insertAdjacentHTML('beforeend', getTitle(8).textContent);
        document.querySelector(".eight").appendChild(getImg(9));
        document.querySelector(".eight").insertAdjacentHTML('beforeend', getTitle(9).textContent);

    })
    .catch((error) => console.log(error));






