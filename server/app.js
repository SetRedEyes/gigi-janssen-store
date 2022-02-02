const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = config.get('port') ?? 8080

async function start() {
  try {
    await  mongoose.connect('mongoUri')
    app.listen(PORT, () => {
      console.log(
        chalk.green(
          `Server has been strted on port ${PORT}`
        )
      )
    })
  } catch (e) {
    console.log(chalk.red(e.message))
    process.exit(1)

  }
}

start()
