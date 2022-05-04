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

function addNewSKField() {
  let newNode = document.createElement('textarea')
  newNode.classList.add('form-control')
  newNode.classList.add('skField')
  newNode.classList.add('mt-2')
  newNode.setAttribute('rows', 1)
  newNode.setAttribute('placeholder', 'Enter Here')

  let skOb = document.getElementById('sk')
  let skAddButtonOb = document.getElementById('skAddButton')

  skOb.insertBefore(newNode, skAddButtonOb)
}

// generating cv
function generateCV() {
  //   console.log('Generating cv')

  let nameField = document.getElementById('nameField').value

  let nameT1 = document.getElementById('nameT1')

  nameT1.innerHTML = nameField
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

  // this code is for setting photo
  // let file = document.getElementById('imgField').files[0]
  // let reader = new FileReader()
  // reader.readAsDataURL(file)

  // reader.onloadend = function () {
  //   document.getElementById('imgTemplate').src = reader.result
  // }

  document.getElementById('cv-form').style.display = 'none'
  document.getElementById('cv-template').style.display = 'block'
}

// print cv

function printCV() {
  // window.print()
  const element = document.getElementById('cv-template')
  html2pdf().from(element).save()
}
