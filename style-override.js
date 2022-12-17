const generateOverride = (params = {}) => {
  let result = ''

  if (params.fontFamily) {
    result += `
      body {
        font-family: "${params.fontFamily}";
      }

      @supports (font-variation-settings: normal) {
        body {
          font-family: "${params.fontFamily}";
        }
      }
    `
  }

  if (params.customCss) {
    result += `
      ${params.customCss}
    `
  }

  return result
}

module.exports = generateOverride
