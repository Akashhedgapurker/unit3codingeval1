function display(){
    let data = JSON.parse(localStorage.getItem("products")) || [];
    data.forEach(function (element){
    let div = document.createElement("div")
    let p1=document.createElement("P");
    p1.innerText=element.type;
    p2=document.createElement("p");
    p2.innerText=element.description
    p3=document.createElement("p")
    p3.innerText=element.price
    img=document.createElement("img")
    img.src=element.imageURL

    div.append(img,p1, p2, p3) 
    all_products.append(div)    
});
    
}
display();