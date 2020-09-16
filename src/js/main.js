import modals from './modules/modals'
import sliders from './modules/sliders'
import forms from './modules/forms'
import mask from './modules/mask';
import checkTextInputs from './modules/checkInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filterImages from './modules/filterImages';
import hoverImages from './modules/hoverImages';
import accardion from './modules/accardion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';


window.addEventListener('DOMContentLoaded',()=>{
    let state = {};
    modals();
    sliders('.feedback-slider-item','','.main-prev-btn','.main-next-btn');
    sliders('.main-slider-item','vertical');
    forms(state);
    mask('[name="phone"]')
    checkTextInputs('[name="name"]')
    checkTextInputs('[name="message"]')
    showMoreStyles('.button-styles', '#styles .row')
    calc('#size','#material','#options','.calc .promocode','.calc-price')
    filterImages();
    hoverImages()
    accardion();
    burger();
    scrolling('.pageup');
    drop();
})