// 使用者打開網頁時，立刻透過 JavaScript fetch 連線以上網址，取得景點資料。
fetch(
  "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
)
  .then((res) => res.json())
  .then((data) => {
    function picture_box(box_class, parentClass, dataIndex) {
      pic_url =
        "https://" +
        data["result"]["results"][dataIndex]["file"].split("https://")[1];
      p_text = data["result"]["results"][dataIndex]["stitle"];
      let up = document.querySelector(parentClass);
      let div = document.createElement("div");
      div.className = box_class;
      let img = document.createElement("img");
      img.setAttribute("src", pic_url);
      let p = document.createElement("p");
      p.innerText = p_text;
      div.appendChild(img);
      div.appendChild(p);
      up.appendChild(div);
    }
    picture_box("promotion", "section.up", 0);
    picture_box("promotion", "section.up", 1);

    for (let i = 2; i < 10; i++) {
      picture_box("pictures", "section.bottom", i);
    }
  })
  .catch((error) => console.log(error));
