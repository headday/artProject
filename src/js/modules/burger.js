const burger = () =>{
    const burger = document.querySelector('.burger'),
        burgerList = document.querySelector('.burger-menu');
        
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('active')
     
        if(burger.classList.contains('active')){
            burgerList.style.display = 'block'
        }else{
            burgerList.style.display = 'none'
        }
    })

    window.addEventListener('resize',()=>{
        if (window.screen.availWidth > 992) {
            burgerList.style.display = 'none';
        }
    })
    
        
}
export default burger