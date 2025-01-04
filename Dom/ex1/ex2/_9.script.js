let item = {Pid:"101",Pname:"SmartWatch",Pimage:"https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",Price:7000,Qyt:1,Total:7000};
let item1 = {Pid:"102",Pname:"SmartWatch",Pimage:"https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",Price:7000,Qyt:1,Total:7000};
let item2 = {Pid:"103",Pname:"SmartWatch",Pimage:"https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",Price:7000,Qyt:1,Total:7000};


let products = [item,item1,item2];

function displayProducts(items){
    if(items.length != 0){
        let eachProduct = '';
        for(let item of items){
            eachProduct += `<tr class="text-center">
                <td>${item.Pid}</td>
                <td>${item.Pname}</td>
                <td><img  src = "${item.Pimage}" width="30px" height="30px"></td>
                <td>${item.Price}</td>
                <td>
                    <button class="btn btn-dark rounded-circle" onclick="dicQty('${item.Pid}')">-</button>
                    <span id="disply-qut">${item.Qyt}</span>
                    <button class="btn  btn-dark rounded-circle" onclick="incQty('${item.Pid}')">+</button>
                </td>
                <td><span id = "totalPrice"  >${item.Price * item.Qyt}</span></td>
                </tr>`
        }

        document.getElementById('DisplayData').innerHTML = eachProduct;
        
    }
}
displayProducts(products);

function incQty(id){
    let UpdatedArr = products.map((item)=>
    {
        if(item.Pid == id){
            return {...item,Qyt:++item.Qyt};
        }
        return item;
    });
    displayProducts(UpdatedArr);
}
function dicQty(id){
    let UpdatedArr = products.map((item)=>
    {
        if(item.Qyt > 1){
        if(item.Pid == id){
            return {...item,Qyt:--item.Qyt};
        }
        return item;
        }  else {
            
        }
    });
    displayProducts(UpdatedArr);
}
