import * as fs from 'fs'
import * as path from 'path'
import * as url from 'url'

export function writeJSONFile(file, data) {
  return fs.promises.writeFile(file, JSON.stringify(data, null, 2) + '\n')
}

export function getDirectory(meta) {
  return path.dirname(url.fileURLToPath(meta.url))
}
