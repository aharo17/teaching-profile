const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const hasSubmenu = document.querySelector('.has-submenu');
const caret = document.querySelector('.caret');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

caret.addEventListener('click', () => {
    hasSubmenu.classList.toggle('open');
})

function togglePDF(containerId) {
    const allPreviews = document.querySelectorAll('.pdf-preview, .pdf-preview-side-by-side');
    allPreviews.forEach(div => div.style.display = 'none');
  
    const selected = document.getElementById(containerId);
    if (selected.classList.contains('pdf-preview-side-by-side')) {
      selected.style.display = 'flex';
    } else {
      selected.style.display = 'block';
    }
}
  