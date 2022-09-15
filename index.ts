//Blocking
/*
import { readFileSync } from 'fs';

const whoAreTheJedi = () => {

  const fileContent = readFileSync('jedi.md', { encoding: 'utf8', });
  console.log(fileContent);

}

whoAreTheJedi();
console.log("I'm totally blocked... Boooo !!!!");
*/





/*
//Non-Blocking
import { readFile } from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(readFile);

const whoAreTheJedi = async () => {

  const files = await readFilePromise("jedi.md", "utf8");
  console.log(files);

}
whoAreTheJedi();
console.log("I'm not blocked Yaaaay !!!!");
*/


/*
import { createReadStream } from 'fs';
const readable = createReadStream("jedi.md", { highWaterMark: 20 });

readable.on("data", (chunk) => {
  console.log(`Read ${chunk.length} bytes\n"${chunk.toString()}"\n`);
});

*/