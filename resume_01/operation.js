// Compiling information in Resume --->
// document.getElementById('cv-form').style.display = 'none'
// document.getElementById('cv-template').style.display = 'block'
//console.log('Generating resume')
// location.href = '#area-cv'

document.getElementById('bd-con').style.display = 'flex'

// setting your name here -->
document.getElementById('last_name').innerHTML = localStorage.getItem(
  'your_last_name',
)
document.getElementById('first_name').innerHTML = localStorage.getItem(
  'your_first_name',
)
//  --|

// setting your profession -->
document.getElementById('home-profession').innerHTML = localStorage.getItem(
  'professional_profile_name',
)

// --|
document.getElementById('your-address-here').innerHTML = localStorage.getItem(
  'your_home_address',
)

document.getElementById('your-email-id').innerHTML = localStorage.getItem(
  'your_email',
)
document.getElementById('your-phone-no').innerHTML = localStorage.getItem(
  'your_phone_no',
)

// about section --->
document.getElementById('your-profile-description').innerHTML = localStorage.getItem(
  'profile_about_information',
)
// educational information --->
document.getElementById('education-title').innerHTML = localStorage.getItem(
  'academic_qualification_title',
)

document.getElementById('university_title').innerHTML = localStorage.getItem(
  'university_qualification_title',
)

document.getElementById('education_time').innerHTML = localStorage.getItem(
  'qualification_duration',
)

// experience section --->
document.getElementById('your_experience_title').innerHTML = localStorage.getItem(
  'experience_title',
)

document.getElementById('d_and_c').innerHTML = localStorage.getItem('company_title');
document.getElementById('your_profile_experience_description').innerHTML = localStorage.getItem(
  'experience_desc',
)
// social media --
// document.getElementById('link-of-linkedin').href = document.getElementById(
//   'linkedinField',
// ).value

// document.getElementById('link-of-codechef').href = document.getElementById(
//   'codeChefField',
// ).value

// document.getElementById('link-of-github').href = document.getElementById(
//   'githubField',
// ).value
// --|

// your skills here --
// let skills = document.getElementById('contactField-phone').value
// document.getElementById('your-phone-no').innerHTML = skills

// Experience --->
// document.getElementById(
//   ' your_experience_title',
// ).innerHTML = document.getElementById('your_input_company').value


