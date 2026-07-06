#!/usr/bin/env python3
"""DNS cutover for elmac.au (Elmac Cleaning Services) — flips every hardcoded
origin in ONE run. Run from the repo root, review the diff, commit, push.

    python3 scripts/cutover.py
    git diff                       # review
    git add -A && git commit -m "DNS cutover: www.elmac.au"
    git push origin main

Run this TOGETHER with the Industrial repo's cutover (its script flips the
cross-links between the two sites) so neither site links to a dead URL.

Then (manual, outside this repo):
  1. DNS panel (hosting-cloud.net nameservers) for elmac.au:
       CNAME  www  -> cr8-gaffer.github.io
       A      @    -> 185.199.108.153 / .109.153 / .110.153 / .111.153
     DO NOT touch MX or TXT records — mail (Google Workspace) must stay.
  2. GitHub repo CR8-Gaffer/elmac-website -> Settings -> Pages ->
     Custom domain: www.elmac.au -> Enforce HTTPS once the cert issues.
  3. Verify all routes return 200 on https://www.elmac.au.
  4. Google Search Console: add property, submit sitemap.xml.
  5. GA4 (property "Elmac Cleaning Services", stream G-ED4X5KRJSZ):
     update the data stream URL to https://www.elmac.au.
"""
import sys
from pathlib import Path

OLD = "https://cr8-gaffer.github.io/elmac-website"
NEW = "https://www.elmac.au"
ROOT = Path(__file__).resolve().parent.parent


def sub(path, old, new, required=True):
    p = ROOT / path
    s = p.read_text()
    if old not in s:
        if required:
            sys.exit(f"ABORT — expected text not found in {path}:\n  {old[:100]}")
        return 0
    n = s.count(old)
    p.write_text(s.replace(old, new))
    print(f"  {path}: {n} replacement(s)")
    return n


print("1/5 vite base -> /")
sub("vite.config.js", 'base: "/elmac-website/",', 'base: "/",')

print("2/5 static origins (index.html, sitemap, robots)")
for f in ["index.html", "public/sitemap.xml", "public/robots.txt"]:
    sub(f, OLD, NEW)

print("3/5 hardcoded base paths (favicon)")
sub("index.html", 'href="/elmac-website/favicon.png"', 'href="/favicon.png"')

print("4/5 CNAME file")
(ROOT / "public" / "CNAME").write_text("www.elmac.au\n")
print("  public/CNAME written")

print("5/5 residual check")
leftovers = []
for f in ROOT.rglob("*"):
    if f.is_file() and f.suffix in {".js", ".jsx", ".html", ".xml", ".txt", ".mjs", ".json"} \
            and "node_modules" not in f.parts and "dist" not in f.parts \
            and f.name != "cutover.py":
        t = f.read_text(errors="ignore")
        if OLD in t or "/elmac-website/" in t:
            leftovers.append(str(f.relative_to(ROOT)))
print(f"  residual old-origin/base references: {leftovers or 'none'}")
print("\nDone. Review with git diff, then commit + push. Manual steps are in this file's docstring.")
