// menu for mobile

const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menuItem')
const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.closeIcon')
const menuIcon = document.querySelector('.menuIcon')

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu')
    closeIcon.style.display = 'none'
    menuIcon.style.display = 'block'
    menuItems.style.color = 'white'
  } else {
    menu.classList.add('showMenu')
    closeIcon.style.display = 'block'
    menuIcon.style.display = 'none'
  }
}
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu)
})

hamburger.addEventListener('click', toggleMenu)

// Resume Selection --->

const r_img_01 = document.getElementById('r_img_01')
const r_img_02 = document.getElementById('r_img_02')
const r_img_03 = document.getElementById('r_img_03')

document.getElementById('cv-form').style.display = 'none'
const resume_select_function = () => {
  document.getElementById('cv-form').style.display = 'flex'
  location.href = '#cv-form'
}

r_img_01.addEventListener('click', resume_select_function)
// r_img_02.addEventListener('click')
// r_img_03.addEventListener('click')

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
document.getElementById('nb_btn').disabled = false

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

// events for button back , next
const back = document.getElementById('bb_btn')
const next = document.getElementById('nb_btn')

back.addEventListener('click', backFun)
next.addEventListener('click', nextFun)
// ----------|-<

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

const addNewSKField = () => {
  let newNode = document.createElement('input')
  newNode.classList.add('form-control')
  newNode.classList.add('skField')
  newNode.classList.add('mt-2')
  newNode.setAttribute('rows', 2)
  newNode.setAttribute('placeholder', 'Your-Skills & Expertise')

  let skOb = document.getElementById('sk')
  let skAddButtonOb = document.getElementById('skAddButton')

  skOb.insertBefore(newNode, skAddButtonOb)
}

// generating cv
const generateCV = () => {
  //   console.log('Generating cv')
  document.getElementById('bd-con').style.display = 'flex'

  // setting your name here --
  let nameField_first = document.getElementById('nameField_first').value
  let nameField_last = document.getElementById('nameField_last').value
  document.getElementById('last_name').innerHTML = nameField_last
  document.getElementById('first_name').innerHTML = nameField_first
  //  --|

  // setting your profession --
  document.getElementById(
    'home-profession',
  ).innerHTML = document.getElementById('profession_name').value
  // --|
  let address = document.getElementById('addressField').value
  document.getElementById('your-address-here').innerHTML = address

  let email = document.getElementById('contactField-email').value
  document.getElementById('your-email-id').innerHTML = email

  let phone = document.getElementById('contactField-phone').value
  document.getElementById('your-phone-no').innerHTML = phone

  // social media --
  document.getElementById('link-of-linkedin').href = document.getElementById(
    'linkedinField',
  ).value

  document.getElementById('link-of-codechef').href = document.getElementById(
    'codeChefField',
  ).value

  document.getElementById('link-of-github').href = document.getElementById(
    'githubField',
  ).value
  // --|

  // your skills here --
  let skills = document.getElementById('contactField-phone').value
  document.getElementById('your-phone-no').innerHTML = skills

  // setting your about section --
  document.getElementById(
    'your-profile-description',
  ).innerHTML = document.getElementById('your-about-info').value
  // --|

  // Experience --->
  document.getElementById(
    ' your_experience_title',
  ).innerHTML = document.getElementById('your_input_company').value

  let your_company_description = document.getElementById(
    'your_company_description',
  ).value
  document.getElementById(
    'your_profile_experience_description',
  ).innerHTML = your_company_description
  // ---|

  //   direct
  document.getElementById('nameT2').innerHTML = nameField

  //   contact
  document.getElementById('contactT').innerHTML = document.getElementById(
    'contactField',
  ).value

  //   address
  document.getElementById('addressT').innerHTML = document.getElementById(
    'addressField',
  ).value

  //   social media links
  let fc = document.getElementById('fbField').value
  let ic = document.getElementById('instaField').value
  let li = document.getElementById('linkedinField').value
  document.getElementById('fbT').href = fc
  document.getElementById('instaT').href = ic
  document.getElementById('linkedT').href = li

  // Your skills and experties

  var ski = document.getElementsByClassName('skField')
  let str0 = ''
  for (let k of ski) {
    str0 += `<li>${k.value}</li>`
  }
  document.getElementById('my_skills').innerHTML = str0

  //   about your-self
  document.getElementById('objectiveT').innerHTML = document.getElementById(
    'objectiveField',
  ).value

  //  we
  let wes = document.getElementsByClassName('weField')
  let str = ''
  for (let e of wes) {
    str += `<li>${e.value}</li>`
  }
  document.getElementById('weT').innerHTML = str

  //   aq
  let aqs = document.getElementsByClassName('aqField')
  let str1 = ''
  for (let e of aqs) {
    str1 += `<li>${e.value}</li>`
  }
  document.getElementById('aqT').innerHTML = str1

  //this code is for setting photo
  //let file = document.getElementById('imgField').files[0]
  //let reader = new FileReader()
  //reader.readAsDataURL(file)

  // reader.onloadend = function () {
  //   document.getElementById('imgTemplate').src = reader.result
  // }

  document.getElementById('cv-form').style.display = 'none'
  document.getElementById('cv-template').style.display = 'block'
}

// print cv
function printCV() {
  console.log('converting...')

  var printableArea = document.getElementById('row21')

  html2canvas(printableArea, {
    useCORS: true,
    onrendered: function (canvas) {
      var pdf = new jsPDF('p', 'pt', 'letter')

      var pageHeight = 980
      var pageWidth = 980
      for (var i = 0; i <= printableArea.clientHeight / pageHeight; i++) {
        var srcImg = canvas
        var sX = 0
        var sY = pageHeight * i // start 1 pageHeight down for every new page
        var sWidth = pageWidth
        var sHeight = pageHeight
        var dX = 0
        var dY = 0
        var dWidth = pageWidth
        var dHeight = pageHeight

        window.onePageCanvas = document.createElement('canvas')
        onePageCanvas.setAttribute('width', pageWidth)
        onePageCanvas.setAttribute('height', pageHeight)
        var ctx = onePageCanvas.getContext('2d')
        ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight)

        var canvasDataURL = onePageCanvas.toDataURL('image/png', 1.0)
        var width = onePageCanvas.width
        var height = onePageCanvas.clientHeight

        if (i > 0)
          // if we're on anything other than the first page, add another page
          pdf.addPage(612, 791) // 8.5" x 11" in pts (inches*72)

        pdf.setPage(i + 1) // now we declare that we're working on that page
        pdf.addImage(canvasDataURL, 'PNG', 20, 40, width * 0.72, height * 0.62) // add content to the page
      }
      pdf.save('test.pdf')
    },
  })
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
      $('.image-upload-wrap').hide()

      $('.file-upload-image').attr('src', e.target.result)
      $('.file-upload-content').show()

      $('.image-title').html(input.files[0].name)
    }

    reader.readAsDataURL(input.files[0])
  } else {
    removeUpload()
  }
}
