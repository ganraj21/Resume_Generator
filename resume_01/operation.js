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

// Compiling information in Resume --->
const generate_resume = () => {
  //   console.log('Generating resume')
  location.href = '#area-cv'

  document.getElementById('bd-con').style.display = 'flex'

  // setting your name here -->
  let nameField_first = document.getElementById('nameField_first').value
  let nameField_last = document.getElementById('nameField_last').value
  document.getElementById('last_name').innerHTML = nameField_last
  document.getElementById('first_name').innerHTML = nameField_first
  //  --|

  // setting your profession -->
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

  // Experience --->
  document.getElementById(
    ' your_experience_title',
  ).innerHTML = document.getElementById('your_input_company').value

  // setting your about section --
  document.getElementById(
    'your-profile-description',
  ).innerHTML = document.getElementById('your-about-info').value
  // --|

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

// const spinner = () => {
//   setInterval(spin, 3000)
//   clearInterval(spin)
//   generate_resume()
// }
// document.getElementById('area-cv').style.display = 'none'

// const myInterval = setInterval(
//   (spin = () => {
//     document.getElementById('bt_gen').classList.toggle('visible')
//     console.log('You clicked')
//   }),
//   3000,
// )

function load() {
  // document.getElementById('bt_gen').style.display = 'block'
  setTimeout(stop, 3000)
  generate_resume()
  document.getElementById('area-cv').style.display = 'flex'
}

function stop() {
  document.getElementById('bt_gen').classList.toggle('visible')
}
