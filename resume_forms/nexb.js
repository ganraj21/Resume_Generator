// back button ---->
var cnt = 1
document.getElementById('bb_btn').disabled = true
backFun = () => {
  if (cnt == 1) {
    document.getElementById('fc_div').style.display = 'flex'
    document.getElementById('sc_div').style.display = 'none'
    document.getElementById('bb_btn').disabled = true
    document.getElementById('bt_gen').style.display = 'none'
  } else if (cnt == 2) {
    document.getElementById('sc_div').style.display = 'flex'
    document.getElementById('thc_div').style.display = 'none'
    document.getElementById('bt_gen').style.display = 'none'
  } else if (cnt == 3) {
    document.getElementById('f_col').style.display = 'none'
    document.getElementById('thc_div').style.display = 'flex'
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
  } else if (cnt == 2) {
    document.getElementById('sc_div').style.display = 'none'
    document.getElementById('thc_div').style.display = 'flex'
  } else if (cnt == 3) {
    document.getElementById('thc_div').style.display = 'none'
    document.getElementById('f_col').style.display = 'flex'
  } else if (cnt == 4) {
    document.getElementById('f_col').style.display = 'none'
    document.getElementById('ff_col').style.display = 'flex'
    console.log("your nxt btn is display non")
  }
  cnt++
}