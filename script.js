// menu for mobile

const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menuItem')
const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.closeIcon')
const menuIcon = document.querySelector('.menuIcon')

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu')
    closeIcon.style.display = 'none'
    menuIcon.style.display = 'block'
    menuItems.style.color = 'white'
  } else {
    menu.classList.add('showMenu')
    closeIcon.style.display = 'block'
    menuIcon.style.display = 'none'
  }
}
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu)
})

hamburger.addEventListener('click', toggleMenu)

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
