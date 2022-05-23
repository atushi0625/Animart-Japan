// Put your application javascript here

const swiper = new Swiper('.swiper', {
     // Optional parameters
     direction: 'horizontal',

     // If we need pagination
     pagination: {
          el: '.swiper-pagination',
          type: 'bullets', 
          clickable: true, 
     },
//スクロールバー表示の設定
scrollbar: { 
     el: '.swiper-scrollbar', //要素の指定
   },
     // Navigation arrows
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: '.swiper-button-disabled',
     },
     autoHeight: true,
     effect: 'slide',
     breakpoints: {
          // 1280: {
               //      slidesPerView: 3.4,
               //      spaceBetween: 10
               // },
               
               820: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                    
               },
               768:{
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                    
               },
               414: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    centeredSlides: true,
                    
               },
               375: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    centeredSlides: true,

          }
     }
})