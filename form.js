// back button ---->
var cnt = 1
// first back button is disable only enable when click first next button
document.getElementById('bb_btn').disabled = true
backFun = () => {
  if (cnt == 1) {
    document.getElementById('fc_div').style.display = 'flex'
    document.getElementById('sc_div').style.display = 'none'
    document.getElementById('bb_btn').disabled = true
    document.getElementById('nb_btns').style.display = 'flex'
    document.getElementById('bt_gen').style.display = 'none'
  } else if (cnt == 2) {
    document.getElementById('sc_div').style.display = 'flex'
    document.getElementById('thc_div').style.display = 'none'
    document.getElementById('nb_btns').style.display = 'flex'
    document.getElementById('bt_gen').style.display = 'none'
  } else if (cnt == 3) {
    document.getElementById('f_col').style.display = 'none'
    document.getElementById('thc_div').style.display = 'flex'
    document.getElementById('nb_btns').style.display = 'flex'
    document.getElementById('bt_gen').style.display = 'none'
  }
  else if (cnt == 4) {
    document.getElementById('f_col').style.display = 'flex'
    document.getElementById('ff_col').style.display = 'none'
    document.getElementById('bt_gen').style.display = 'flex'
  }
  cnt--
}
// -----------|-<
// for-ward button
// document.getElementById('nb_btn').disabled = true
document.getElementById('bt_gen').style.display = 'none'
nextFun = () => {
  if (cnt == 1) {
    document.getElementById('fc_div').style.display = 'none'
    document.getElementById('sc_div').style.display = 'flex'
    document.getElementById('bb_btn').disabled = false
    document.getElementById('nb_btns').style.display = 'grid'
  } else if (cnt == 2) {
    document.getElementById('sc_div').style.display = 'none'
    document.getElementById('thc_div').style.display = 'flex'
    document.getElementById('nb_btns').style.display = 'flex'
  } else if (cnt == 3) {
    document.getElementById('thc_div').style.display = 'none'
    document.getElementById('f_col').style.display = 'flex'
    document.getElementById('nb_btns').style.display = 'none'
  } else if (cnt == 4) {
    document.getElementById('f_col').style.display = 'none'
    document.getElementById('ff_col').style.display = 'flex'
    document.getElementById('nb_btns').style.display = 'none'
    document.getElementById('bt_gen').style.display = 'grid'
    console.log("your nxt btn is display non")
  }
  cnt++
}

  // link element to it
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
  // --------|


