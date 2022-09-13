// menu for mobile

const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menuItem')
const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.cros_ic')

const toggleMenu = () =>{
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu')
    // closeIcon.style.display = 'none'
    document.getElementById('menus').style.display = "flex";
    document.getElementById('cross').style.display = "none";
    // menuIcon.style.display = 'block'
    menuItems.style.color = 'white'
  } else {
    document.getElementById('cross').style.display = "flex";
    document.getElementById('menus').style.display = "none";
    menu.classList.add('showMenu')
    // closeIcon.style.display = 'block'
    // menuIcon.style.display = 'none'
  }
}
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu)
})

hamburger.addEventListener('click', toggleMenu)
closeIcon.addEventListener('click',()=>{
  menu.classList.remove('showMenu')
  document.getElementById('menus').style.display = "flex";
  document.getElementById('cross').style.display = "none";
  console.log("clicked on canceled")
})

// print cv

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

// Your resume selection -->
// one --->
const image_one_click_event = () => {
  let img = document.getElementById('r_img_btn_01')
  console.log('you clicked on image one ')
  localStorage.setItem('txtValue', (img.value = '1'))
}
document
  .getElementById('r_img_btn_01')
  .addEventListener('click', image_one_click_event)
// ---|
// two --->
const image_two_click_event = () => {
  let img = document.getElementById('r_img_btn_02')
  console.log('you clicked on image Two ')
  localStorage.setItem('txtValue', (img.value = '2'))
}
document
  .getElementById('r_img_btn_02')
  .addEventListener('click', image_two_click_event)
// ---|
// three --->
const image_three_click_event = () => {
  let img = document.getElementById('r_img_btn_03')
  console.log('you clicked on image Three ')
  localStorage.setItem('txtValue', (img.value = '3'))
}
document
  .getElementById('r_img_btn_03')
  .addEventListener('click', image_three_click_event)
// ---|
