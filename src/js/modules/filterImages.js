const filterImages = () =>{
    const menu = document.querySelector('.portfolio-menu'),
          allBtns = menu.querySelectorAll('li'),  
         allBtn = menu.querySelector('.all'),
         contentBlock = document.querySelectorAll('.portfolio-block'),
         loversBtn = menu.querySelector('.lovers'),
         chefBtn = menu.querySelector('.chef'),
         girlBtn = menu.querySelector('.girl'),
         guyBtn = menu.querySelector('.guy'),
         grandmotherBtn = menu.querySelector('.grandmother'),
         granddadBtn = menu.querySelector('.granddad'),
         noneblock = document.querySelector('.portfolio-no');

    const hideAll = () =>{
        contentBlock.forEach(elem => elem.style.display = 'none')
    }
    const hideActive = () => {
        allBtns.forEach(elem => {
            elem.classList.remove('active')
        })
    }

    const showContent = (filter) =>{
        hideAll();
        noneblock.style.display = 'none'
        contentBlock.forEach(item =>{
        if(item.classList.contains(filter)){
            item.style.display = 'block'
            item.classList.add('animated','fadeInUp')
        }else{
            item.display = 'none'
        }
        })
    }
    const showNotDid = ()=>{
        hideAll();
        noneblock.style.display = 'block'
        noneblock.classList.add('animated','fadeInUp')
    }

    menu.addEventListener('click',(e)=>{
        hideActive()
        if(e.target.tagName == 'LI'){
            e.target.classList.add('active','animated','fadeIn')
           
        }
    }) 
    
    allBtn.addEventListener('click', ()=>showContent('all'))
    loversBtn.addEventListener('click', ()=>showContent('lovers'))
    chefBtn.addEventListener('click', ()=>showContent('chef'))
    girlBtn.addEventListener('click', ()=>showContent('girl'))
    guyBtn.addEventListener('click', ()=>showContent('guy'))
    grandmotherBtn.addEventListener('click', ()=> showNotDid())
    granddadBtn.addEventListener('click', ()=>showNotDid())
         

}
export default filterImages