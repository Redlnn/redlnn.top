/*
 * minfont.py 的 JS 版，比 minfont.py 生成的字体文件大小更大
 *
 * Forked from: https://github.com/GraiaCommunity/Docs/blob/vitepress/scripts/minfont.js
 *
 * MIT License
 *
 * Copyright (c) 2021 GraiaCommunity
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE
 *
 * @author <41528165+zzzzz167@users.noreply.github.com>
 * @website https://github.com/GraiaCommunity/Docs
 *
 */

const fs = require('fs')
const Fontmin = require('fontmin')

const originPath = 'src/'
const ignoreDirs = ['dist', 'public', '.DS_Store']
const outPath = 'public/fonts/'
const fonts = ['fonts/HarmonyOS_Sans_SC_Bold.ttf', 'fonts/HarmonyOS_Sans_SC_Regular.ttf']

const ext = ['.md', '.vue', '.js', '.ts', '.css', '.scss']
let content = ''

function readFile(file) {
  const stat = fs.statSync(`${originPath}${file}`)
  if (stat.isFile() && ext.includes(file.substring(file.lastIndexOf('.'), file.length).toLowerCase())) {
    console.log(`正在读取 ${originPath}${file}`)
    const md = fs.readFileSync(`${originPath}${file}`)
    content += md.toString()
  }
  if (stat.isDirectory()) {
    const subdir = fs.readdirSync(`${originPath}${file}`)
    for (let i = 0; i < subdir.length; i++) {
      if (ignoreDirs.includes(subdir[i])) continue
      readFile(`${file}/${subdir[i]}`)
    }
  }
}

function minFont(font) {
  console.log(`正在处理 ${font}`)
  const fontmin = new Fontmin()
    .src(font)
    .use(Fontmin.glyph({ text: content + '   ' }))
    .use(Fontmin.ttf2woff2())
    .dest(outPath)

  fontmin.run(function (err) {
    if (err) {
      console.log(`处理 ${font} 过程中出现错误：`)
      console.error(err)
    }
  })
}

console.log('读取文件中...')
fs.readdir(originPath, (err, files) => {
  if (err) {
    return console.error(err)
  }
  for (let i = 0; i < files.length; i++) {
    if (ignoreDirs.includes(files[i])) continue
    readFile(files[i])
  }
  if (!fs.existsSync(outPath)) fs.mkdirSync(outPath)
  for (const idx in fonts) {
    minFont(fonts[idx])
  }
})
