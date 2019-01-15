process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()



  command(cmd)

  process.stdout.write('\nprompt > '.trim())
})

function pwd() {
  console.log(process.cwd())
}

function command(cmd) {
  switch (cmd) {
    case 'pwd':
      pwd()
  }
}
