import { getResource } from "../services/requests";

const showMoreStyles = (trigger,wrapper) => {
    const btn = document.querySelector(trigger);


    btn.addEventListener('click',()=>{
        getResource('assets/db.json')
        .then(res => createElems(res.styles))
        .catch(error => console.log(error));

        btn.remove();
    })


    const createElems = (res) =>{
        res.forEach(elem =>{
            const {src,title,link} = elem
            let card = document.createElement('div')
            card.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
            card.innerHTML = `
                    <div class=styles-block>
                        <img src=${src} alt>
                        <h4>${title}</h4>
                        <a href="${link}">Подробнее</a>
                    </div>
            `
            document.querySelector(wrapper).appendChild(card)
            
        })
    }
};

export default showMoreStyles;