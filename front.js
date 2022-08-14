function check() {
  let your_name = document.getElementById('nameField_first').value
  if (your_name != '') {
    document.getElementById('nb_btn').disabled = false
  } else {
    // your_name.style.border = 'red'
    alert('your name field is empty')
    document
      .getElementById('nameField_first')
      .addEventListener('click', function () {
        if (your_name == '') {
          document.getElementById('nb_btn').disabled = true
        }
      })
    console.log('you are clicked on next btn')
  }
}
// document.getElementById('error').style.display = 'none'
// function errorMessage() {
//   var error = document.getElementById('error')
//   if (isNaN(document.getElementById('nameField_first').value)) {
//     // Changing content and color of content
//     error.innerHTML = 'Please enter a valid number'
//     error.style.color = 'red'
//   } else {
//     error.textContent = ''
//   }
// }

// const isEmpty = () => {
//   return !str.trim().length
// }

// document
//   .getElementById('nameField_first')
//   .addEventListener('input', function () {
//     if (isEmpty(this.value)) {
//       console.log('all fields are required')
//     }
//   })
