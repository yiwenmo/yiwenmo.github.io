    import os
    import requests
    from datetime import datetime

    HACKMD_LIST_FILE = "hackmd_list.txt"
    OUTPUT_DIR = "_posts"

    def slugify(text):
        return "".join(c if c.isalnum() else "-" for c in text.lower()).strip("-")

    def fetch_hackmd_markdown(url):
        export_url = url.rstrip("/") + "/download"
        r = requests.get(export_url)
        r.raise_for_status()
        return r.text

    def generate_front_matter(title, date):
        return f"""---
layout: post
title: "{title}"
date: {date}
---
"""

    def main():
        if not os.path.exists(OUTPUT_DIR):
            os.makedirs(OUTPUT_DIR)

        with open(HACKMD_LIST_FILE, "r") as f:
            urls = [line.strip() for line in f if line.strip()]

        for url in urls:
            try:
                content = fetch_hackmd_markdown(url)
                lines = content.strip().splitlines()
                title_line = lines[0] if lines else "Untitled"
                title = title_line.strip("# ").strip()
                slug = slugify(title)
                today = datetime.today().strftime("%Y-%m-%d")
                filename = f"{OUTPUT_DIR}/{today}-{slug}.md"

                with open(filename, "w", encoding="utf-8") as f:
                    f.write(generate_front_matter(title, today))
                    f.write("\n")
                    f.write("\n".join(lines))

                print(f"Saved: {filename}")
            except Exception as e:
                print(f"Failed to fetch {url}: {e}")

    if __name__ == "__main__":
        main()
