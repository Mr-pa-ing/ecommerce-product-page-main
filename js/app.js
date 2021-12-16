// START QUANITY 
const addbtn = document.getElementById('addbtn');
const minusbtn = document.getElementById('minusbtn');
const quanity = document.getElementById('text');

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
        })
    });
});


// END MODAL 

// START CAROUSEL 
const imgcarousels = document.querySelectorAll('.imgcarousels');
const prevbtn = document.getElementById('prevbtn');
const nexbtn = document.getElementById('nexbtn');

let idx = 0;
nexbtn.addEventListener('click',function(){
    idx++;
    changeimg();
});
prevbtn.addEventListener('click',function(){
    idx--;
    changeimg();
});
function changeimg(){
    if(idx > imgcarousels.length -1){
        idx = 0;
    }else if(idx < 0){
        idx = imgcarousels.length -1;
    }

    imgcarousels.style.transform = `translate(${-idx*500}px)`;
}
// END CAROUSEL 