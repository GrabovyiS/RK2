let btns = document.getElementsByClassName('port-btn');
let tabs = document.getElementsByClassName('tab');
let activeIndex = 0;
let clickedIndex;
for(let i=0; i < btns.length; i++){
    btns[i].addEventListener('click', function() {
		change(i)
	})
}
function change(item){
    clickedIndex = item;
    if(clickedIndex == activeIndex){
        return;
    }
    else {
        btns[activeIndex].classList.remove('active-btn');
        btns[clickedIndex].classList.add('active-btn');
        tabs[activeIndex].classList.add('disappear');
        tabs[activeIndex].classList.remove('appear');
        setTimeout(function(){        
        tabs[activeIndex].classList.remove('is-active');
        // tabs[clickedIndex].classList.remove('disappear');
        tabs[clickedIndex].classList.add('is-active');
        setTimeout(function(){
            tabs[clickedIndex].classList.add('appear');
            activeIndex = clickedIndex
        },10)       
        }, 500)
    }
}