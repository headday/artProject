const accardion = () =>{
    let bloks = document.querySelectorAll('#accordion .accordion-block'),
        triggers = document.querySelectorAll('.accordion-heading');
    bloks.forEach(elem => {
        elem.style.display = 'none'
        elem.classList.add('animated','fadeInUp')
    })  
    triggers.forEach(trigger =>{
        
        trigger.addEventListener('click',()=>{
            if(trigger.classList.contains('active')){
                trigger.nextElementSibling.style.display = 'none'
                trigger.classList.remove('active')
            }else{
                console.log('!active')
                trigger.nextElementSibling.style.display = 'block'
                trigger.classList.add('active')
            }
    
           
        })
    })
}
export default  accardion