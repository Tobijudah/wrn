const sidenavBtn = document.getElementById('sidenav-icon')
const sidebar = document.getElementById('sidebar')
const overlayDiv = document.getElementById('overlay')
let sidebarOpen = false

const sidebarControl = () => {

  sidebar.style.transform = 'translateX(-245px)'
  
  sidenavBtn.addEventListener('click', e => {
  
    e.stopPropagation()
  
    sidebar.style.transform = 'translateX(0)'
  
    overlayDiv.style.opacity = 1
  
    overlayDiv.style.zIndex = 9998
  
    e.target.style.opacity = 0
  
    sidebarOpen = true
  
  })
  
  overlayDiv.addEventListener('click', e => {
  
    if (sidebarOpen) {
  
      overlayDiv.style.opacity = 0

      overlayDiv.style.zIndex = -1
  
      sidebar.style.transform = 'translateX(-245px)'
      
      sidenavBtn.style.opacity = 1
  
      sidebarOpen = false
  
    }
  
  })

}

const reset = () => {
  
  overlayDiv.style.opacity = 0

  overlayDiv.style.zIndex = -1

  sidebar.style.transform = 'translateX(0)'

  sidenavBtn.style.opacity = 1

}

if (window.innerWidth <= 800) {
  sidebarControl()
}

window.addEventListener('resize', e => {
  
  if (window.innerWidth <= 800) {
    sidebarControl()
  } else {
    reset()
  }

})