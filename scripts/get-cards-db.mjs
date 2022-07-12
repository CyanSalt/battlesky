import * as path from 'path'
import fetch from 'node-fetch'
import { getDirectory, writeJSONFile } from './utils.mjs'

async function getCards() {
  const response = await fetch('https://api.hearthstonejson.com/v1/latest/zhCN/cards.json')
  const data = await response.json()
  writeJSONFile(
    path.join(getDirectory(import.meta), '../src/assets/cards.db.json'),
    data,
  )
}

getCards()
