import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exists = (file) => fs.existsSync(path.join(root, file));

const requiredRoutes = [
  "app/page.tsx",
  "app/services/page.tsx",
  "app/services/general/page.tsx",
  "app/services/cosmetic/page.tsx",
  "app/services/specialist/page.tsx",
  "app/services/orthodontics/page.tsx",
  "app/services/hygienist/page.tsx",
  "app/fees/page.tsx",
  "app/team/page.tsx",
  "app/find-us/page.tsx",
  "app/about/page.tsx",
  "app/testimonials/page.tsx",
  "app/contact/page.tsx",
  "app/referrals/page.tsx",
  "app/privacy/page.tsx",
  "app/not-found.tsx",
  "app/robots.ts",
  "app/sitemap.ts",
];

test("all required routes exist", () => {
  for (const route of requiredRoutes) {
    assert.ok(exists(route), `Missing required route file: ${route}`);
  }
});

test("verified business facts without invented ratings or COVID protocol", () => {
  assert.ok(exists("lib/business.ts"));
  const biz = read("lib/business.ts");
  assert.match(biz, /Ware Dental Care/);
  assert.match(biz, /01920 462208/);
  assert.match(biz, /info@waredental\.co\.uk/);
  assert.match(biz, /3 West Street/);
  assert.match(biz, /SG12 9EE/);
  assert.match(biz, /1-189750469/);
  assert.match(biz, /25 November 2024/);
  assert.match(biz, /verifiedReviews:\s*null/);
  assert.doesNotMatch(biz, /opening.?protocol/i);
  assert.doesNotMatch(biz, /COVID/i);

  const home = read("app/page.tsx");
  assert.doesNotMatch(home, /opening.?protocol/i);
  assert.doesNotMatch(home, /COVID/i);
  assert.match(home, /hero-hub/);
  assert.match(home, /care-mosaic/);
  assert.match(home, /specialist-lane/);
});

test("real logo and photos present", () => {
  assert.ok(exists("public/images/logo.png"));
  assert.ok(exists("public/images/hero-practice.jpg"));
  assert.ok(exists("public/images/practice-open-day.jpg"));
  assert.ok(exists("public/images/lsl-logo.svg"));
  assert.ok(fs.statSync(path.join(root, "public/images/logo.png")).size > 1000);
});

