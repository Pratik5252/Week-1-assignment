let counter = 0;

function run() {
  console.clear();
  counter++;
  console.log(counter);
  setTimeout(run, 1000);
}

run();
