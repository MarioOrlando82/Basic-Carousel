let idx = 0;
const slide = document.querySelectorAll(".image img");

function show(n) {
    idx = idx + n;
    if(idx < 0){
        idx = slide.length - 1;
    }else if (idx >= slide.length){
        idx = 0;
    }

    for(let i = 0; i < slide.length; i++){
        slide[i].classList.remove("active");
    }
    slide[idx].classList.add("active");
}
show(0);

function prev(){
    show(-1);
}

function next(){
    show(1);
}
