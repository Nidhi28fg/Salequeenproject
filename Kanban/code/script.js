
 document.getElementById('addNewLink').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.href = "add.html?showModal=true";
});



function makeSubHeaderEditable(element) {
  const subHeader = element; 
  const originalText = subHeader.innerText;
  let input;

  input = document.createElement('input');
  input.type = 'text';
  input.value = originalText;
  input.className = 'make-title-dot-overflow'; 
  input.style.outline = 'none';
  input.style.border = 'none';
  input.style.width = '75%';
  input.style.backgroundColor = '#F5F6F8';



  // Replace the subHeader with the input
  subHeader.replaceWith(input);
  input.focus();

  // Handle blur or Enter key to save changes
  const saveChanges = () => {
      const newText = input.value;
      const newSubHeader = document.createElement('span');
      newSubHeader.className = 'make-title-dot-overflow';
      newSubHeader.innerText = newText;
      input.replaceWith(newSubHeader);

      // Optional: Call your changeContent function if needed
      // Assuming you have the index (i) and id available in the context
      // and that subHeader is inside a li element.
      const liElement = newSubHeader.closest('li');
      if (liElement) {
        const upcoming = liElement.closest('[id^="upcoming"]');
        if(upcoming){
          const id = upcoming.id.replace('upcoming', '');
          const liElements = upcoming.getElementsByTagName('li');
          const index = Array.from(liElements).indexOf(liElement);
          if(index !== -1){
            changeContent(input, index, id);
          }
        }
      }
  };

  input.addEventListener('blur', saveChanges);
  input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          saveChanges();
      }
  });
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('make-title-dot-overflow')) {
      makeSubHeaderEditable(event.target);
  }
});








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