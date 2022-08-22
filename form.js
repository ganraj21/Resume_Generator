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
    document.getElementById('ff_col').style.display = 'none'
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
    document.getElementById('ff_col').style.display = 'none'
    document.getElementById('thc_div').style.display = 'flex'
    document.getElementById('nb_btn').style.display = 'flex'
    document.getElementById('bt_gen').style.display = 'none'
    // document.getElementById('bd-con').style.display = 'none'
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
    document.getElementById('nb_btn').style.display = 'flex'
    document.getElementById('bt_gen').style.display = 'none'
  } else if (cnt == 4) {
    document.getElementById('f_col').style.display = 'none'
    document.getElementById('ff_col').style.display = 'flex'
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

  link.href = './resume_01/form_01.css'

  // Get HTML head element to append
  // link element to it
  document.getElementsByTagName('HEAD')[0].appendChild(link)

  document.getElementById('linkedinField').style.display = 'none'
  document.getElementById('codeChefField').style.display = 'none'
  document.getElementById('fbField').style.display = 'none'
  document.getElementById('githubField').style.display = 'none'
  document.getElementById('instaField').style.display = 'none'

  const codechef_x = () => {
    document.getElementById('codeChefField').style.display = 'flex'
    document.getElementById('codechef_btn').style.display = 'none'
  }
  document.getElementById('codechef_btn').addEventListener('click', codechef_x)

  const leetcode_x = () => {
    document.getElementById('fbField').style.display = 'flex'
    document.getElementById('leetcode_btn').style.display = 'none'
  }
  document.getElementById('leetcode_btn').addEventListener('click', leetcode_x)

  const github_x = () => {
    document.getElementById('githubField').style.display = 'flex'
    document.getElementById('github_btn').style.display = 'none'
  }
  document.getElementById('github_btn').addEventListener('click', github_x)

  const insta_x = () => {
    document.getElementById('instaField').style.display = 'flex'
    document.getElementById('insta_btn').style.display = 'none'
  }
  document.getElementById('insta_btn').addEventListener('click', insta_x)

  const linkedin_x = () => {
    document.getElementById('linkedinField').style.display = 'flex'
    document.getElementById('linked_btn').style.display = 'none'
  }
  document.getElementById('linked_btn').addEventListener('click', linkedin_x)
  // ----------------------xxx-----------------------

  document.getElementById('bcc_01').style.display = 'block'
  document.getElementById('bcc_02').style.display = 'none'
  document.getElementById('bcc_03').style.display = 'none'
  document.getElementById('exp_num').innerHTML = '1'
  const add_experience_02 = () => {
    document.getElementById('bcc_01').style.display = 'none'
    document.getElementById('bcc_02').style.display = 'block'
    document.getElementById('bcc_03').style.display = 'none'
    document.getElementById('exp_num').innerHTML = '2'
  }
  const add_experience_03 = () => {
    document.getElementById('bcc_01').style.display = 'none'
    document.getElementById('bcc_02').style.display = 'none'
    document.getElementById('bcc_03').style.display = 'block'
    document.getElementById('exp_num').innerHTML = '3'
  }
  document.getElementById('btn1').addEventListener('click', add_experience_02)
  document.getElementById('btn2').addEventListener('click', add_experience_03)

  // -----------------------------xxx-----------------------

  document.getElementById('cp_01').style.display = 'flex'
  document.getElementById('cp_02').style.display = 'none'
  document.getElementById('cp_03').style.display = 'none'

  const add_certificate_02 = () => {
    document.getElementById('cp_01').style.display = 'none'
    document.getElementById('cp_02').style.display = 'flex'
    document.getElementById('cp_03').style.display = 'none'
    document.getElementById('cancel_01').addEventListener('click', function () {
      document.getElementById('cp_02').style.display = 'none'
      document.getElementById('certificate_title_02').value = ''
      document.getElementById('certificate_description_02').value = ''
      document.getElementById('cp_01').style.display = 'flex'
    })
    document.getElementById('back_01').addEventListener('click', function () {
      document.getElementById('cp_01').style.display = 'flex'
      document.getElementById('cp_02').style.display = 'none'
    })
  }
  const add_certificate_03 = () => {
    document.getElementById('cp_02').style.display = 'none'
    document.getElementById('cp_03').style.display = 'flex'
    document.getElementById('cp_01').style.display = 'none'
    document.getElementById('cancel_02').addEventListener('click', function () {
      document.getElementById('cp_03').style.display = 'none'
      document.getElementById('certificate_title_03').value = ''
      document.getElementById('certificate_description_03').value = ''
      document.getElementById('cp_02').style.display = 'flex'
    })

    document.getElementById('back_02').addEventListener('click', function () {
      document.getElementById('cp_02').style.display = 'flex'
      document.getElementById('cp_03').style.display = 'none'
    })
  }
  document
    .getElementById('cert_btn_01')
    .addEventListener('click', add_certificate_02)
  document
    .getElementById('cert_btn_02')
    .addEventListener('click', add_certificate_03)

  // generate function --->
  const generate_fun = () => {
    // first-col-->
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

    let professional_profile_name = document.getElementById('profession_name')
      .value
    localStorage.setItem('professional_profile_name', professional_profile_name)

    // about information -->
    let profile_about_information = document.getElementById('your-about-info')
      .value
    localStorage.setItem('profile_about_information', profile_about_information)

    // education --->
    let academic_qualification_title = document.getElementById(
      'Qualification_Title',
    ).value
    localStorage.setItem(
      'academic_qualification_title',
      academic_qualification_title,
    )

    let university_qualification_title = document.getElementById(
      'University_Name',
    ).value
    localStorage.setItem(
      'university_qualification_title',
      university_qualification_title,
    )

    let qualification = document.getElementById('date_01').value
    let duration = document.getElementById('date_02').value
    let qualification_duration = qualification + ' - ' + duration
    localStorage.setItem('qualification_duration', qualification_duration)

    // experience --->
    let experience_title = document.getElementById('exp_title').value
    localStorage.setItem('experience_title', experience_title)

    let company_title =
      ' From ' +
      document.getElementById('c_s_d').value +
      ' to ' +
      document.getElementById('c_e_d').value +
      ' | ' +
      document.getElementById('your_input_company').value
    localStorage.setItem('company_title', company_title)

    let experience_desc = document.getElementById('your_company_description')
      .value
    localStorage.setItem('experience_desc', experience_desc)

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

  document.getElementById('linkedinField').style.display = 'none'
  document.getElementById('codeChefField').style.display = 'none'
  document.getElementById('fbField').style.display = 'none'
  document.getElementById('githubField').style.display = 'none'
  document.getElementById('instaField').style.display = 'none'

  const codechef_x = () => {
    document.getElementById('codeChefField').style.display = 'flex'
    document.getElementById('codechef_btn').style.display = 'none'
  }
  document.getElementById('codechef_btn').addEventListener('click', codechef_x)

  const leetcode_x = () => {
    document.getElementById('fbField').style.display = 'flex'
    document.getElementById('leetcode_btn').style.display = 'none'
  }
  document.getElementById('leetcode_btn').addEventListener('click', leetcode_x)

  const github_x = () => {
    document.getElementById('githubField').style.display = 'flex'
    document.getElementById('github_btn').style.display = 'none'
  }
  document.getElementById('github_btn').addEventListener('click', github_x)

  const insta_x = () => {
    document.getElementById('instaField').style.display = 'flex'
    document.getElementById('insta_btn').style.display = 'none'
  }
  document.getElementById('insta_btn').addEventListener('click', insta_x)

  const linkedin_x = () => {
    document.getElementById('linkedinField').style.display = 'flex'
    document.getElementById('linked_btn').style.display = 'none'
  }
  document.getElementById('linked_btn').addEventListener('click', linkedin_x)

  // -------|
  const generate_fun2 = () => {
    window.location.href = './resume_02/resume_02.html'
  }
  let bton_gen = document.getElementById('generate_btn')
  bton_gen.addEventListener('click', generate_fun2)
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

  // --------|

  const generate_fun3 = () => {
    window.location.href = './resume_03/resume_03.html'
  }
  let bton_gen = document.getElementById('generate_btn')
  bton_gen.addEventListener('click', generate_fun3)
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
