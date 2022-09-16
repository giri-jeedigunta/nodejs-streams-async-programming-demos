// #1 Blocking JS Example
// #2 Non-Blocking JS Example  with Async / Await
// #3 Read stream example

// #1 Blocking JS

/*
import { readFileSync } from 'fs';

const whoAreTheJedi = () => {

  const fileContent = readFileSync('jedi.md', { encoding: 'utf8', });
  console.log(fileContent);

}

whoAreTheJedi();
console.log("I'm totally BLOCKED... Boooo !!!!");
*/



// #2 Non-Blocking JS
import { readFile } from 'fs.promises';

const whoAreTheJedi = async () => {

  const fileContent = await readFile("jedi.md", "utf8");
  console.log(fileContent);

}
whoAreTheJedi();
console.log("I'm NOT blocked Yaaaay !!!!");





// #3 Read stream
/*
import { createReadStream } from 'fs';
const readable = createReadStream("jedi.md", { highWaterMark: 20 });

readable.on("data", (chunk) => {
  console.log(`Read ${chunk.length} bytes\n"${chunk.toString()}"\n`);
});

*/