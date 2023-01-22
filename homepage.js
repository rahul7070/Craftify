
let cartButton = document.getElementById("btn-cart");
let exploreButton = document.getElementById("explore")
let search = document.getElementById("search-button");

cartButton.addEventListener("click",()=>{
    window.location.assign("/cart.html");
})
exploreButton.addEventListener("click",()=>{
    window.location.assign("productPage.html");
})

// search.addEventListener("click", ()=>{
//     fetchdata();
//     async function fetchdata(){
//         let res = await fetch("/product.json");
//         res = await res.json();
//         console.log("homepage")
//         console.log(res);
//     }
// })


