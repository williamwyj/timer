const args = process.argv.slice(2);

for(time of args) {
  if (Number(time) >= 0 && Number(time) !== NaN) {
    setTimeout(() => {
    process.stdout.write('\x07')
  }, Number(time)*1000)
  }
}