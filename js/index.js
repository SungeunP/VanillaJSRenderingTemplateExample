const appElementRef = document.querySelector('#App') // Append target reference

// Render main page
const mainPageTemplate = renderPage_Main() // Rendering template
mainPageTemplate.classList.add('show')  // Post-process 
appElementRef.innerHTML = "" // Clear loadng
appElementRef.append(mainPageTemplate) // Append template to DOM

// Render detail page
const detailPageTemplate = renderPage_Detail() // Rendering template
appElementRef.append(detailPageTemplate) // Append template to DOM