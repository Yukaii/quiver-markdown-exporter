import meow from 'meow';
import { convert } from './quiver-markdown';

const cli = meow(`
	Usage
	  $ quiver-markdown <input.qvlibrary> -o <output folder>

	Options
	  --output, -o Output folder

	Examples
	  $ quiver-markdown MyLibrary.qvlibrary -o dist
`, {
  importMeta: import.meta,
  flags: {
    output: {
      type: 'string',
      alias: 'o',
    },
  },
});

if (cli.input.length !== 1) {
  console.error('Please provide a qvlibrary file');
  process.exit(1);
}

if (!cli.flags.output) {
  console.error('Please provide an output folder');
  process.exit(1);
}

convert(cli.input[0], cli.flags.output);
