// Compiling information in Resume --->
// setting your name here -->
const recentImageDataUrl = localStorage.getItem('recent-image')
// console.log(recentImageDataUrl)
if(recentImageDataUrl){
    document.querySelector("#home_profile_img").setAttribute('src',recentImageDataUrl)
}

document.getElementById('last_name').innerHTML = localStorage.getItem(
  'your_last_name',
)
document.getElementById('first_name').innerHTML = localStorage.getItem(
  'your_first_name',
)

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
// social media links --->

console.log(localStorage.getItem('arr'))
// ---------------------||

// about section --->
document.getElementById('your-profile-description').innerHTML = localStorage.getItem(
  'profile_about_information',
)

// experience section --->
// your first experience -->

document.getElementById('your_experience_title_01').innerHTML = localStorage.getItem(
  'experience_title_01',
)
document.getElementById('d_and_c_01').innerHTML = localStorage.getItem('company_title_01');
document.getElementById('your_profile_experience_description_01').innerHTML = localStorage.getItem(
  'experience_desc_01',
)
// your Second experience -->
document.getElementById('your_experience_title_02').innerHTML = localStorage.getItem(
  'experience_title_02',
)
document.getElementById('d_and_c_02').innerHTML = localStorage.getItem('company_title_02');
document.getElementById('your_profile_experience_description_02').innerHTML = localStorage.getItem(
  'experience_desc_02',
)
// your Third experience -->
document.getElementById('your_experience_title_03').innerHTML = localStorage.getItem(
  'experience_title_03',
)
document.getElementById('d_and_c_03').innerHTML = localStorage.getItem('company_title_03');
document.getElementById('your_profile_experience_description_03').innerHTML = localStorage.getItem(
  'experience_desc_03',
)
// ----------------------||
document.getElementById('home-profession').innerHTML = localStorage.getItem("profession_name",)
// educational information --->
// first qualification -->
document.getElementById('education_title_01').innerHTML = localStorage.getItem(
  'academic_qualification_title_01',
)
document.getElementById('university_title_01').innerHTML = localStorage.getItem(
  'university_qualification_title_01',
)
document.getElementById('education_time_01').innerHTML = localStorage.getItem(
  'qualification_duration_01',
)
// Second qualification -->
document.getElementById('education_title_02').innerHTML = localStorage.getItem(
  'academic_qualification_title_02',
)
document.getElementById('university_title_02').innerHTML = localStorage.getItem(
  'university_qualification_title_02',
)
document.getElementById('education_time_02').innerHTML = localStorage.getItem(
  'qualification_duration_02',
)
// Third qualification -->
document.getElementById('education_title_03').innerHTML = localStorage.getItem(
  'academic_qualification_title_03',
)
document.getElementById('university_title_03').innerHTML = localStorage.getItem(
  'university_qualification_title_03',
)
document.getElementById('education_time_03').innerHTML = localStorage.getItem(
  'qualification_duration_03',
)
// -----------------------||
// certificates code is here --->
 // your first certificate --->
document.getElementById('your_cert_01').innerHTML = localStorage.getItem("certificate_title_01");
document.getElementById('your_cert_descrp_01').innerHTML = localStorage.getItem("certificate_description_01");
 // your Second certificate --->
document.getElementById('your_cert_02').innerHTML = localStorage.getItem("certificate_title_02");
document.getElementById('your_cert_descrp_02').innerHTML = localStorage.getItem("certificate_description_02");
 // your Third certificate --->
document.getElementById('your_cert_03').innerHTML = localStorage.getItem("certificate_title_03");
document.getElementById('your_cert_descrp_03').innerHTML = localStorage.getItem("certificate_description_03");
// ------------------------||


// project code is here --->
// your first project --->
document.getElementById('your_proj_01').innerHTML = localStorage.getItem("project_title_01");
document.getElementById('your_proj_descrp_01').innerHTML = localStorage.getItem("project_description_01");
// your Second project --->
document.getElementById('your_proj_02').innerHTML = localStorage.getItem("project_title_02");
document.getElementById('your_proj_descrp_02').innerHTML = localStorage.getItem("project_description_02");
// your Third project --->
document.getElementById('your_proj_03').innerHTML = localStorage.getItem("project_title_03");
document.getElementById('your_proj_descrp_03').innerHTML = localStorage.getItem("project_description_03");


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme,
  )
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](
    iconTheme,
  )
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
function scaleCv() {
  document.body.classList.add('scale-cv')
}
/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
function removeScale() {
  document.body.classList.remove('scale-cv')
}
/*==================== GENERATE PDF ====================*/
// PDF generated area
let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

// Html2pdf options
let opt = {
  margin: 0,
  filename: 'myResume.pdf',
  image: { type: 'jpeg', quality: 0.99 },
  html2canvas: { scale: 5 },
  jsPDF: { format: 'a4', orientation: 'portrait' },
}
// Function to call areaCv and Html2Pdf options
function generateResume() {
  html2pdf(areaCv, opt)
}
// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () => {
  // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  scaleCv()
  // 2. The PDF is generated
  generateResume()
  // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
  // setTimeout(removeScale, 5000)
})
