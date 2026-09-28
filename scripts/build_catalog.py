import os, json

with open('photo_analysis.json', 'r') as f:
    items = json.load(f)

html = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Mahesh Mokalkar Photo Catalog</title>
<style>
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0b1120; color: #f8fafc; padding: 24px; }
h1 { font-size: 28px; margin-bottom: 8px; color: #f1f5f9; }
p { color: #94a3b8; margin-bottom: 24px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.card { background: #1e293b; border-radius: 12px; overflow: hidden; border: 1px solid #334155; transition: transform 0.2s; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3); }
.card:hover { transform: translateY(-4px); border-color: #38bdf8; }
.img-wrap { width: 100%; height: 260px; background: #0f172a; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.card img { max-width: 100%; max-height: 100%; object-fit: contain; display: block; }
.info { padding: 14px; font-size: 13px; line-height: 1.5; }
.idx { font-weight: 700; color: #38bdf8; font-size: 15px; margin-bottom: 4px; word-break: break-all; }
.badge { display: inline-block; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; background: #0284c7; color: white; margin-top: 6px; }
.badge-faces { background: #059669; }
</style>
</head>
<body>
<h1>Mahesh Mokalkar Photo Archive (60 Images)</h1>
<p>Complete visual catalog for storytelling placement across the website.</p>
<div class="grid">
"""

for it in items:
    fn = it['filename']
    idx = it['index']
    w, h = it['dimensions']
    orient = it['orientation']
    faces = it['faces_detected']
    
    html += f"""
    <div class="card">
        <div class="img-wrap">
            <img src="Photos/{fn}" alt="{fn}" loading="lazy" />
        </div>
        <div class="info">
            <div class="idx">#{idx}: {fn}</div>
            <div style="color: #94a3b8;">Resolution: {w} × {h}px ({orient})</div>
            <span class="badge badge-faces">{faces} face(s) detected</span>
        </div>
    </div>
"""

html += """
</div>
</body>
</html>
"""

with open('public/photo_catalog.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Generated public/photo_catalog.html')
