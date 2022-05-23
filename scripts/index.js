//store the products array in localstorage as "products"


function Products(t,d,p,i){
    this.type=t;
    this.description=d;
    this.price=p;
    this.imageURL=i;
}

let productsarr=JSON.parse(localStorage.getItem("products")) || [];
function addItems(e){
    e.preventDefault();
    let form=document.getElementById("products");
    let type=form.type.value;
    let description=form.description.value;
    let price=form.price.value;
    let imageURL=form.imageURL.value;
    let p1= new Products(type, description, price, imageURL)

    let data=JSON.parse(localStorage.getItem("products")) || []

    data.push(p1);

    localStorage.setItem("products", JSON.stringify(data))

    window.location.reload();
}
