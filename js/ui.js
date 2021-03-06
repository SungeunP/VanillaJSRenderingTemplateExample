/**
 * Move to detail page 
 */
const moveToDetailPage = () => {
  const mainPageRef = document.querySelector('#Page_Main')
  const detailPageRef = document.querySelector('#Page_Detail')

  mainPageRef.classList.remove('show')
  mainPageRef.classList.add('stacked') // Move to left
  detailPageRef.classList.add('show')
}

/**
 * Move to main page
 */
const moveToMainPage = () => {
  const mainPageRef = document.querySelector('#Page_Main')
  const detailPageRef = document.querySelector('#Page_Detail')

  detailPageRef.classList.remove('show')
  mainPageRef.classList.remove('stacked') // Move to left
  mainPageRef.classList.add('show')
}