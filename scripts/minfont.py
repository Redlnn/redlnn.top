#!/usr/bin/python3
# -*- coding: utf-8 -*-

"""
minfont.js 的 Python 版，速度没有 minfont.js 的快，但生成的字体文件大小更小

Forked from: https://github.com/GraiaCommunity/Docs/blob/vitepress/scripts/minfont.py

MIT License

Copyright (c) 2021 GraiaCommunity

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE

@author Redlnn <w731347477@gmail.com>
@website https://github.com/GraiaCommunity/Docs
"""

import os
from os.path import basename, exists, join

from fontTools import subset
from fontTools.ttLib import TTFont

origin_path = join('src')
ignore_dirs = ['dist', 'public', '.DS_Store', 'assets']
out_path = join('public', 'fonts')
fonts = [
    join('fonts', 'HarmonyOS_Sans_SC_Bold.ttf'),
    join('fonts', 'HarmonyOS_Sans_SC_Regular.ttf'),
]

content = ''


def read(path):
    global content
    for root, dirs, files in os.walk(path):
        if basename(root) in ignore_dirs:
            dirs[:] = []  # 忽略当前目录下的子目录
            continue
        for f in files:
            print(f'正在读取 {join(root, f)}')
            with open(join(root, f), 'r', encoding='utf8') as file:
                while True:
                    if char := file.read(1):
                        content += f'{char}\n'
                    else:
                        break


print('读取文件中...')
read(origin_path)

for font in fonts:
    print(f'正在处理 {font}')
    if not exists(out_path):
        os.mkdir(out_path)
    f = TTFont(font)

    subsetter = subset.Subsetter()

    subsetter.populate(text=content)
    subsetter.subset(f)
    f.flavor = 'woff2'
    f.save(join(out_path, font.replace(".ttf", ".woff2")))
