#!/usr/bin/env python3
"""
Crop Vision — local static server with caching DISABLED.

Use this instead of `python3 -m http.server` while iterating: it sends
no-store headers so a normal browser refresh ALWAYS loads the latest files.
That avoids the stale ES-module trap (e.g. a new game.js loaded against an old
cached world.js), which shows up as errors like
"TypeError: this.world.<x> is not a function" after an update.

  Usage:   python3 serve.py [port]      (default 8000)
  Open:    http://localhost:8000/
"""
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    print(f"Crop Vision (no-cache) running at  http://localhost:{port}/")
    print("Press Ctrl+C to stop.")
    try:
        HTTPServer(("", port), NoCacheHandler).serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
