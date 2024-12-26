let item = {Pid:"102",Pname:"SmartWatch",Pimage:"https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",Price:7000,Qyt:1,Total:7000};
// let item1 = {Pid:"102",Pname:"SmartWatch",Pimage:"https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",Price:7000,Qyt:1,Total:7000};
// let item2 = {Pid:"102",Pname:"SmartWatch",Pimage:"https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",Price:7000,Qyt:1,Total:7000};

let addProduct = `
    <tr class="text-center">
                <td>${item.Pid}</td>
                <td>${item.Pname}</td>
                <td><img  src = "${item.Pimage}" width="30px" height="30px"></td>
                <td>${item.Price}</td>
                <td>
                    <button class="btn btn-dark rounded-circle" id="minas-btn">-</button>
                    <span id="disply-qut">${item.Qyt}</span>
                    <button class="btn  btn-dark rounded-circle" id="plus-btn">+</button>
                </td>
                <td><span id = "totalPrice">${item.Price * item.Qyt}</span></td>
    </tr>
`
// let addProduct1 = `
//     <tr class="text-center">
//                 <td>${item11.Pid}</td>
//                 <td>${item1.Pname}</td>
//                 <td><img  src = "${item1.Pimage}" width="30px" height="30px"></td>
//                 <td>${item1.Price}</td>
//                 <td>
//                     <button class="btn btn-dark rounded-circle" id="minas-btn">-</button>
//                     <span id="disply-qut">${item1.Qyt}</span>
//                     <button class="btn  btn-dark rounded-circle" id="plus-btn">+</button>
//                 </td>
//                 <td><span id = "totalPrice">${item1.Price * item1.Qyt}</span></td>
//     </tr>
// `


        let addData = document.getElementById('DisplayData');

        addData.innerHTML = addProduct;

        // let addData1 = document.getElementById('DisplayData1');

        // addData.innerHTML = addProduct1;

        // let addData = document.getElementById('DisplayData');

        // addData.innerHTML = addProduct;
      


        let decriment = document.getElementById('minas-btn');
        let incriment = document.getElementById('plus-btn');
        let displayQyt = document.getElementById('disply-qut');
        let displaytotal = document.getElementById('totalPrice');

        // let qyt = 1;

        displayQyt.textContent = item.Qyt;

        function increQt(){
            item.Qyt++;
            displayQyt.textContent = item.Qyt;
            displaytotal.textContent = item.Qyt * item.Price; 
        }

        incriment.addEventListener('click',increQt);

        function decriqt(){
            if(item.Qyt > 1){
                item.Qyt--;
                displayQyt.textContent = item.Qyt;
                displaytotal.textContent = item.Qyt * item.Price; 
            }
            else {
                displayQyt.textContent = 1;
                displaytotal.textContent = 7000; 
            }
        }

        decriment.addEventListener('click',decriqt)