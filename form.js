// back button ---->
var cnt = 1
// first back button is disable only enable when click first next button
document.getElementById('bb_btn').disabled = true
backFun = () => {
  if (cnt == 1) {
    document.getElementById('fc_div').style.display = 'flex'
    document.getElementById('sc_div').style.display = 'none'
    document.getElementById('thc_div').style.display = 'none'
    document.getElementById('f_col').style.display = 'none'
    document.getElementById('bb_btn').disabled = true
    document.getElementById('nb_btn').disabled = false
    document.getElementById('nb_btn').style.display = 'flex'
    document.getElementById('bt_gen').style.display = 'none'
  } else if (cnt == 2) {
    document.getElementById('sc_div').style.display = 'flex'
    document.getElementById('thc_div').style.display = 'none'
    document.getElementById('f_col').style.display = 'none'
    document.getElementById('nb_btn').style.display = 'flex'
    document.getElementById('bt_gen').style.display = 'none'
  } else if (cnt == 3) {
    document.getElementById('f_col').style.display = 'none'
    document.getElementById('thc_div').style.display = 'flex'
    document.getElementById('nb_btn').style.display = 'flex'
    document.getElementById('bt_gen').style.display = 'none'
    document.getElementById('bd-con').style.display = 'none'
  }
  cnt--
}
// -----------|-<
// for-ward button
// document.getElementById('nb_btn').disabled = true
nextFun = () => {
  if (cnt == 1) {
    document.getElementById('fc_div').style.display = 'none'
    document.getElementById('sc_div').style.display = 'flex'
    document.getElementById('bb_btn').disabled = false
    document.getElementById('nb_btn').style.display = 'flex'
  } else if (cnt == 2) {
    document.getElementById('sc_div').style.display = 'none'
    document.getElementById('thc_div').style.display = 'flex'
    document.getElementById('f_col').style.display = 'none'
    document.getElementById('nb_btn').style.display = 'flex'
    document.getElementById('bt_gen').style.display = 'none'
  } else if (cnt == 3) {
    document.getElementById('thc_div').style.display = 'none'
    document.getElementById('f_col').style.display = 'flex'
    document.getElementById('nb_btn').style.display = 'none'
    document.getElementById('bt_gen').style.display = 'flex'
  }
  cnt++
}

console.log(localStorage.getItem('txtValue'))
if (localStorage.getItem('txtValue') == '1') {
  // Create new link Element
  var link = document.createElement('link')
  // set the attributes for link element
  link.rel = 'stylesheet'

  link.type = 'text/css'

  link.href = './resume_01/resume_01.css'

  // Get HTML head element to append
  // link element to it
  document.getElementsByTagName('HEAD')[0].appendChild(link)
  // generate function --->
  const generate_fun = () => {
    // location.href('./resume_01/resume_01.html')

    // fetch('./resume_01/resume_01.html')
    let your_first_name = document.getElementById('nameField_first').value
    localStorage.setItem('your_first_name', your_first_name)

    let your_last_name = document.getElementById('nameField_last').value
    localStorage.setItem('your_last_name', your_last_name)

    let your_phone_no = document.getElementById('contactField-phone').value
    localStorage.setItem('your_phone_no', your_phone_no)

    let your_email = document.getElementById('contactField-email').value
    localStorage.setItem('your_email', your_email)

    let your_home_address = document.getElementById('addressField').value
    localStorage.setItem('your_home_address', your_home_address)
    window.location.href = './resume_01/resume_01.html'
  }
  //   generate btn -->
  let bton_gen = document.getElementById('generate_btn')
  bton_gen.addEventListener('click', generate_fun)
} else if (localStorage.getItem('txtValue') == '2') {
  // Create new link Element
  var link = document.createElement('link')
  // set the attributes for link element
  link.rel = 'stylesheet'

  link.type = 'text/css'

  link.href = './resume_02/resume_02.css'

  // Get HTML head element to append
  // link element to it
  document.getElementsByTagName('HEAD')[0].appendChild(link)
} else {
  // Create new link Element
  var link = document.createElement('link')
  // set the attributes for link element
  link.rel = 'stylesheet'

  link.type = 'text/css'

  link.href = './resume_03/resume_03.css'

  // Get HTML head element to append
  // link element to it
  document.getElementsByTagName('HEAD')[0].appendChild(link)
}

function addNewWEField() {
  //   console.log('hey hii this is ganesh')
  let newNode = document.createElement('textarea')
  newNode.classList.add('form-control')
  newNode.classList.add('weField')
  newNode.classList.add('mt-2')
  //   newNode.setAttribute('rows', 3)
  newNode.setAttribute('placeholder', 'Enter Here')

  let weOb = document.getElementById('we')
  let weAddButtonOb = document.getElementById('weAddButton')

  weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewAQField() {
  let newNode = document.createElement('textarea')
  newNode.classList.add('form-control')
  newNode.classList.add('aqField')
  newNode.classList.add('mt-2')
  newNode.setAttribute('placeholder', 'Enter Here')

  let aqOb = document.getElementById('aq')
  let aqAddButtonOb = document.getElementById('aqAddButton')

  aqOb.insertBefore(newNode, aqAddButtonOb)
}
