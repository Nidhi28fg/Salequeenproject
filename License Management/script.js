document.addEventListener('DOMContentLoaded', function() {
    const expandCollapseSpans = document.querySelectorAll('.expand-collapse');

    expandCollapseSpans.forEach(span => {
        const row = span.closest('tr');
        const cellCount = row.cells.length;
        span.classList.add('collapsed'); // Initial state

        span.addEventListener('click', function() {
            try {
                if (this.classList.contains('collapsed')) {
                    this.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
                    this.style.color = 'red';
                    this.classList.remove('collapsed');
                    this.classList.add('expanded');

                    const newRow = document.createElement('tr');
                    newRow.classList.add('expanded-row');

                    const newCell = document.createElement('td');
                    newCell.setAttribute('colspan', cellCount);
                    newCell.style.whiteSpace = 'nowrap';

                    newCell.innerHTML = `
                        <p class="checkin-btn" style= "display: inline-block;">CheckIn/<br> Check-Out</p>
                        <button class="checkout-btn" id="checkoutButton"  data-bs-toggle="modal"
                  data-bs-target="#checkoutModal"> Check-Out</button>
                    `;

                    newRow.appendChild(newCell);
                    row.insertAdjacentElement('afterend', newRow);

                } else {
                    this.innerHTML = '<i class="fa-sharp fa-solid fa-circle-plus"></i>';
                    this.style.color = '#434e88';
                    this.classList.remove('expanded');
                    this.classList.add('collapsed');


                    const expandedRow = row.nextElementSibling;
                    if (expandedRow && expandedRow.classList.contains('expanded-row')) {
                        expandedRow.remove();
                    }
                }
            } catch (error) {
                console.error('Error handling expand/collapse:', error);
            }
        });
    });
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('checkout-btn')) {
            const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
            checkoutModal.show();
        }
    });

});


    document.getElementById('add-btn').addEventListener('click', function() {
      document.getElementById('add-btn').style.display = 'none';
      document.getElementById('bulk-upload-btn').style.display = 'none';
      document.getElementById('collapse').style.display = 'none';
      document.getElementById('collapse2').style.display = 'none';
      document.getElementById('download-btn').style.display = 'inline-block';
      document.getElementById('notes-section').style.display = 'block';

    });




    document.addEventListener('DOMContentLoaded', function() {
      const navLinks = document.querySelectorAll('.nav-link');
      const sectionContents = document.querySelectorAll('.section-content');

      navLinks.forEach(link => {
          link.addEventListener('click', function (e) {
              e.preventDefault();

              const targetId = this.getAttribute('data-target');
              sectionContents.forEach(section => {
                  section.style.display = 'none';
              });
              document.getElementById(targetId).style.display = 'block';
              navLinks.forEach(navLink => {
                  navLink.classList.remove("active");
                  navLink.style.color = "#000";
              });
              //add active class to the clicked link.
              this.classList.add("active");
              this.style.color = "#007bff";

          });
      });
      //show the first section on load.
      document.getElementById("details").style.display = "block";
  });


  $(document).ready(function() {
    $('#bulk-upload-btn').click(function() {
        $('#addLicenseModal').modal('show');
    });
});


$(document).ready(function() {
    $('#uploadButton').click(function(){
        $('#addLicenseModal').modal('show')
    })
});




