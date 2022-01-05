addEventListener('DOMContentLoaded',()=>{
    const btn_menu=document.querySelector('.btn_menu')
    if(btn_menu){
        btn_men.addEventListener('click',()=>{
            const menu_items=document.querySelectorAll('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})