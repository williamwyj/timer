const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////


console.log('Press b for a beep, input a number between 1-9 for a delayed beep after input seconds, control+c to exit')
stdin.on('data', (key) => {
  console.log('Press b for a beep, input a number between 1-9 for a delayed beep after input seconds, control+c to exit')
  if (key === 'b') {
    process.stdout.write('\x07')
  }
  if (key >= 1 && key <= 9) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, Number(key)*1000)
  }
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!')
    process.exit();
  }
});

