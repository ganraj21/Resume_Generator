// back button ---->
var cnt = 1
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

  const linkedin_x = () => {
    document.getElementById('linkedinField').style.display = 'flex'
    document.getElementById('linked_btn').style.display = 'none'
  }
  document.getElementById('linked_btn').addEventListener('click', linkedin_x)
  // --------|

  // --------------------------------------------- experience->

  document.getElementById('bcc_01').style.display = 'flex'
  document.getElementById('bcc_02').style.display = 'none'
  document.getElementById('bcc_03').style.display = 'none'
  const add_exp_02 = () =>{
    document.getElementById('bcc_01').style.display = 'none'
    document.getElementById('bcc_02').style.display = 'flex'
    document.getElementById('bcc_03').style.display = 'none'
    document
    .getElementById('cancel_01')
    .addEventListener('click', function () {
      document.getElementById('bcc_02').style.display = 'none'
      document.getElementById('exp_title_02').value = ''
      document.getElementById('your_input_company_02').value = ''
      document.getElementById('your_company_description_02').value = ''
      document.getElementById('c_s_d_02').value = " "
      document.getElementById('c_e_d_02').value = " "
      document.getElementById('bcc_01').style.display = 'flex'
    })
  document.getElementById('back_01').addEventListener('click', function () {
    document.getElementById('bcc_01').style.display = 'flex'
    document.getElementById('bcc_02').style.display = 'none'
  })
  }
  const add_exp_03 = () =>{
    document.getElementById('bcc_01').style.display = 'none'
    document.getElementById('bcc_02').style.display = 'none'
    document.getElementById('bcc_03').style.display = 'flex'
    document
    .getElementById('cancel_02')
    .addEventListener('click', function () {
      document.getElementById('bcc_03').style.display = 'none'
      document.getElementById('exp_title_03').value = ''
      document.getElementById('your_input_company_03').value = ''
      document.getElementById('your_company_description_03').value = ''
      document.getElementById('c_s_d_03').value = " "
      document.getElementById('c_e_d_03').value = " "
      document.getElementById('bcc_02').style.display = 'flex'
    })
  document.getElementById('back_02').addEventListener('click', function () {
    document.getElementById('bcc_02').style.display = 'flex'
    document.getElementById('bcc_03').style.display = 'none'
  })
  }
  document.getElementById('btn_ex_01').addEventListener('click',add_exp_02)
  document.getElementById('btn_ex_02').addEventListener('click',add_exp_03)


  // -------------------------------------xxx------------------------

  
  // ----------------------------xxx-------------------educations->
  document.getElementById('aq_01').style.display = 'flex'
  document.getElementById('aq_02').style.display = 'none'
  document.getElementById('aq_03').style.display = 'none'
