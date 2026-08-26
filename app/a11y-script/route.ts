import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const source = await readFile(
    join(
      process.cwd(),
      "node_modules/.pnpm/axe-core@4.13.0/node_modules/axe-core/axe.min.js",
    ),
  );

  return new Response(source, {
    headers: { "Content-Type": "text/javascript; charset=utf-8" },
  });
}
