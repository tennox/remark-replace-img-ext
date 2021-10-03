const visit = require("unist-util-visit")

module.exports = function (options) {
  function visitor(node) {
    const newUrl = node.url.replace(
      /\.[^/.]+$/, // https://stackoverflow.com/a/4250408
      options.extension.startsWith(".") ? options.extension : `.${options.extension}`
    )
    // console.debug("Replacing", node.url, "with", newUrl)
    node.url = newUrl
  }

  function transform(tree) {
    // console.debug("TRANSFORMING", JSON.stringify(tree))
    if (options && options.extension) {
      visit(tree, "image", visitor)
    } else {
      throw Error("Missing required `extension` option.")
    }
  }

  return transform
}
