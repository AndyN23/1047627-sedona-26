
var button=document.querySelector(".button-searh"),form=document.querySelector(".search-form"),dateOfArrival=form.querySelector("[name=date-of-arrival]"),minus=document.querySelector(".minus"),plus=document.querySelector(".plus"),result=document.querySelector(".number"),minusKids=document.querySelector(".number-of-kids .minus"),plusKids=document.querySelector(".number-of-kids .plus"),resultKids=document.querySelector(".number-of-kids .number");form.classList.add("hidden"),button.addEventListener("click",function(e){e.preventDefault(),form.classList.toggle("search-form-show"),dateOfArrival.focus()}),minus.addEventListener("click",function(){0<result.value&&result.value--}),plus.addEventListener("click",function(){result.value++}),minusKids.addEventListener("click",function(){0<resultKids.value&&resultKids.value--}),plusKids.addEventListener("click",function(){resultKids.value++});
