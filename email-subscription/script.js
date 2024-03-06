const scriptURL = 'https://script.google.com/macros/s/AKfycbwOwXVCFhfu1VCGxgxnTasewQ2y0kECky6eyjFr99wAl_R9_QS8wr1VXHSdSoHMKNeIkw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank you for subscribing!";
        setTimeout(function(){
            msg.innerHTML ="";
        }, 3000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })