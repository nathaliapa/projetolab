from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).parent
PUBLIC = ROOT / "public"

class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        clean = unquote(path.split("?", 1)[0])
        if clean == "/manus-routes.json" or clean == "/favicon.svg":
            return str(PUBLIC / clean.lstrip("/"))
        if clean in {"/sobre", "/contato"}:
            return str(ROOT / "index.html")
        return str(ROOT / clean.lstrip("/"))

    def log_message(self, fmt, *args):
        print(fmt % args)

ThreadingHTTPServer(("0.0.0.0", 3000), Handler).serve_forever()