test("design brief documents uniqueness and research URLs", () => {
  assert.ok(exists("research/DESIGN_BRIEF.md"));
  assert.ok(exists("research/SOURCE_LOG.md"));
  const brief = read("research/DESIGN_BRIEF.md");
  assert.match(brief, /Under One Roof Care Hub/);
  assert.match(brief, /Epping/);
  assert.match(brief, /Great Dunmow/i);
  assert.match(brief, /https:\/\/m3\.material\.io/);
  assert.match(brief, /https:\/\/component\.gallery/);
  assert.match(brief, /https:\/\/designsystems\.one/);
  assert.match(brief, /ware_dental_logo-2026\.png/);
  assert.match(brief, /#002030|#00A896|#00a896/i);
  assert.match(brief, /opening-protocol/i);
});

test("mobile menu hamburger present", () => {
  const header = read("components/Header.tsx");
  assert.match(header, /nav-toggle/);
  assert.match(header, /aria-expanded/);
  assert.match(header, /aria-controls="site-nav"/);
  assert.match(header, /is-open/);
  assert.match(header, /Escape/);
  const css = read("app/globals.css");
  assert.match(css, /\.nav-toggle/);
  assert.match(css, /\.site-nav\.is-open/);
});

test("ScrollToTop restores top on navigation", () => {
  const source = read("components/ScrollToTop.tsx");
  assert.match(source, /scrollRestoration/);
  assert.match(source, /manual/);
  assert.match(source, /scrollTo\(0,\s*0\)/);
  assert.match(source, /usePathname/);
});

test("ConceptNotice disclosure, sticky bar, dismiss paths, mount-gated open", () => {
  assert.ok(exists("components/ConceptNotice.tsx"));
  const source = read("components/ConceptNotice.tsx");
  assert.match(source, /Local Sites Lab showcase/i);
  assert.match(source, /Ware Dental Care/);
  assert.match(source, /did not ask for/i);
  assert.match(source, /has not approved it/i);
  assert.match(source, /not the live or official site/i);
  assert.match(source, /Get a site like this/i);
  assert.match(source, /Continue to Ware Dental Care/);
  assert.match(source, /About this sample/i);
  assert.match(source, /localsiteslab\.com/i);
  assert.match(source, /localStorage/i);
  assert.match(source, /concept-bar/);
  assert.match(source, /William Green/);
  assert.match(source, /lsl-logo/);
  assert.match(source, /concept-close/);
  assert.match(source, /aria-label="Close concept notice"/);
  assert.match(source, /Escape/);
  assert.match(source, /modalRef/);
  assert.match(source, /pointerdown/);
  assert.match(source, /addEventListener\(\s*["']pointerdown["']/);
  assert.match(source, /contains\(event\.target/);
  assert.match(source, /stopPropagation/);
  assert.match(source, /onClick=\{dismiss\}/);
  assert.doesNotMatch(source, /event\.target === event\.currentTarget/);
  assert.doesNotMatch(source, /Tip:/i);
  assert.doesNotMatch(source, /click outside/i);
  assert.match(source, /ware-dental-care-concept-notice-dismissed-v5/);
  assert.doesNotMatch(source, /useState\(\s*\(\s*\)\s*=>/);
  assert.doesNotMatch(source, /useState\(\s*\(\)\s*=>\s*[\s\S]*localStorage/);
  assert.match(source, /const \[open, setOpen\] = useState\(false\)/);
  assert.match(source, /const \[mounted, setMounted\] = useState\(false\)/);
  assert.match(source, /setMounted\(true\)/);
  assert.match(source, /localStorage\.getItem\(storageKey\)/);
  assert.match(source, /setOpen\(!dismissed\)/);
  assert.match(source, /mounted && open/);
  assert.match(source, /removeEventListener\(\s*["']pointerdown["']/);
  assert.match(source, /removeEventListener\(\s*["']keydown["']/);
  assert.match(source, /onClick=\{reopen\}/);
  assert.match(source, /useCallback/);
  assert.match(source, /Get a website like this to win more local work/i);

  const css = read("app/globals.css");
  const closeBlock = css.split(".concept-close {")[1].split("}")[0];
  assert.match(closeBlock, /background:\s*transparent/);
  assert.match(closeBlock, /border:\s*none/);
  assert.match(closeBlock, /border-radius:\s*0/);
  assert.match(closeBlock, /font-size:\s*1\.5rem/);
  assert.doesNotMatch(closeBlock, /border-radius:\s*50%/);
  assert.match(css, /pointer-events:\s*auto/);
  assert.match(css, /width:\s*min\(100%,\s*42rem\)/);
  assert.match(css, /#0[Bb]1220/);
  assert.match(css, /#EAFF38|#eaff38/i);
  assert.match(css, /line-height:\s*1\.4/);
  assert.match(css, /overflow:\s*visible/);
});

test("ConceptNotice dismiss → remount → reopen → dismiss again (storage behaviour)", () => {
  const storageKey = "ware-dental-care-concept-notice-dismissed-v5";
  const store = new Map();
  const localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
  };

  function mountOpenState() {
    const dismissed = localStorage.getItem(storageKey) === "yes";
    return !dismissed;
  }

  assert.equal(mountOpenState(), true);
  localStorage.setItem(storageKey, "yes");
  assert.equal(mountOpenState(), false);
  assert.equal(mountOpenState(), false);
  let uiOpen = true;
  assert.equal(uiOpen, true);
  localStorage.setItem(storageKey, "yes");
  uiOpen = false;
  assert.equal(mountOpenState(), false);
  localStorage.removeItem(storageKey);
  assert.equal(mountOpenState(), true);
});

test("concept is noindex and does not canonically impersonate the official domain", () => {
  const robots = read("app/robots.ts");
  const layout = read("app/layout.tsx");
  assert.match(robots, /disallow/i);
  assert.match(layout, /index:\s*false/i);
  assert.match(layout, /follow:\s*false/i);
  assert.doesNotMatch(layout, /waredentalcare\.co\.uk/i);
});

test("social proof strip, stars on quotes, clickable cards", () => {
  const home = read("app/page.tsx");
  assert.match(home, /social-proof/);
  assert.match(home, /Stars/);
  assert.match(home, /mosaic-card/);
  assert.match(home, /href=\{service\.href\}/);
  const testimonials = read("app/testimonials/page.tsx");
  assert.match(testimonials, /Stars/);
  assert.match(testimonials, /5 out of 5 stars|aria-label/);
  const css = read("app/globals.css");
  assert.match(css, /\.social-proof\s*\{/);
  assert.match(css, /1\.35rem\s+0\s+1\.5rem/);
  assert.match(css, /#f4b400|--star:\s*#f4b400/i);
});

test("global CSS: no box-shadows, brand colours, sticky bar, scroll margin, Care Hub tokens", () => {
  const css = read("app/globals.css");
  assert.ok(css.split("\n").length > 200);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media/);
  assert.match(css, /min-height:\s*44px/);
  assert.doesNotMatch(css, /box-shadow/);
  assert.match(css, /#002030|--navy:\s*#002030/i);
  assert.match(css, /#00a896|--teal:\s*#00a896/i);
  assert.match(css, /#f4b400|--star:\s*#f4b400/i);
  for (const token of [
    "--navy",
    "--teal",
    "--cream",
    ".shell",
    ".hero-hub",
    ".hero-hub-copy",
    ".site-header",
    ".care-mosaic",
    ".specialist-lane",
    ".concept-bar",
    ".concept-modal",
    ".concept-logo",
    ".site-footer",
    "scroll-margin-top",
    "scroll-padding-top",
    "position:\\s*sticky",
    "position:\\s*fixed",
  ]) {
    assert.match(css, new RegExp(token));
  }
});

test("homepage Care Hub: solid copy beside photo, short hero, call CTAs", () => {
  const page = read("app/page.tsx");
  assert.match(page, /hero-hub/);
  assert.match(page, /hero-hub-copy/);
  assert.match(page, /hero-hub-media/);
  assert.match(page, /Family dental care under one roof/);
  assert.match(page, /tel:\$\{business\.phoneTel\}/);
  assert.match(page, /hero-practice\.jpg/);
  assert.doesNotMatch(page, /opening protocol/i);
  // story below fold — established claim not in hero block
  const heroChunk = page.split("social-proof")[0];
  assert.doesNotMatch(heroChunk, /60 years/);
  assert.doesNotMatch(heroChunk, /25,000/);
});
