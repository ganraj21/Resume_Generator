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
// events for button back , next
// const back = document.getElementById('bb_btn')
// const next = document.getElementById('nb_btn')

// back.addEventListener('click', backFun)
// next.addEventListener('click', nextFun)
// ----------|-<

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
