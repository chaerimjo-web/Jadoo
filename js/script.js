let pagers = document.querySelectorAll('.tesimonials .pager a');
let tesimonialsLists = document.querySelectorAll('.tesimonials_list li');
let paginationUp = document.querySelector('.pagination .up');
let paginationDown = document.querySelector('.pagination .down');
let currentIdx = 0;
let tesimonialsListCount = tesimonialsLists.length;
/**
 pagers를 클릭하면 할일
    모든 a에서 active를 제거하고, 클릭한 그 요소에 active를 추가
 */

pagers.forEach((item,idx)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
    
        showTestimonial(idx);
    });
});
function showTestimonial(num){
    /*
    if(num === -1){
        num = tesimonialsListCount -1;
    }
    if(num === 3){
        num = 0;
    }
    */
   //참이면 ? 2 : 아니면 3이면 ?  0
//    num = (num === -1) ? tesimonialsListCount -1 : (num ===3) ? 0: num;
    num = (num + tesimonialsListCount)  % tesimonialsListCount;
    /**
     *num = (1+3) % 3 = 1
     num1 num1

     num = (2+3) % 3 = 2
     num2 num2

     num = (3+3) % 3 = 2
     num3 num0
     */
    for(let tesimonial of tesimonialsLists){
        tesimonial.classList.remove('active');
    }
    tesimonialsLists[num].classList.add('active');
    currentIdx = num;

    for(let pager of pagers){
        pager.classList.remove('active');
    }
    pagers[num].classList.add('active');
}

paginationDown.addEventListener('click',()=>{
    showTestimonial(currentIdx + 1);
});

paginationUp.addEventListener('click',()=>{
    showTestimonial(currentIdx - 1);
});

