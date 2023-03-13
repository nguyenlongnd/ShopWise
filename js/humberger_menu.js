var humb_menu = document.querySelector(".hamberger-menu")
var humb_menuList = document.querySelector(".hamberger-menu__list");
var humb_menuItem = document.querySelectorAll(".hamberger-menu__item");
var humb_menuDropdown = document.querySelectorAll(".hamberger-menu__dropdown");
var blog_secondary = document.querySelectorAll('.blog-secondary');
var dropdown_secondary = document.querySelectorAll(".dropdown-secondary");

    humb_menuItem.forEach(function(item){
        item.addEventListener('click', function(){
        $('.hamberger-menu__item').not(this).children('.hamberger-menu__dropdown').removeClass('show');
        this.querySelector('.hamberger-menu__dropdown').classList.toggle('show');
        })
    })

    blog_secondary.forEach(function(item) {
        item.addEventListener('click',function () {
            $('.blog-secondary').not(this).children('.dropdown-secondary').removeClass('show');
            this.querySelector('.dropdown-secondary').classList.toggle('show'); 
        })
    })

    blog_secondary.forEach(ele => {
        ele.addEventListener('click',function(event){
            event.stopPropagation()
        })
    })

var show_humbMenu = document.querySelector(".show-humb_menu");
var close_humbMenu = document.querySelector(".close-humb_menu");

show_humbMenu.addEventListener('click', () => {
    humb_menuList.style.display = "block";
    show_humbMenu.style.display="none";
    close_humbMenu.style.display="block"
})
close_humbMenu.addEventListener('click', () => {
    humb_menuList.style.display = "none";
    show_humbMenu.style.display="block";
    close_humbMenu.style.display="none"
})