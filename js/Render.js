/**
 * Rendering main page template
 */
const renderPage_Main = () => {
  const pageTemplate = getTemplate('Page', {pageName: 'Main'}) // Rendering main template

  const pageTemplate_head = pageTemplate.querySelector('.page-head') // Get head reference of template
  const pageTemplate_content = pageTemplate.querySelector('.page-content') // Get content reference of template

  // Rendering nav-bar template
  const navbarTemplate = getTemplate('NavBar', {
    templateName: 'Main'
  })
  const mainPageContentTemplate = getTemplate('PageContent_Main') // Get content of main page
  const moveToDetailPageBtnRef = mainPageContentTemplate.querySelector('#MoveToDetailBtn') // Get button of main page
  // Post process
  moveToDetailPageBtnRef.addEventListener('click', () => { // Event binding
    moveToDetailPage() // Run move to detail page function
  })

  // Append to DOM
  pageTemplate_head.append(navbarTemplate)
  pageTemplate_content.append(mainPageContentTemplate)

  return pageTemplate
}

/**
 *  Rendering detail page template
 */
const renderPage_Detail = () => {
  const pageTemplate = getTemplate('Page', {pageName: 'Detail'})

  const pageTemplate_head = pageTemplate.querySelector('.page-head')
  const pageTemplate_content = pageTemplate.querySelector('.page-content')

  const navbarTemplate = getTemplate('NavBar', {
    templateName: 'Detail'
  })
  const backToMainBtnRef = navbarTemplate.querySelector('#BackToMainBtn')
  backToMainBtnRef.addEventListener('click', () => {
    moveToMainPage()
  })
  const mainPageContentTemplate = getTemplate('PageContent_Detail')

  pageTemplate_head.append(navbarTemplate)
  pageTemplate_content.append(mainPageContentTemplate)

  return pageTemplate
}