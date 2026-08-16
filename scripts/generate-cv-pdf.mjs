/**
 * Renders /cv to public/CV.pdf using the Chrome already installed on this
 * machine. Deliberately not a build step and not a dependency: adding
 * Playwright and a browser binary to a static portfolio, plus the host config
 * to run it on deploy, costs far more than running one command when the
 * content changes.
 *
 * Run with: pnpm cv:pdf
 */
import { spawn, execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";

const PORT = 4173;
const OUT = "public/CV.pdf";

const CHROME = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
].find((p) => existsSync(p));

if (!CHROME) {
  console.error(
    "No Chrome-family browser found. Open http://localhost:3000/cv and print to PDF instead.",
  );
  process.exit(1);
}

const server = spawn("pnpm", ["start", "-p", String(PORT)], {
  stdio: "ignore",
  detached: true,
});

const waitForServer = async () => {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://localhost:${PORT}/cv`);
      if (res.ok) return true;
    } catch {
      // server not up yet
    }
    await sleep(500);
  }
  return false;
};

try {
  if (!(await waitForServer())) throw new Error("server did not start");

  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${OUT}`,
      `http://localhost:${PORT}/cv`,
    ],
    { stdio: "inherit" },
  );

  console.log(`Wrote ${OUT}`);
} finally {
  process.kill(-server.pid);
}
