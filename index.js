const alfy = require('alfy')
const path = require('path')
const symbols = require('./symbols.json')

let data = symbols.map((item) => {
  const imagePath = `./symbols/${item}.png`
  const [title, ...modifiers] = item.split('.')
  return {
    title,
    autocomplete: title,
    subtitle: modifiers.reduce((previous, currentValue, currentIndex) => {
      return previous.concat(currentValue).concat(currentIndex < modifiers.length - 1 ? ', ' : '')
    }, ''),
    arg: item,
    icon: {
      path: imagePath
    },
    quicklookurl: path.resolve(imagePath)
  }
})

const items = alfy.inputMatches(data, 'title')

alfy.output(items)