const addEducation_02 = () =>{
  document.getElementById('aq_01').style.display = 'none'
  document.getElementById('aq_02').style.display = 'flex'
  document.getElementById('aq_03').style.display = 'none'
  document
    .getElementById('aq_cancle_01')
    .addEventListener('click', function () {
      document.getElementById('aq_02').style.display = 'none'
      document.getElementById('Qualification_Title_02').value = ''
      document.getElementById('University_Name_02').value = ''
      document.getElementById('date_01_02').value = ''
      document.getElementById('date_02_02').value = ''
      document.getElementById('aq_01').style.display = 'flex'
    })
  document.getElementById('aq_back_01').addEventListener('click', function () {
    document.getElementById('aq_01').style.display = 'flex'
    document.getElementById('aq_02').style.display = 'none'
  })
}
const addEducation_03 = () =>{
  document.getElementById('aq_01').style.display = 'none'
  document.getElementById('aq_02').style.display = 'none'
  document.getElementById('aq_03').style.display = 'flex'

  document
  .getElementById('aq_cancle_02')
  .addEventListener('click', function () {
    document.getElementById('aq_03').style.display = 'none'
    document.getElementById('Qualification_Title_03').value = ''
    document.getElementById('University_Name_03').value = ''
    document.getElementById('date_01_03').value = ''
    document.getElementById('date_02_03').value = ''
    document.getElementById('aq_02').style.display = 'flex'
  })
document.getElementById('aq_back_02').addEventListener('click', function () {
  document.getElementById('aq_02').style.display = 'flex'
  document.getElementById('aq_03').style.display = 'none'
})
}

  document.getElementById('btn_educ_01').addEventListener('click',addEducation_02)
  document.getElementById('btn_educ_02').addEventListener('click',addEducation_03)
  // --------|


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
     document
     .getElementById('cancle_p_01')
     .addEventListener('click', function () {
       document.getElementById('prj_02').style.display = 'none'
       document.getElementById('project_title_02').value = ''
       document.getElementById('project_description_02').value = ''
       document.getElementById('prj_01').style.display = 'flex'
     })
   document.getElementById('back_p_01').addEventListener('click', function () {
     document.getElementById('prj_01').style.display = 'flex'
     document.getElementById('prj_02').style.display = 'none'
   })
   }
   const add_proj_03 = () =>{
     document.getElementById('prj_01').style.display = 'none'
     document.getElementById('prj_02').style.display = 'none'
     document.getElementById('prj_03').style.display = 'flex'
     document
     .getElementById('cancle_p_02')
     .addEventListener('click', function () {
       document.getElementById('prj_03').style.display = 'none'
       document.getElementById('project_title_03').value = ''
       document.getElementById('project_description_03').value = ''
       document.getElementById('prj_02').style.display = 'flex'
     })
   document.getElementById('back_p_02').addEventListener('click', function () {
     document.getElementById('prj_02').style.display = 'flex'
     document.getElementById('prj_03').style.display = 'none'
   })
     
   }
   document
   .getElementById('proj_btn_01')
   .addEventListener('click', add_proj_02)
 document
   .getElementById('proj_btn_02')
   .addEventListener('click', add_proj_03)

// -----------|-<

  // ---------------------------------------------------------------------xxx-------------------------------------
     
