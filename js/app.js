function navegar (url) {
    window.location.href=`${url}`
}

function toggle1() {
    const item = document.getElementById('preparacao-1')
    item.style.display = item.style.display === 'flex'?'none':'flex'
}
function toggle2() {
    const item = document.getElementById('preparacao-2')
    item.style.display = item.style.display === 'flex'?'none':'flex'
}
function toggle3() {
    const item = document.getElementById('preparacao-3')
    item.style.display = item.style.display === 'flex'?'none':'flex'
}