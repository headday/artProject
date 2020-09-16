const hoverImages = () =>{
    const hoverBlocks = document.querySelectorAll('.sizes-block')
    
    hoverBlocks.forEach(block =>{
        block.addEventListener('mouseover',()=>{
              showImg(block)
        })
        block.addEventListener('mouseout',()=>{
            hideImg(block)
      })
    })
    

    const showImg = (block) =>{
        const img = block.querySelector('img')

        img.src = img.src.slice(0,-4) + '-1.png'
        block.querySelectorAll('p:not(.sizes-hit)').forEach(elem =>{
            elem.style.display = 'none'
        })
    }
    const hideImg = (block) =>{
        const img = block.querySelector('img')

        img.src = img.src.slice(0,-6) + '.png'
        block.querySelectorAll('p:not(.sizes-hit)').forEach(elem =>{
            elem.style.display = 'block'
        })
    }
    
}
export default hoverImages;