const selectBtn = document.querySelector(".select_btn"),
items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});
items.forEach(item => {
    item.addEventListener("click", () =>{
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
             btnText = document.querySelector(".btn_text");
             if(checked && checked.length > 0){
                btnText.innerText = `${checked.length} Selected`;
             }else{
                btnText.innerText = btnText.innerText = "Select Language";
             }
    });
})