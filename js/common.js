const domparser = new DOMParser()

const getTemplate = (templateId, context) => {
  const source = document.querySelector("#"+templateId)
  const template = Handlebars.compile(source.innerHTML)
  const result = template(context)
  // return result
  return domparser.parseFromString(result, 'text/html').querySelector('body').firstChild
}