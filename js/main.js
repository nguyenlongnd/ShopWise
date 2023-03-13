	

    // seacrh_overlay 
    var search_item = document.querySelector(".search-item");
    var search_overlay = document.querySelector(".search_overlay");
    var overlay_search = document.querySelector(".overlay_search");
    var search_container = document.querySelector(".search_container");

    function closeSearchModal() {
        search_overlay.style.animation = "comeOut 1s";
        setTimeout(function() {
            search_overlay.style.display="none";
        },900)
    }
     
    search_item.addEventListener('click' ,() => {
        search_overlay.style.animation = "comeIn 1s";
        search_overlay.style.display="flex";
    })


    // sticky bar
    window.onscroll = function() {myFunction()};

    var bottom_header = document.getElementById("header-bottom");
    var top_header = document.getElementById("header-top");
    var sticky = bottom_header.offsetTop;

    function myFunction() {
    if (window.pageYOffset >= sticky) {
        bottom_header.classList.add("sticky");
        top_header.style.display="none";
    } else {
        bottom_header.classList.remove("sticky");
        top_header.style.display="block";
    }
    }


    // slide
    var bannerIndex = 1;
    showBanner(bannerIndex,".banner-top__item");

    function plusBanner(n) {
        clearInterval(mySlide)
        showBanner(bannerIndex += n,".banner-top__item");
        showBanner(bannerIndex += n,".personal-review");
        
    }

    function showBanner(n,classSlide) {
        var i;
        var bannerItem = document.querySelectorAll(classSlide);
        if (n > bannerItem.length) {bannerIndex = 1}    
        if (n < 1) {bannerIndex = bannerItem.length}
        for (i = 0; i < bannerItem.length; i++) {
            bannerItem[i].style.display = "none";  
        }
        bannerItem[bannerIndex-1].style.display = "block";   
    }

    // auto slide
    var slideIndex = 0;		
    function showSlideAuto(classSlide) {
        var i ;
        var slides = document.querySelectorAll(classSlide);
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  // Change image every 2 seconds
	}
	
    var mySlide = setInterval(() => {
        showSlideAuto(".personal-review");
        showSlideAuto(".banner-top__item")
    }, 3000);



    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            492:{
                items:2
            },    
            768:{
                items:3
            },
            1200:{
                items:4
            }
        }
        })



        // show-language-extends
        var lang_active = document.getElementById('active-lang');
        var lang_list = document.getElementById('list-lang');
        var money_active = document.getElementById('active-money');
        var money_list = document.getElementById('list-money');
        lang_active.addEventListener('click',() => {
            if(lang_list.style.display === "none") {
                lang_list.style.display = "block"
            } else {
                lang_list.style.display = "none"
            }
        })
        money_active.addEventListener('click',() => {
            if(money_list.style.display === "none") {
                money_list.style.display = "block"
            } else {
                money_list.style.display = "none"
            }
        })



        // exclusive product
        var type_prd = document.querySelectorAll('.type');
        var list_prd = document.querySelectorAll('.product-list');
        type_prd.forEach(ele => {
            ele.addEventListener('click', () => {
				for ( var j=0;j<type_prd.length;j++) {
					type_prd[j].style.color = "black"
				}
				ele.style.color="#fe4a62"
                var x = ele.getAttribute("name");
                for ( var j = 0 ; j < list_prd.length ; j++) {
                    list_prd[j].style.display= "none";
                    if(x === list_prd[j].id){
                        list_prd[j].style.display= "block";
                    }
                }
            })
        })

        
         // img-select (exclusive product)
         var image_list = document.querySelectorAll(".image__item");
         var main_img = document.querySelector('#main_img');
         var list_srcMainImg = [
             {src: "./images/product_img1.jpg"},
             {src: "./images/product_img1-2.jpg"},
             {src: "./images/product_img1-3.jpg"},
             {src: "./images/product_img1-4.jpg"},
 
         ]
         image_list.forEach(ele => {
             ele.addEventListener('click',() => {
                 var number = ele.getAttribute("name");
                 main_img.setAttribute("src",list_srcMainImg[number].src);
             })
         })

         


        
        
		// ============================================modal-prd======================================
		// close-modal-prd
		var modal_prd = document.getElementById("product-modal");
		function closeModalProduct() {
            modal_prd.style.display = "none";
            document.body.style.overflow ="visible";
		}
		var show_modal = document.querySelectorAll('.showModal');
		show_modal.forEach(ele => {
			ele.addEventListener('click',() => {
                modal_prd.style.display="flex";
                document.body.style.overflow="hidden"
			})
        })

        // zoom
        

        // =========================================modal-random=====================================
        var random_modal = document.getElementById("modal_random");
        function closeRandomModal() {
            random_modal.style.display="none";
            document.body.style.overflow ="visible";
        }
        var show_RandomModal = document.querySelectorAll('.showRandomModal');
		show_RandomModal.forEach(ele => {
			ele.addEventListener('click',() => {
                random_modal.style.display = "flex";
                document.body.style.overflow="hidden";
            })
        })
        

        // change-Quality
		 function changeQuality(n) {
            var prd_quality = document.getElementById("prd-quality");
           var x = Number(prd_quality.value) + n;
           if (x === 0) {x=1}
           prd_quality.value = x
        }
        // color-select
        var list_color = document.querySelectorAll('.color-item');
        list_color.forEach(ele => {
            ele.addEventListener('click',() => {
                for( color of list_color) {
                    color.style.border ="none";
                    color.style.boxShadow ="none"
                }
                ele.style.border ="2px solid white";
                ele.style.boxShadow ="0px 0px 5px #7a8296"
            })
        })
        // size-select
        var list_size = document.querySelectorAll('.size-item');
        list_size.forEach(ele => {
            ele.addEventListener('click',() => {
                for( size of list_size) {
                    size.style.background ="white";
                    size.style.color ="black";
                }
                ele.style.background ="#fa4e62";
                ele.style.color ="white";
            })
        })

        // submit form contact 
        var email_input = document.querySelector('email-input')
        function submit() {
            if(email_input.value === '') {
                
            }
        }



