// var marka = ["Asus", "Dell", "Hp", "Lenovo", "LG", "Huawei","Samsung","Sony"];
// var lu = document.querySelector(".row1 .category");
// var input = document.querySelector("#search");
// var stock = document.querySelector(".stock");

// for (var i = 0; i < marka.length; i++) {
//     var li = document.createElement("li");
//     li.classList.add("item");
//     li.innerText = marka[i];
//     lu.appendChild(li);
//     var item = document.querySelectorAll(".category .item");
//     item[i].addEventListener("click", function () {
//         for (var i = 0; i < stock_div.length; i++) {
//             stock.children[0].remove();
//         }
//         var content = String(this.innerText);
//         content = content.toLowerCase();
//         for (var i = 0; i < 4; i++) {
//             var col3 = document.createElement("div");
//             col3.classList.add("col-3");
//             var stockItems = document.createElement("div");
//             stockItems.classList.add("stock-items");
//             var img = document.createElement("img");
//             img.src = `${content}.jpg`;
//             var p = document.createElement("p");
//             p.innerHTML = "lorem ipsum";
//             stockItems.appendChild(img);
//             stockItems.appendChild(p);
//             col3.appendChild(stockItems);
//             stock.appendChild(col3);


//         }
//     })
// }