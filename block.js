document.addEventListener('contextmenu', function(e) {
    e.preventDefault()
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123) { e.preventDefault() }
    if ((e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74))) { e.preventDefault() }
    if (e.ctrlKey && e.keyCode === 85) { e.preventDefault() }
    if (e.keyCode === 116 || (e.ctrlKey && e.keyCode === 82)) { e.preventDefault() }
})