function validateForm() {
    let isValid = true;
    let fields = ["softwareName", "softwarName", "soft", "categoryName", "manufacturer" , "forSell", "seats", "sellingPrice"];
  
    fields.forEach(field => {
      let inputElement = document.getElementById(field);
      let errorElement = document.getElementById(field + "Error");
  
      console.log("Field:", field);
      console.log("inputElement:", inputElement);
      console.log("errorElement:", errorElement);
  
      if (!inputElement || !errorElement) {
        console.log("Element not found, skipping");
        return;
      }
  
      let value = inputElement.value;
      console.log("Value:", value);
  
      if (inputElement.tagName === "SELECT") {
        // Check if the selected index is 0 (the default "Select..." option)
        if (inputElement.selectedIndex === 0) {
          console.log("Dropdown is empty");
          errorElement.style.display = "block";
          isValid = false;
        } else {
          console.log("Dropdown is valid");
          errorElement.style.display = "none";
        }
      } else {
        if (value.trim() === "") {
          console.log("Field is empty");
          errorElement.style.display = "block";
          isValid = false;
        } else {
          console.log("Field is valid");
          errorElement.style.display = "none";
        }
      }
    });
  
    if (isValid) {
      alert("Form Submitted Successfully!");
      return true; // Allow form submission
    } else {
      return false; // Prevent form submission
    }
  }



  function validatForm() {
    let isValid = true;
    let fields = ["soft", "sellingP","categoryNam","seat", "manufactur"];
  
    fields.forEach(field => {
      let inputElement = document.getElementById(field);
      let errorElement = document.getElementById(field + "Error");
  
      console.log("Field:", field);
      console.log("inputElement:", inputElement);
      console.log("errorElement:", errorElement);
  
      if (!inputElement || !errorElement) {
        console.log("Element not found, skipping");
        return;
      }
  
      let value = inputElement.value;
      console.log("Value:", value);
  
      if (inputElement.tagName === "SELECT") {
        // Check if the selected index is 0 (the default "Select..." option)
        if (inputElement.selectedIndex === 0) {
          console.log("Dropdown is empty");
          errorElement.style.display = "block";
          isValid = false;
        } else {
          console.log("Dropdown is valid");
          errorElement.style.display = "none";
        }
      } else {
        if (value.trim() === "") {
          console.log("Field is empty");
          errorElement.style.display = "block";
          isValid = false;
        } else {
          console.log("Field is valid");
          errorElement.style.display = "none";
        }
      }
    });
  
    if (isValid) {
      alert("Form Submitted Successfully!");
      return true; // Allow form submission
    } else {
      return false; // Prevent form submission
    }
  }


  function uploadfileForm() {
    let isValid = true;
    let fields = ["file","filex"];
  
    fields.forEach(field => {
      let inputElement = document.getElementById(field);
      let errorElement = document.getElementById(field + "Error");
  
      console.log("Field:", field);
      console.log("inputElement:", inputElement);
      console.log("errorElement:", errorElement);
  
      if (!inputElement || !errorElement) {
        console.log("Element not found, skipping");
        return;
      }
  
      let value = inputElement.value;
      console.log("Value:", value);
  
      if (inputElement.tagName === "SELECT") {
        // Check if the selected index is 0 (the default "Select..." option)
        if (inputElement.selectedIndex === 0) {
          console.log("Dropdown is empty");
          errorElement.style.display = "block";
          isValid = false;
        } else {
          console.log("Dropdown is valid");
          errorElement.style.display = "none";
        }
      } else {
        if (value.trim() === "") {
          console.log("Field is empty");
          errorElement.style.display = "block";
          isValid = false;
        } else {
          console.log("Field is valid");
          errorElement.style.display = "none";
        }
      }
    });
  
    if (isValid) {
      alert("Form Submitted Successfully!");
      return true; // Allow form submission
    } else {
      return false; // Prevent form submission
    }
  }


  function checkInfun() {
    let isValid = true;
    let fields = ["excelFile"];
  
    fields.forEach(field => {
      let inputElement = document.getElementById(field);
      let errorElement = document.getElementById(field + "Error");
  
      console.log("Field:", field);
      console.log("inputElement:", inputElement);
      console.log("errorElement:", errorElement);
  
      if (!inputElement || !errorElement) {
        console.log("Element not found, skipping");
        return;
      }
  
      let value = inputElement.value;
      console.log("Value:", value);
  
      if (inputElement.tagName === "SELECT") {
        // Check if the selected index is 0 (the default "Select..." option)
        if (inputElement.selectedIndex === 0) {
          console.log("Dropdown is empty");
          errorElement.style.display = "block";
          isValid = false;
        } else {
          console.log("Dropdown is valid");
          errorElement.style.display = "none";
        }
      } else {
        if (value.trim() === "") {
          console.log("Field is empty");
          errorElement.style.display = "block";
          isValid = false;
        } else {
          console.log("Field is valid");
          errorElement.style.display = "none";
        }
      }
    });
  
    if (isValid) {
      alert("Form Submitted Successfully!");
      return true; // Allow form submission
    } else {
      return false; // Prevent form submission
    }
  }