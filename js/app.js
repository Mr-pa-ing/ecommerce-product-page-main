// START QUANITY 
const addbtn = document.getElementById('addbtn');
const minusbtn = document.getElementById('minusbtn');
const quanity = document.getElementById('text');

const addcartbtn = document.getElementById('addcartbtn');
let qtytexts = document.querySelector('.qtytexts');
let qty = 0;
addbtn.addEventListener('click',()=>{
    qty++;
    quanity.innerText = qty;

});

minusbtn.addEventListener('click',()=>{
    if(qty > 0){
        qty--;
        quanity.innerText = qty;
        
    }
});

const emptycart = document.getElementById('emptycart'); 
const outbtn = document.getElementById('outbtn');
addcartbtn.addEventListener('click',()=>{
    qtytexts.textContent = qty;

    if(!qtytexts.textContent == ''){
        emptycart.classList.add('d-none');
        addtocartqty();        
        outbtn.classList.add('d-block');
    }else{
        emptycart.classList.remove('d-none');
        outbtn.classList.remove('d-block');
    }
});

function addtocartqty(){
    const container = document.getElementById('checkout-container');
    const div  = document.createElement('div');
    div.className = "row mb-2";
    div.innerHTML = `<div class="col-2 me-1">
                        <img src="./images/image-product-1-thumbnail.jpg" width="50px" class="rounded-3" alt="">                  
                    </div>
                    <div class="col-8 ms-2">
                        <span class="text-secondary">Fall Limited Edition Sneakers $125 x ${qty} <span class="fw-bold text-dark">$${qty * 125}</span></span>
                    </div>
                    <div class="col-1 align-self-center">
                        <button class="btn bg-transparent btn-sm deletebtn" style="box-shadow: none;"><i class="fas fa-trash-alt text-secondary"></i></button>
                    </div>`;
   container.appendChild(div);
   
}

// END QUANITY 

// START CHECKOUT 
const checkoutbtn = document.getElementById('checkoutbtn');
const modalbox = document.querySelector('.modalboxs');
checkoutbtn.addEventListener('click',function(){
    modalbox.classList.toggle('active');
});
// END CHECKOUT 

// START MODAL 
const boxs = document.querySelectorAll('.boxs');
const modalbox2 = document.querySelector('.modalbox2');
const closebtn = document.getElementById('closebtn');

boxs.forEach(box=>{
    box.addEventListener('click',()=>{
        modalbox2.style.display = 'block';
        closebtn.addEventListener('click',()=>{
            modalbox2.style.display = 'none';
        });
    });
});
// END MODAL 

// START CAROUSEL 
const imgcarousels = document.querySelector('.imgcarousels');
const prevbtn = document.getElementById('prevbtn');
const nexbtn = document.getElementById('nexbtn');
const thumbboxs = document.querySelectorAll('.thumbboxs');

let idx = 1;
nexbtn.addEventListener('click',function(){
    idx++;
    changeimg();
});

prevbtn.addEventListener('click',function(){
    idx--;
    changeimg();
});

function changeimg(){
    if(idx > 4){
        idx = 1;
    }else if(idx < 1){
        idx = 4;
    }
    imgcarousels.src = `./images/image-product-${idx}.jpg`;
}

console.log(thumbboxs);
// function changeactive(){
//     let act = 0;
//     if(act < thumbboxs.length-1){
//         act++;
//         thumbboxs[act].classList.add('active');
//     }else if(act > thumbboxs.length-1){
//         act = 
//     }
// }

// END CAROUSEL 