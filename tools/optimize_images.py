from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "assets" / "images"


def save_webp(source: Path, target: Path, width: int | None = None, quality: int = 72):
    with Image.open(source) as im:
        im = im.convert("RGB")
        if width:
            ratio = width / im.width
            height = max(1, int(im.height * ratio))
            im = im.resize((width, height), Image.Resampling.LANCZOS)
        im.save(target, format="WEBP", quality=quality, method=6)


def main():
    gaiety = IMG / "gaiety-bar-southsea.webp"
    lucas = IMG / "lucas-ballingall.webp"

    save_webp(gaiety, gaiety, quality=70)
    save_webp(lucas, lucas, quality=74)
    save_webp(lucas, IMG / "lucas-ballingall-436.webp", width=436, quality=74)


if __name__ == "__main__":
    main()