const form_data = () =>{
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

 let professional_profile_name = document.getElementById('profession_name').value
 localStorage.setItem('professional_profile_name', professional_profile_name)
// social media links -->
let codechef = document.getElementById('codeChefField').value;
const arr = codechef.split('/');
localStorage.setItem('arr', arr)
// ----------------------||
 // about information -->
 let profile_about_information = document.getElementById('your-about-info').value
 localStorage.setItem('profile_about_information', profile_about_information)

 // education --->
 // first education entry by user -->
 let academic_qualification_title_01 = document.getElementById(
   'Qualification_Title_01',
 ).value
 localStorage.setItem(
   'academic_qualification_title_01',
   academic_qualification_title_01,
 )
 let university_qualification_title_01 = document.getElementById(
   'University_Name_01',
 ).value
 localStorage.setItem(
   'university_qualification_title_01',
   university_qualification_title_01,
 )

 let qualification_01 = document.getElementById('date_01_01').value
 let duration_01 = document.getElementById('date_02_01').value
 let qualification_duration_01 = qualification_01 + ' - ' + duration_01
 localStorage.setItem('qualification_duration_01', qualification_duration_01)
// Second education entry by user -->
let academic_qualification_title_02 = document.getElementById(
 'Qualification_Title_02',
).value
localStorage.setItem(
 'academic_qualification_title_02',
 academic_qualification_title_02,
)
let university_qualification_title_02 = document.getElementById(
 'University_Name_02',
).value
localStorage.setItem(
 'university_qualification_title_02',
 university_qualification_title_02,
)

let qualification_02 = document.getElementById('date_01_02').value
let duration_02 = document.getElementById('date_02_02').value
let qualification_duration_02 = qualification_02 + ' - ' + duration_02
localStorage.setItem('qualification_duration_02', qualification_duration_02)
  // Third education entry by user -->
  let academic_qualification_title_03 = document.getElementById(
   'Qualification_Title_03',
 ).value
 localStorage.setItem(
   'academic_qualification_title_03',
   academic_qualification_title_03,
 )

 let university_qualification_title_03 = document.getElementById(
   'University_Name_03',
 ).value
 localStorage.setItem(
   'university_qualification_title_03',
   university_qualification_title_03,
 )

 let qualification_03 = document.getElementById('date_01_03').value
 let duration_03 = document.getElementById('date_02_03').value
 let qualification_duration_03 = qualification_03 + ' - ' + duration_03
 localStorage.setItem('qualification_duration_03', qualification_duration_03)



 // ----------------------||
 let profession_name = document.getElementById('profession_name').value
 localStorage.setItem("profession_name",profession_name)
 // ----------------------||
// experience --->
 // your first experience --->
 let experience_title_01 = document.getElementById('exp_title_01').value
 localStorage.setItem('experience_title_01', experience_title_01)

 let company_title_01 =
   ' From ' +
   document.getElementById('c_s_d_01').value +
   ' to ' +
   document.getElementById('c_e_d_01').value +
   ' | ' +
   document.getElementById('your_input_company_01').value
 localStorage.setItem('company_title_01', company_title_01)

 let experience_desc_01 = document.getElementById('your_company_description_01')
   .value
 localStorage.setItem('experience_desc_01', experience_desc_01)
// your Second experience --->
let experience_title_02 = document.getElementById('exp_title_02').value
localStorage.setItem('experience_title_02', experience_title_02)

let company_title_02 =
 ' From ' +
 document.getElementById('c_s_d_02').value +
 ' to ' +
 document.getElementById('c_e_d_02').value +
 ' | ' +
 document.getElementById('your_input_company_02').value
localStorage.setItem('company_title_02', company_title_02)

let experience_desc_02 = document.getElementById('your_company_description_02')
 .value
localStorage.setItem('experience_desc_02', experience_desc_02)
// your Third experience --->
let experience_title_03 = document.getElementById('exp_title_03').value
localStorage.setItem('experience_title_03', experience_title_03)

 let company_title_03 =
   ' From ' +
   document.getElementById('c_s_d_03').value +
   ' to ' +
   document.getElementById('c_e_d_03').value +
   ' | ' +
   document.getElementById('your_input_company_03').value
 localStorage.setItem('company_title_03', company_title_03)

 let experience_desc_03 = document.getElementById('your_company_description_03')
   .value
 localStorage.setItem('experience_desc_03', experience_desc_03)

// -----------------------||
// your certificates date is here --->
// your first certificate --->
let certificate_title_01 =  document.getElementById('certificate_title_01').value
localStorage.setItem('certificate_title_01', certificate_title_01)

let certificate_description_01 = document.getElementById('certificate_description_01').value
localStorage.setItem('certificate_description_01', certificate_description_01)
// your Second certificate --->
let certificate_title_02 =  document.getElementById('certificate_title_02').value
localStorage.setItem('certificate_title_02', certificate_title_02)

let certificate_description_02 = document.getElementById('certificate_description_02').value
localStorage.setItem('certificate_description_02', certificate_description_02)
// your Third certificate --->

let certificate_title_03 =  document.getElementById('certificate_title_03').value
localStorage.setItem('certificate_title_03', certificate_title_03)

let certificate_description_03 = document.getElementById('certificate_description_03').value
localStorage.setItem('certificate_description_03', certificate_description_03)
// -----------------------------||

// your project data is here --->
// first project --->
let project_title_01 = document.getElementById('project_title_01').value
localStorage.setItem('project_title_01',project_title_01)

let project_description_01 = document.getElementById('project_description_01').value
localStorage.setItem('project_description_01',project_description_01)
// Second project --->
let project_title_02 = document.getElementById('project_title_02').value
localStorage.setItem('project_title_02',project_title_02)

let project_description_02 = document.getElementById('project_description_02').value
localStorage.setItem('project_description_02',project_description_02)
// Third project --->
let project_title_03 = document.getElementById('project_title_03').value
localStorage.setItem('project_title_03',project_title_03)

let project_description_03 = document.getElementById('project_description_03').value
localStorage.setItem('project_description_03',project_description_03)
// ----------------||
  }
    // ---------------------------------------------------------------------xxx-------------------------------------
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
    form_data();
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
    form_data();
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
    form_data();
    window.location.href = './resume_03/resume_03.html'
  }
}

