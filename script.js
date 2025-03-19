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
                        <button class="checkout-btn">Check-Out</button>
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
});


    document.getElementById('add-btn').addEventListener('click', function() {
      document.getElementById('add-btn').style.display = 'none';
      document.getElementById('bulk-upload-btn').style.display = 'none';
      document.getElementById('collapse').style.display = 'none';
      document.getElementById('collapse2').style.display = 'none';
      document.getElementById('download-btn').style.display = 'inline-block';
      document.getElementById('notes-section').style.display = 'block';

    });

    document.getElementById('uploadButton').addEventListener('click', function() {
      const fileInput = document.getElementById('file');
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        console.log('File selected:', file.name);
      } else {
        alert('Please choose a file.');
      }
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
  
   