(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()

  var vendre = document.getElementById('vendre');
  vendre.addEventListener('click',function(e){
    location.href='vendre.html';
  })
  var achter = document.getElementById('acheter');
  acheter.addEventListener('click',function(e){
    location.href='acheter.html';
  })
