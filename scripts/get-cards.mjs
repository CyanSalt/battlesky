import * as fs from 'fs'
import * as path from 'path'
import * as url from 'url'
import fetch from 'node-fetch'

function writeJSONFile(file, data) {
  return fs.promises.writeFile(file, JSON.stringify(data, null, 2) + '\n')
}

export function getDirectory() {
  return path.dirname(url.fileURLToPath(import.meta.url))
}

async function getCards() {
  const response = await fetch('https://api.hearthstonejson.com/v1/latest/zhCN/cards.json')
  const data = await response.json()
  writeJSONFile(
    path.join(getDirectory(), '../src/assets/cards.json'),
    data,
  )
}

getCards()
