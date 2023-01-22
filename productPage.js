
let cont = document.querySelector(".cont");
let cart = JSON.parse(localStorage.getItem("cartdata")) || [];
let cartButton = document.getElementById("btn-cart")
let globalData = [];

fetchdata();
async function fetchdata() {
    try {
        let res = await fetch("./product.json");
        res = await res.json();
        globalData = res;
        console.log(res);
        res = changedata(res);
        display(res);
    } catch (error) {
        console.log(error)
    }
}

function display(data) {
    cont.innerHTML = "";
    data.forEach(function (element, index) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let desc = document.createElement("p");
        let price = document.createElement("h3");
        let dept = document.createElement("h3");
        let btn = document.createElement("button");
        let line = document.createElement("br");
        btn.setAttribute("class", "addToCart");
        btn.innerText = "Add To Cart"
        btn.addEventListener("click", () => {
            if (checkDuplicate(element) == false) {
                let obj = { ...element, quantity: 1 }
                cart.push(obj)
                localStorage.setItem("cartdata", JSON.stringify(cart));
                btn.innerText = "Added To cart";
            }
        })

        image.setAttribute("src", element.image);
        name.textContent = element.name;
        desc.innerText = element.desc;
        price.innerText = "$ " + element.price;
        dept.innerText = element.dept

        card.append(image, name, desc, price, dept, line, btn);
        cont.append(card);
    })
}

function changedata(data) {
    let str = "pot sofa lighting shelf curtain pillow glass wall-decoration dining-table";
    str = str.split(" ");
    let c = 0;
    data.forEach(function (el, i) {
        if (c == str.length) {
            c = 0;
        }
        el.dept = str[c++];
    })
    return data;
}

function checkDuplicate(product) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == product.id) {
            return true;
        }
    }
    return false;
}

cartButton.addEventListener("click", () => {
    window.location.assign("/cart.html")
})


// let form = document.querySelector("form");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let searchParam = document.getElementById("search-bar").value;
//     let newdata = globalData.filter((ele)=>{
//       if(ele.name.toUpperCase().includes(searchParam.toUpperCase())===true){
//         return true;
//       }else{
//         return false;
//       }
//     })
//     display(newdata);
// })

let order = document.getElementById("order-sorting");
order.addEventListener("change", () => {
    let val = order.value;
    if (val === "Ascending") {
        let newdata = [...globalData];
        newdata.sort(func);
        function func(a, b) {
            if (Number(a.price) > Number(b.price)) {
                return 1;
            } else if (Number(b.price) > Number(a.price)) {
                return -1;
            } else {
                return 0;
            }
        }
        display(newdata);
    } else if (val === "Descending") {
        let newdata = [...globalData];
        newdata.sort(func);
        function func(a, b) {
            if (Number(a.price) > Number(b.price)) {
                return -1;
            } else if (Number(b.price) > Number(a.price)) {
                return 1;
            } else {
                return 0;
            }
        }
        display(newdata);
    } else if (val === "") {
        display(globalData);
    }
})

// let check = document.getElementById("price-sorting");
// check.addEventListener("change", (e)=>{
//     // console.log("checking");
//     if(e.target.checked){
//         console.log("done");
//     }
// })