// generate_button = document.querySelector(".btn_gen_text");
  // --------------------------------------------- experience->
  document.getElementById('bcc_01').style.display = 'flex'
  document.getElementById('bcc_02').style.display = 'none'
  document.getElementById('bcc_03').style.display = 'none'
  const add_exp_02 = () =>{
    document.getElementById('bcc_01').style.display = 'none'
    document.getElementById('bcc_02').style.display = 'flex'
    document.getElementById('bcc_03').style.display = 'none'
  }
  const add_exp_03 = () =>{
    document.getElementById('bcc_01').style.display = 'none'
    document.getElementById('bcc_02').style.display = 'none'
    document.getElementById('bcc_03').style.display = 'flex'
  }
  document.getElementById('btn_ex_01').addEventListener('click',add_exp_02)
  document.getElementById('btn_ex_02').addEventListener('click',add_exp_03)
  // -------------------------------------xxx------------------------
  // ------------------||
 // ---------------------xxx------------------- certificates_and_projects->
 document.getElementById('cp_01').style.display = 'flex'
 document.getElementById('cp_02').style.display = 'none'
 document.getElementById('cp_03').style.display = 'none'

 const add_certificate_02 = () => {
   document.getElementById('cp_01').style.display = 'none'
   document.getElementById('cp_02').style.display = 'flex'
   document.getElementById('cp_03').style.display = 'none'
   document
     .getElementById('cancel_001')
     .addEventListener('click', function () {
       document.getElementById('cp_02').style.display = 'none'
       document.getElementById('certificate_title_02').value = ''
       document.getElementById('certificate_description_02').value = ''
       document.getElementById('cp_01').style.display = 'flex'
     })
   document.getElementById('back_001').addEventListener('click', function () {
     document.getElementById('cp_01').style.display = 'flex'
     document.getElementById('cp_02').style.display = 'none'
   })
 }
 const add_certificate_03 = () => {
   document.getElementById('cp_02').style.display = 'none'
   document.getElementById('cp_03').style.display = 'flex'
   document.getElementById('cp_01').style.display = 'none'
   document
     .getElementById('cancel_002')
     .addEventListener('click', function () {
       document.getElementById('cp_03').style.display = 'none'
       document.getElementById('certificate_title_03').value = ''
       document.getElementById('certificate_description_03').value = ''
       document.getElementById('cp_02').style.display = 'flex'
     })

   document.getElementById('back_002').addEventListener('click', function () {
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
// ------------------------
   document.getElementById('prj_01').style.display = 'flex'
   document.getElementById('prj_02').style.display = 'none'
   document.getElementById('prj_03').style.display = 'none'
   const add_proj_02 = () =>{
     document.getElementById('prj_01').style.display = 'none'
     document.getElementById('prj_02').style.display = 'flex'
     document.getElementById('prj_03').style.display = 'none'

   }
   const add_proj_03 = () =>{
     document.getElementById('prj_01').style.display = 'none'
     document.getElementById('prj_02').style.display = 'none'
     document.getElementById('prj_03').style.display = 'flex'
     
   }
   document
   .getElementById('proj_btn_01')
   .addEventListener('click', add_proj_02)
 document
   .getElementById('proj_btn_02')
   .addEventListener('click', add_proj_03)

// -----------|-<

  // ----------------------------xxx-------------------educations->
  document.getElementById('aq_01').style.display = 'flex'
  document.getElementById('aq_02').style.display = 'none'
  document.getElementById('aq_03').style.display = 'none'
const addEducation_02 = () =>{
  document.getElementById('aq_01').style.display = 'none'
  document.getElementById('aq_02').style.display = 'flex'
  document.getElementById('aq_03').style.display = 'none'
}
const addEducation_03 = () =>{
  document.getElementById('aq_01').style.display = 'none'
  document.getElementById('aq_02').style.display = 'none'
  document.getElementById('aq_03').style.display = 'flex'
}

  document.getElementById('btn_educ_01').addEventListener('click',addEducation_02)
  document.getElementById('btn_educ_02').addEventListener('click',addEducation_03)
  // --------|

console.log(localStorage.getItem('txtValue'))
if (localStorage.getItem('txtValue') == '1') {
  var link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = './resume_01/form_01.css'
  document.getElementsByTagName('HEAD')[0].appendChild(link)
  // -----------------------------xxx-----------------------
    // loading function ----------------------->>>
  document.getElementById('bt_gen').addEventListener('click',()=>{
    document.getElementById('bt_gen').innerHTML = `<div class='loader'></div>`;
    setTimeout(()=>{
      document.getElementById('bt_gen').innerHTML  = "Resume Generated"
      generate_fun();
    console.log("YOU clicked on generate btn")
    },2000);
  })
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

//profile image ---->
var imgData = document.getElementById('your_profile_image').src;
// imgData = getBase64Image(bannerImage);
// localStorage.setItem("imgData", imgData);
localStorage.setItem("imgData", imgData);


// function getBase64Image(img) {
//   var canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;

//   var ctx = canvas.getContext("2d");
//   // ctx.drawImage(img, 0, 0);

//   var dataURL = canvas.toDataURL("image/png");

//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }
// let your_profile_image = document.getElementById('your_profile_image').value
// localStorage.setItem('your_profile_image', your_profile_image)
//-----|||

    let professional_profile_name = document.getElementById('profession_name')
      .value
    localStorage.setItem('professional_profile_name', professional_profile_name)

    // about information -->
    let profile_about_information = document.getElementById('your-about-info')
      .value
    localStorage.setItem('profile_about_information', profile_about_information)

    // education --->
    let academic_qualification_title = document.getElementById(
      'Qualification_Title_01',
    ).value
    localStorage.setItem(
      'academic_qualification_title',
      academic_qualification_title,
    )

    let university_qualification_title = document.getElementById(
      'University_Name_01',
    ).value
    localStorage.setItem(
      'university_qualification_title',
      university_qualification_title,
    )

    let qualification = document.getElementById('date_01_01').value
    let duration = document.getElementById('date_02_01').value
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

    
} else if (localStorage.getItem('txtValue') == '2') {
  var link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = './resume_02/resume_02.css';
  document.getElementsByTagName('HEAD')[0].appendChild(link)
  // -----------------------------xxx-----------------------
  // loading function ----------------------->>>
  document.getElementById('bt_gen').addEventListener('click',()=>{
    document.getElementById('bt_gen').innerHTML = `<div class='loader'></div>`;
    setTimeout(()=>{
      document.getElementById('bt_gen').innerHTML  = "Resume Generated"
      generate_fun2();
    console.log("YOU clicked on generate btn")
    },2000);
  })
  // generate function --->
  const generate_fun2 = () => {
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
      'Qualification_Title_01',
    ).value
    localStorage.setItem(
      'Qualification_Title_01',
      Qualification_Title_01,
    )

    let university_qualification_title = document.getElementById(
      'University_Name_01',
    ).value
    localStorage.setItem(
      'University_Name_01',
      University_Name_01,
    )

    let qualification = document.getElementById('date_01_01').value
    let duration = document.getElementById('date_02_01').value
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

    window.location.href = './resume_02/resume_02.html'
  }
} else {
  var link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = './resume_03/resume_03.css'
  document.getElementsByTagName('HEAD')[0].appendChild(link)
  // ----------------------xxx-----------------------
  // loading function ----------------------->>>
  document.getElementById('bt_gen').addEventListener('click',()=>{
    document.getElementById('bt_gen').innerHTML = `<div class='loader'></div>`;
    setTimeout(()=>{
      document.getElementById('bt_gen').innerHTML  = "Resume Generated"
      generate_fun3();
    console.log("YOU clicked on generate btn")
    },3000);
  })
    // generate function --->
  const generate_fun3 = () => {
    window.location.href = './resume_03/resume_03.html'
  }
}
