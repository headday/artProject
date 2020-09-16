const calc = (size,material,options,promocode,result) =>{
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result)

    const calcSum = (promo = '') =>{
    
        if(materialBlock.value === '' || sizeBlock.value){
            resultBlock.textContent = `Выбирите материал и размер картины` 
        }else{
            let sum = +sizeBlock.value + +materialBlock.value + +optionsBlock.value
            if(promo == 'IWANTPOPART'){
                sum = sum *0.7
            }
            
            resultBlock.textContent = sum
        }
        
    }
    sizeBlock.addEventListener('change',()=>{
        calcSum();
    })
    materialBlock.addEventListener('change',()=>{
        calcSum();
    })
    optionsBlock.addEventListener('change',()=>{
        calcSum();
    })
    promocodeBlock.addEventListener('input',function(){
        calcSum(this.value)
    })


}
export default calc