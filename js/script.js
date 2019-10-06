var button=document.querySelector(".button-searh"),form=document.querySelector(".search-form"),dateOfArrival=form.querySelector("[name=date-of-arrival]");form.classList.add("hidden"),button.addEventListener("click",function(e){e.preventDefault(),form.classList.toggle("hidden"),dateOfArrival.focus()});

