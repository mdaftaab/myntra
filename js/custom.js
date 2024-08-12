
let close_slider = document.querySelector('.ri-skip-right-fill')
let side_slide = document.querySelector('.side_slide')
// let btn = document.querySelector('.ri-skip-right-fill')
// // let cls = document.querySelector('close')
// btn = document.addEventListener('click', function(){
// 	btn.right  = '-200px'
// })
close_slider.addEventListener('click', function(){
	side_slide.style.right = '0px'
})

