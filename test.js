const test = require("tape")
const remark = require("remark")
const html = require("remark-html")
const imgLinks = require(".")

test("remark-replace-img-ext", async function (t) {
  t.plan(4)

  remark()
    .use(imgLinks, { extension: "webp" })
    .use(html)
    .process("![Screenshot](images/screenshot.png)", (err, file) => {
      const expectedYield = '<p><img src="images/screenshot.webp" alt="Screenshot"></p>\n'
      t.equal(String(file), expectedYield)
    })

  remark()
    .use(imgLinks, { extension: ".webp" })
    .use(html)
    .process("![Screenshot](/images/screenshot.png)", (err, file) => {
      const expectedYield = '<p><img src="/images/screenshot.webp" alt="Screenshot"></p>\n'
      t.equal(String(file), expectedYield)
    })

  remark()
    .use(imgLinks, { extension: "webp" })
    .use(html)
    .process(
      "![Screenshot1](https://github.com/images/screenshot1.png)" +
        "<br/>![Screenshot2](https://github.com/images/screenshot2.png)",
      (err, file) => {
        const expectedYield =
          '<p><img src="https://github.com/images/screenshot1.webp" alt="Screenshot1">' +
          '<img src="https://github.com/images/screenshot2.webp" alt="Screenshot2"></p>\n'
        t.equal(String(file), expectedYield)
      }
    )

  try {
    await remark().use(imgLinks).use(html).process("![Screenshot](https://github.com/images/screenshot.png)")
  } catch (err) {
    const expectedYield = "Missing required `extension` option."
    t.equal(err.message, expectedYield)
  }

  t.end()
})
