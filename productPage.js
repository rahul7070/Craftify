
let cont = document.querySelector(".cont");
fetchdata();
async function fetchdata(){
    try {
      let res = await fetch("./product.json");
      res = await res.json();
      console.log(res);
      res = changedata(res);
      display(res);
    } catch (error) {
        console.log(error)
    }
}

function display(data){
    data.forEach(function(element, index){
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let desc = document.createElement("p");
        let price = document.createElement("h3");
        let dept = document.createElement("h3");
        // let btn = document.createElement("button");


            image.setAttribute("src", element.image);
            name.textContent = element.name;
            desc.innerText = element.desc;
            price.innerText = element.price;
            dept.innerText = element.dept

        card.append(image, name, desc, price, dept);
        cont.append(card);
    })
}

function changedata(data){
    let str = "pot sofa lighting shelf curtain pillow glass wall-decoration dining-table";
    str = str.split(" ");
    let c =0;
    data.forEach(function(el, i){
        if(c==str.length){
            c=0;
        }
        el.dept = str[c++];
    })
    return data;
}

