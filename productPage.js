
let cont = document.querySelector(".cont");
let cart = JSON.parse(localStorage.getItem("cartdata")) || [];
let cartButton = document.getElementById("btn-cart")
let globalData = [];

fetchdata();
async function fetchdata() {
    try {
        let res = await fetch("./product.json");
        res = await res.json();
        globalData = [...res];
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
            } else {
                alert("Already Added");
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


let searchingProduct = document.querySelector("#search");
searchingProduct.addEventListener("click", function () {
    let val = document.querySelector("#search-bar").value;
    let array = [];
    if (val == "") {
        display(globalData);
    } else {
        globalData.forEach((el, i) => {
            if (el.name == val) {
                array.push(el);
            } else {
                return false;
            }
        })
        display(array);
    }
})

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

let check = document.getElementById("price-sorting");
check.addEventListener("change", (e) => {
    if (e.target.checked) {
        let newdata = [];
        if (e.target.value == "range1") {
            globalData.forEach((el, i) => {
                if (el.price <= 200) {
                    newdata.push(el);
                }
            })
        }
        if (e.target.value == "range2") {
            globalData.forEach((el, i) => {
                if (el.price > 200 && el.price <= 500) {
                    newdata.push(el);
                }
            })
        }
        if (e.target.value == "range3") {
            globalData.forEach((el, i) => {
                if (el.price > 500 && el.price <= 700) {
                    newdata.push(el);
                }
            })
        }
        if (e.target.value == "range4") {
            globalData.forEach((el, i) => {
                if (el.price > 700) {
                    newdata.push(el);
                }
            })
        }
        display(newdata);
    }
})

let check2 = document.querySelector(".shipping-time");
check2.addEventListener("change", (e) => {
    if (e.target.checked) {
        let newdata = [];
        if (e.target.value == "type1") {
            globalData.forEach((el, i) => {
                if (el.price <= 200) {
                    newdata.push(el);
                }
            })
        }
        if (e.target.value == "type2") {
            globalData.forEach((el, i) => {
                if (el.price > 200 && el.price <= 500) {
                    newdata.push(el);
                }
            })
        }
        if (e.target.value == "type3") {
            globalData.forEach((el, i) => {
                if (el.price > 200 && el.price <= 500) {
                    newdata.push(el);
                }
            })
        }
        if (e.target.value == "type4") {
            globalData.forEach((el, i) => {
                if (el.price > 200 && el.price <= 500) {
                    newdata.push(el);
                }
            })
        }
        display(newdata);
    }
})

let check3 = document.querySelector(".returnable-prod");
check3.addEventListener("change", (e) => {
    if (e.target.checked) {
        let newdata = [];
        if (e.target.value == "no") {
            globalData.forEach((el, i) => {
                if (el.price <= 200) {
                    newdata.push(el);
                }
            })
        }
        if (e.target.value == "yes") {
            globalData.forEach((el, i) => {
                if (el.price > 200 && el.price <= 500) {
                    newdata.push(el);
                }
            })
        }
        display(newdata);
    }
})

let check4 = document.querySelector(".store");
check4.addEventListener("change", (e) => {
    if (e.target.checked) {
        let newdata = [];
        if (e.target.value == "name1") {
            globalData.forEach((el, i) => {
                if (el.price <= 200) {
                    newdata.push(el);
                }
            })
        }
        if (e.target.value == "name2") {
            globalData.forEach((el, i) => {
                if (el.price > 200 && el.price <= 500) {
                    newdata.push(el);
                }
            })
        }
        if (e.target.value == "name3") {
            globalData.forEach((el, i) => {
                if (el.price > 200 && el.price <= 500) {
                    newdata.push(el);
                }
            })
        }
        if (e.target.value == "name4") {
            globalData.forEach((el, i) => {
                if (el.price > 200 && el.price <= 500) {
                    newdata.push(el);
                }
            })
        }
        display(newdata);
    }
})

let category = document.getElementById("section")
category.addEventListener("change", (e) => {
    e.preventDefault();
    filterdata();
})
function filterdata() {
    console.log("cominnggg")
    let filterval = category.value;
    if (filterval == "") {
        display(globalData)
    } else {
        let newdata = globalData.filter((product) => {
            return product.dept == filterval;
        })
        display(newdata);
    }
}

