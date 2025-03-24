
function handleAddBtn(id){
    appendNew(id,document.getElementById(`title${id}`).value,document.getElementById(`title${id}`),1)
}


// document.getElementById('title1')?.addEventListener("keydown",(e)=>{
//     if (e.key === 'Enter') { handleAddBtn(1)}
// })

// document.getElementById('title2')?.addEventListener("keydown",(e)=>{
//     if (e.key === 'Enter') { handleAddBtn(2)}
// })

// document.getElementById('title3')?.addEventListener("keydown",(e)=>{
//     if (e.key === 'Enter') { handleAddBtn(3)}
// })

// document.getElementById('title4')?.addEventListener("keydown",(e)=>{
//     if (e.key === 'Enter') { handleAddBtn(4)}
// })

// document.getElementById('title5')?.addEventListener("keydown",(e)=>{
//     if (e.key === 'Enter') { handleAddBtn(5)}
// })



for (let i = 1; i <= 5; i++) {
    const inputElement = document.getElementById(`title${i}`);
    if (inputElement) {
      inputElement.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          handleAddBtn(i);
        }
      });
    }
  }