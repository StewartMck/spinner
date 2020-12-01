const spin = function(positions) {
  let time = 100;
  positions.forEach(position => {
    setTimeout(() => {
      process.stdout.write(`\r${position}    `);
    }, time += 200);
  });
};
spin(['|', '/', '-', '\\', '|', '/', '-', '\\', '|']);