// -----------------form validation --->


const first_section = () =>{
  let f_name = document.getElementById('nameField_first').value.length
  let l_name = document.getElementById('nameField_last').value.length
  let phone = document.getElementById('contactField-phone').value.length
  let email = document.getElementById('contactField-email').value.length
  let address = document.getElementById('addressField').value.length

  let check_points = 0;
  f_name !=0 ? (check_points+=1) && (document.getElementById('nameField_first').style.border = "1px solid #1e0d35"): document.getElementById('nameField_first').style.border = "1px solid red"
  l_name !=0 ? (check_points+=1) && (document.getElementById('nameField_last').style.border = "1px solid #1e0d35"): document.getElementById('nameField_last').style.border = "1px solid red"
  phone==10 ? (check_points+=1) && (document.getElementById('contactField-phone').style.border = "1px solid #1e0d35"): document.getElementById('contactField-phone').style.border = "1px solid red"
  email !=0 ? (check_points+=1) && (document.getElementById('contactField-email').style.border = "1px solid #1e0d35"): document.getElementById('contactField-email').style.border = "1px solid red"
  address !=0 ? (check_points+=1) && (document.getElementById('addressField').style.border = "1px solid #1e0d35"): document.getElementById('addressField').style.border = "1px solid red"
   
  if(check_points>=5){
    nextFun()
    console.log("first section")
  }
}
const third_section = () =>{
  var check_points = 0;
  const about_info = () =>{
    let count = document.getElementById('your-about-info').value ;
    const arr = count.split(' ');
    let ab_info = arr.filter(word => word !== '').length;
    ab_info > 25 ? check_points+=1:alert("you must write minimum 25 words about yourself.")
  }
  const bcc_experience = ()=>{
    let exp_01 = document.getElementById('exp_title_01').value.length;
    let exp_02 = document.getElementById('exp_title_02').value.length;
    let exp_03 = document.getElementById('exp_title_03').value.length;

    let exp_ic_01 = document.getElementById('your_input_company_01').value.length;
    let exp_ic_02 = document.getElementById('your_input_company_02').value.length;
    let exp_ic_03 = document.getElementById('your_input_company_03').value.length;

    let start_d_01 = document.getElementById('c_s_d_01').value.length
    let start_d_02 = document.getElementById('c_s_d_02').value.length
    let start_d_03 = document.getElementById('c_s_d_03').value.length

    let end_d_01 = document.getElementById('c_e_d_01').value.length
    let end_d_02 = document.getElementById('c_e_d_02').value.length
    let end_d_03 = document.getElementById('c_e_d_03').value.length

    let exp_cd_01 = document.getElementById('your_company_description_01').value;
    let exp_cd_02 = document.getElementById('your_company_description_02').value;
    let exp_cd_03 = document.getElementById('your_company_description_03').value;
    const arr_01 = exp_cd_01.split(' ');
    const arr_02 = exp_cd_02.split(' ');
    const arr_03 = exp_cd_03.split(' ');

    let cnum_01 = arr_01.filter(word => word !== '').length;
    let cnum_02 = arr_02.filter(word => word !== '').length;
    let cnum_03 = arr_03.filter(word => word !== '').length;


    exp_01 !=0 ? (check_points+=1) && (document.getElementById('exp_title_01').style.border = "1px solid #1e0d35"): document.getElementById('exp_title_01').style.border = "1px solid red"
    exp_02 !=0 ? (check_points+=1) && (document.getElementById('exp_title_02').style.border = "1px solid #1e0d35"): document.getElementById('exp_title_02').style.border = "1px solid red"
    exp_03 !=0 ? (check_points+=1) && (document.getElementById('exp_title_03').style.border = "1px solid #1e0d35"): document.getElementById('exp_title_03').style.border = "1px solid red"

    exp_ic_01 !=0 ? (check_points+=1) && (document.getElementById('your_input_company_01').style.border = "1px solid #1e0d35"): document.getElementById('your_input_company_01').style.border = "1px solid red"
    exp_ic_02 !=0 ? (check_points+=1) && (document.getElementById('your_input_company_02').style.border = "1px solid #1e0d35"): document.getElementById('your_input_company_02').style.border = "1px solid red"
    exp_ic_03 !=0 ? (check_points+=1) && (document.getElementById('your_input_company_03').style.border = "1px solid #1e0d35"): document.getElementById('your_input_company_03').style.border = "1px solid red"


    start_d_01 !=0 ? (check_points+=1) && (document.getElementById('c_s_d_01').style.border = "1px solid #1e0d35"): document.getElementById('c_s_d_01').style.border = "1px solid red"
    start_d_02 !=0 ? (check_points+=1) && (document.getElementById('c_s_d_02').style.border = "1px solid #1e0d35"): document.getElementById('c_s_d_02').style.border = "1px solid red"
    start_d_03 !=0 ? (check_points+=1) && (document.getElementById('c_s_d_03').style.border = "1px solid #1e0d35"): document.getElementById('c_s_d_03').style.border = "1px solid red"

    end_d_01 !=0 ? (check_points+=1) && (document.getElementById('c_e_d_01').style.border = "1px solid #1e0d35"): document.getElementById('c_e_d_01').style.border = "1px solid red"
    end_d_02 !=0 ? (check_points+=1) && (document.getElementById('c_e_d_02').style.border = "1px solid #1e0d35"): document.getElementById('c_e_d_02').style.border = "1px solid red"
    end_d_03 !=0 ? (check_points+=1) && (document.getElementById('c_e_d_03').style.border = "1px solid #1e0d35"): document.getElementById('c_e_d_03').style.border = "1px solid red"


    cnum_01 >=20 ? (check_points+=1) && (document.getElementById('your_company_description_01').style.border = "1px solid #1e0d35"): document.getElementById('your_company_description_01').style.border = "1px solid red"
    cnum_02 >=20 ? (check_points+=1) && (document.getElementById('your_company_description_02').style.border = "1px solid #1e0d35"): document.getElementById('your_company_description_02').style.border = "1px solid red"
    cnum_03 >=20 ? (check_points+=1) && (document.getElementById('your_company_description_03').style.border = "1px solid #1e0d35"): document.getElementById('your_company_description_03').style.border = "1px solid red"
  }
  about_info();
  bcc_experience();
  if(check_points>=15){
    nextFun()
  }
 
}
const forth_section = () =>{
  let profession = document.getElementById('profession_name').value.length
let check_points = 0;
  profession !=0 ? (check_points+=1) && (document.getElementById('profession_name').style.border = "1px solid #1e0d35"): document.getElementById('profession_name').style.border = "1px solid red"
  const input_profec = () =>{
    let qt_01 = document.getElementById('Qualification_Title_01').value.length
    let qt_02 = document.getElementById('Qualification_Title_02').value.length
    let qt_03 = document.getElementById('Qualification_Title_03').value.length

    let qt_uname_01 = document.getElementById('University_Name_01').value.length
    let qt_uname_02 = document.getElementById('University_Name_02').value.length
    let qt_uname_03 = document.getElementById('University_Name_03').value.length

    let qt_start_d_01 = document.getElementById('date_01_01').value.length
    let qt_start_d_02 = document.getElementById('date_01_02').value.length
    let qt_start_d_03 = document.getElementById('date_01_03').value.length

    let qt_end_d_01 = document.getElementById('date_02_01').value.length
    let qt_end_d_02 = document.getElementById('date_02_02').value.length
    let qt_end_d_03 = document.getElementById('date_02_03').value.length


    qt_01 !=0 ? (check_points+=1) && (document.getElementById('Qualification_Title_01').style.border = "1px solid #1e0d35"): document.getElementById('Qualification_Title_01').style.border = "1px solid red"
    qt_02 !=0 ? (check_points+=1) && (document.getElementById('Qualification_Title_02').style.border = "1px solid #1e0d35"): document.getElementById('Qualification_Title_02').style.border = "1px solid red"
    qt_03 !=0 ? (check_points+=1) && (document.getElementById('Qualification_Title_03').style.border = "1px solid #1e0d35"): document.getElementById('Qualification_Title_03').style.border = "1px solid red"

    qt_uname_01 !=0 ? (check_points+=1) && (document.getElementById('University_Name_01').style.border = "1px solid #1e0d35"): document.getElementById('University_Name_01').style.border = "1px solid red"
    qt_uname_02 !=0 ? (check_points+=1) && (document.getElementById('University_Name_02').style.border = "1px solid #1e0d35"): document.getElementById('University_Name_02').style.border = "1px solid red"
    qt_uname_03 !=0 ? (check_points+=1) && (document.getElementById('University_Name_03').style.border = "1px solid #1e0d35"): document.getElementById('University_Name_03').style.border = "1px solid red"


    qt_start_d_01 !=0 ? (check_points+=1) && (document.getElementById('date_01_01').style.border = "1px solid #1e0d35"): document.getElementById('date_01_01').style.border = "1px solid red"
    qt_start_d_02 !=0 ? (check_points+=1) && (document.getElementById('date_01_02').style.border = "1px solid #1e0d35"): document.getElementById('date_01_02').style.border = "1px solid red"
    qt_start_d_03 !=0 ? (check_points+=1) && (document.getElementById('date_01_03').style.border = "1px solid #1e0d35"): document.getElementById('date_01_03').style.border = "1px solid red"

    qt_end_d_01 !=0 ? (check_points+=1) && (document.getElementById('date_02_01').style.border = "1px solid #1e0d35"): document.getElementById('date_02_01').style.border = "1px solid red"
    qt_end_d_02 !=0 ? (check_points+=1) && (document.getElementById('date_02_02').style.border = "1px solid #1e0d35"): document.getElementById('date_02_02').style.border = "1px solid red"
    qt_end_d_03 !=0 ? (check_points+=1) && (document.getElementById('date_02_03').style.border = "1px solid #1e0d35"): document.getElementById('date_02_03').style.border = "1px solid red"

  }

  input_profec()
  if(check_points>=12){
    nextFun()
    console.log("forth section")
  }
   
}
const fifth_section = () =>{
  // certificates --> 
  let cert_title_01 = document.getElementById('certificate_title_01').value.length
  let cert_title_02 = document.getElementById('certificate_title_02').value.length
  let cert_title_03 = document.getElementById('certificate_title_03').value.length

  let cert_description_01 = document.getElementById('certificate_description_01').value;
  let cert_description_02 = document.getElementById('certificate_description_02').value;
  let cert_description_03 = document.getElementById('certificate_description_03').value;
  const arr_01 = cert_description_01.split(' ');
  const arr_02 = cert_description_02.split(' ');
  const arr_03 = cert_description_03.split(' ');

  let cd_01 = arr_01.filter(word => word !== '').length;
  let cd_02 = arr_02.filter(word => word !== '').length;
  let cd_03 = arr_03.filter(word => word !== '').length;


  cert_title_01 !=0 ? (check_points+=1) && (document.getElementById('certificate_title_01').style.border = "1px solid #1e0d35"): document.getElementById('certificate_title_01').style.border = "1px solid red"
  cert_title_02 !=0 ? (check_points+=1) && (document.getElementById('certificate_title_02').style.border = "1px solid #1e0d35"): document.getElementById('certificate_title_02').style.border = "1px solid red"
  cert_title_03 !=0 ? (check_points+=1) && (document.getElementById('certificate_title_03').style.border = "1px solid #1e0d35"): document.getElementById('certificate_title_03').style.border = "1px solid red"

  cd_01 !=0 ? (check_points+=1) && (document.getElementById('certificate_description_01').style.border = "1px solid #1e0d35"): document.getElementById('certificate_description_01').style.border = "1px solid red"
  cd_02 !=0 ? (check_points+=1) && (document.getElementById('certificate_description_02').style.border = "1px solid #1e0d35"): document.getElementById('certificate_description_02').style.border = "1px solid red"
  cd_03 !=0 ? (check_points+=1) && (document.getElementById('certificate_description_03').style.border = "1px solid #1e0d35"): document.getElementById('certificate_description_03').style.border = "1px solid red"

// projects -->

let proj_title_01 = document.getElementById('project_title_01').value.length
let proj_title_02 = document.getElementById('project_title_02').value.length
let proj_title_03 = document.getElementById('project_title_03').value.length

let proj_description_01 = document.getElementById('project_description_01').value;
let proj_description_02 = document.getElementById('project_description_02').value;
let proj_description_03 = document.getElementById('project_description_03').value;
const arp_01 = proj_description_01.split(' ');
const arp_02 = proj_description_02.split(' ');
const arp_03 = proj_description_03.split(' ');

let pj_01 = arp_01.filter(word => word !== '').length;
let pj_02 = arp_02.filter(word => word !== '').length;
let pj_03 = arp_03.filter(word => word !== '').length;


proj_title_01 !=0 ? (check_points+=1) && (document.getElementById('project_title_01').style.border = "1px solid #1e0d35"): document.getElementById('project_title_01').style.border = "1px solid red"
proj_title_02 !=0 ? (check_points+=1) && (document.getElementById('project_title_02').style.border = "1px solid #1e0d35"): document.getElementById('project_title_02').style.border = "1px solid red"
proj_title_03 !=0 ? (check_points+=1) && (document.getElementById('project_title_03').style.border = "1px solid #1e0d35"): document.getElementById('project_title_03').style.border = "1px solid red"

pj_01 >=20 ? (check_points+=1) && (document.getElementById('project_description_01').style.border = "1px solid #1e0d35"): document.getElementById('project_description_01').style.border = "1px solid red"
pj_02 >=20 ? (check_points+=1) && (document.getElementById('project_description_02').style.border = "1px solid #1e0d35"): document.getElementById('project_description_02').style.border = "1px solid red"
pj_03 >=20 ? (check_points+=1) && (document.getElementById('project_description_03').style.border = "1px solid #1e0d35"): document.getElementById('project_description_03').style.border = "1px solid red"

if(check_points>=12){
  nextFun()
}
}



