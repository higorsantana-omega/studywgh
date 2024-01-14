import fs from 'fs'

function main() {

  const file = fs.readFile('./test.txt')
  console.log(file)
}

main()
