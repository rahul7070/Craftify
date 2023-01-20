
fetchdata();


async function fetchdata(){
    try {
        let res = await fetch("./product.json");
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