// important links -->
const linked_btn = () =>{
  console.log("you clicked on linked btn")
}
const codechef_btn = () =>{
  console.log("you clicked on codechef btn")
}
const leetcode_btn = () =>{
  console.log("you clicked on leetcode btn")
}
const github_btn = () =>{
  console.log("you clicked on github btn")
}

const second_section = () =>{
  let linked_in_val = document.getElementById('linkedinField').value.length
  let codechef_val = document.getElementById('codeChefField').value.length
  let leetcode_val = document.getElementById('fbField').value.length
  let github_val = document.getElementById('githubField').value.length


  let check_points = 0 ;
  linked_in_val !=0 ? (check_points+=1) && (document.getElementById('linkedinField').style.border = "1px solid #1e0d35"): document.getElementById('linkedinField').style.border = "1px solid red"
  codechef_val !=0 ? (check_points+=1) && (document.getElementById('codeChefField').style.border = "1px solid #1e0d35"): document.getElementById('codeChefField').style.border = "1px solid red"
  leetcode_val !=0 ? (check_points+=1) && (document.getElementById('fbField').style.border = "1px solid #1e0d35"): document.getElementById('fbField').style.border = "1px solid red"
  github_val !=0 ? (check_points+=1) && (document.getElementById('githubField').style.border = "1px solid #1e0d35"): document.getElementById('githubField').style.border = "1px solid red"
  
if(check_points>=4){
  nextFun()
}

}


document.getElementById('nb_btns_03').addEventListener("click",third_section)
document.getElementById('nb_btns_04').addEventListener("click",forth_section)
document.getElementById('nb_btns_04').addEventListener("click",fifth_section)
document.getElementById('nb_btns_01').addEventListener("click",first_section)
document.getElementById('nb_btns_02').addEventListener("click",second_section)
