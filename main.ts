import { mkdir, writeFile } from 'node:fs/promises';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello: say it once, plainly; a judge laughs on the first read or never.
// batch: one line, one file, no trailing newline, nothing else ships.
// orders: this string is the whole deliverable; the rest is just plumbing.
// slot: one write, one size log, then step aside and let the joke land.

const excuse = 'It worked locally, but my laptop has never met your traffic, your database, or your users.';

const here = fileURLToPath(new URL('.', import.meta.url));
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outDir = isAbsolute(configured) ? configured : join(here, configured);

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, 'entry.txt'), excuse, 'utf8');
console.log(Buffer.byteLength(excuse, 'utf8'));
