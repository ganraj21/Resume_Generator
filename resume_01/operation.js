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


// function printCV() {
//   console.log('converting...')

//   var printableArea = document.getElementById('area-cv')

//   html2canvas(printableArea, {
//     useCORS: true,
//     onrendered: function (canvas) {
//       var pdf = new jsPDF('p', 'pt', 'letter')

//       var pageHeight = 980
//       var pageWidth = 980
//       for (var i = 0; i <= printableArea.clientHeight / pageHeight; i++) {
//         var srcImg = canvas
//         var sX = 0
//         var sY = pageHeight * i // start 1 pageHeight down for every new page
//         var sWidth = pageWidth
//         var sHeight = pageHeight
//         var dX = 0
//         var dY = 0
//         var dWidth = pageWidth
//         var dHeight = pageHeight

//         window.onePageCanvas = document.createElement('canvas')
//         onePageCanvas.setAttribute('width', pageWidth)
//         onePageCanvas.setAttribute('height', pageHeight)
//         var ctx = onePageCanvas.getContext('2d')
//         ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight)

//         var canvasDataURL = onePageCanvas.toDataURL('image/png', 1.0)
//         var width = onePageCanvas.width
//         var height = onePageCanvas.clientHeight

//         if (i > 0)
//           // if we're on anything other than the first page, add another page
//           pdf.addPage(612, 791) // 8.5" x 11" in pts (inches*72)

//         pdf.setPage(i + 1) // now we declare that we're working on that page
//         pdf.addImage(canvasDataURL, 'PNG', 20, 40, width * 0.72, height * 0.62) // add content to the page
//       }
//       pdf.save('test.pdf')
//     },
//   })
// }
