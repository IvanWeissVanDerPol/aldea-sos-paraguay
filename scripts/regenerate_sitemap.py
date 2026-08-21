"""Regenerate sitemap.xml with current URLs."""
import os
from datetime import datetime

url_list = []
base_url = "https://aldea-sos.paragu-ai.com"


def crawl(directory, prefix=""):
    if not os.path.isdir(directory):
        return
    for item in sorted(os.listdir(directory)):
        path = os.path.join(directory, item)
        if os.path.isfile(path) and item.endswith(".html"):
            url_path = prefix + "/" + item
            if item == "index.html":
                url_path = prefix + "/"
            url_list.append(base_url + url_path)
        elif os.path.isdir(path) and not item.startswith("."):
            new_prefix = prefix + "/" + item
            if prefix == "":
                new_prefix = "/" + item
            crawl(path, new_prefix)


crawl("site")

url_list = sorted(set(url_list))

today = datetime.now().strftime("%Y-%m-%d")
xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for url in url_list:
    if url == base_url + "/":
        priority = "1.0"
    elif url.endswith("/"):
        priority = "0.9"
    else:
        priority = "0.7"
    xml += f'  <url>\n    <loc>{url}</loc>\n    <lastmod>{today}</lastmod>\n    <priority>{priority}</priority>\n  </url>\n'
xml += '</urlset>\n'

with open("site/sitemap.xml", "w") as f:
    f.write(xml)

print(f"Total URLs: {len(url_list)}")
print(f"First 5:")
for url in url_list[:5]:
    print(f"  {url}")
print(f"Last 5:")
for url in url_list[-5:]:
    print(f"  {url}")
print(f"sitemap.xml: {len(xml)} chars")
