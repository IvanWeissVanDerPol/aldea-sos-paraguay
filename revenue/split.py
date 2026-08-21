#!/usr/bin/env python3
"""Split REVENUE-AVENUES.md into 13 stream-group files based on ## headers."""
import re
from pathlib import Path

BASE = Path("/opt/data/projects/aldea-sos-paraguay")
SRC = BASE / "_archive-pre-restructure" / "revenue-avenues" / "REVENUE-AVENUES.md"
DST = BASE / "05-revenue" / "streams"
DST.mkdir(exist_ok=True)

with open(SRC) as f:
    content = f.read()

# Map section header → output filename
section_map = {
    "A. Online giving expansion": "A-online-giving.md",
    "B. Sponsorship & individual giving": "B-sponsorship.md",
    "C. Corporate partnerships": "C-corporate.md",
    "D. Government / multilateral / institutional": "D-government-multilateral.md",
    "E. Earned income / social enterprise": "E-earned-income.md",
    "F. Events & community": "F-events.md",
    "G. Digital & content": "G-digital-content.md",
    "H. Real estate & assets": "H-real-estate.md",
    "I. Financial instruments": "I-financial-instruments.md",
    "J. Technology & data": "J-technology-data.md",
    "K. Diaspora": "K-diaspora.md",
    "L. Crisis-specific": "L-crisis.md",
    "M. Innovation frontier (FLAGGED — review before pursuing)": "M-innovation-frontier.md",
}

# Split content by ## headers
sections = re.split(r'\n(?=## [A-Z]\. )', content)
# sections[0] is the intro (before the first section A.)
intro = sections[0]

for i, section in enumerate(sections[1:], 1):
    # Get the section header
    m = re.match(r'^## ([A-Z]\. .+)$', section, re.MULTILINE)
    if not m:
        continue
    header = m.group(1).strip()
    filename = section_map.get(header)
    if not filename:
        print(f"SKIP: no filename for header '{header}'")
        continue
    out = DST / filename
    # Build the file content: title + header + body
    body = section.lstrip('\n')
    full = f"# Stream {header}\n\n{body}"
    out.write_text(full, encoding="utf-8")
    print(f"Wrote {filename}: {len(full)} chars")

# Also write the TOP 15 as a separate file
top15_section = re.search(r'## TOP 15 Recommended.*?(?=\n## A\. )', content, re.DOTALL)
if top15_section:
    top15_content = "# TOP 15 Recommended Revenue Streams\n\n" + top15_section.group(0)
    (BASE / "05-revenue" / "top-15-recommended.md").write_text(top15_content, encoding="utf-8")
    print(f"Wrote top-15-recommended.md: {len(top15_content)} chars")

# 90-day quick wins
quickwins = re.search(r'## 30/60/90-day Quick Wins.*', content, re.DOTALL)
if quickwins:
    quickwins_content = "# 30/60/90-day Quick Wins\n\n" + quickwins.group(0)
    (BASE / "05-revenue" / "90-day-quick-wins.md").write_text(quickwins_content, encoding="utf-8")
    print(f"Wrote 90-day-quick-wins.md: {len(quickwins_content)} chars")

# Safeguarding appendix
safelast = re.search(r'## Safeguarding Appendix.*', content, re.DOTALL)
if safelast:
    safelast_content = "# Safeguarding Appendix\n\n" + safelast.group(0)
    (BASE / "05-revenue" / "safeguarding-appendix.md").write_text(safelast_content, encoding="utf-8")
    print(f"Wrote safeguarding-appendix.md: {len(safelast_content)} chars")