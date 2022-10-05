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
            let pTag = document.createElement("p");
            t = document.createTextNode(data["result"]["results"][n]["stitle"]);
            // pTag.createTextNode = data["result"]["results"][n]["stitle"];
            return pTag.appendChild(t);
        }

        // The Promotion Part
        document.querySelector(".promotion1").appendChild(getImg(0));
        document.querySelector(".promotion1").appendChild(getTitle(0));
        document.querySelector(".promotion2").appendChild(getImg(1));
        document.querySelector(".promotion2").appendChild(getTitle(1));

       
        // document.querySelector(".bottom")
        document.querySelector(".one").appendChild(getImg(2));
        document.querySelector(".one").appendChild(getTitle(2));
        document.querySelector(".two").appendChild(getImg(3));
        document.querySelector(".two").appendChild(getTitle(3));
        document.querySelector(".three").appendChild(getImg(4));
        document.querySelector(".three").appendChild(getTitle(4));
        document.querySelector(".four").appendChild(getImg(5));
        document.querySelector(".four").appendChild(getTitle(5));
        document.querySelector(".five").appendChild(getImg(6));
        document.querySelector(".five").appendChild(getTitle(6));
        document.querySelector(".six").appendChild(getImg(7));
        document.querySelector(".six").appendChild(getTitle(7));
        document.querySelector(".seven").appendChild(getImg(8));
        document.querySelector(".seven").appendChild(getTitle(8));
        document.querySelector(".eight").appendChild(getImg(9));
        document.querySelector(".eight").appendChild(getTitle(9));

    })
    .catch((error) => console.log(error));






