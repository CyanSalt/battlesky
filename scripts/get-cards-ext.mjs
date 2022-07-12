import * as path from 'path'
import fetch from 'node-fetch'
import { getDirectory, writeJSONFile } from './utils.mjs'

async function getCards() {
  const response = await fetch('https://hs.blizzard.cn/action/hs/cards/battlegrounds?gameMode=battlegrounds&pageSize=300&locale=zh_cn')
  const data = await response.json()
  writeJSONFile(
    path.join(getDirectory(import.meta), '../src/assets/cards.ext.json'),
    data.cards,
  )
}

getCards()
