from pathlib import Path
import subprocess

from PIL import Image
import imageio_ffmpeg

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "assets" / "images"
VID = ROOT / "assets" / "videos"


def optimize_webp(path: Path, max_width: int, quality: int) -> None:
    with Image.open(path) as im:
        im = im.convert("RGB")
        if im.width > max_width:
            ratio = max_width / im.width
            height = int(im.height * ratio)
            im = im.resize((max_width, height), Image.Resampling.LANCZOS)
        im.save(path, format="WEBP", quality=quality, method=6)


def optimize_video(path: Path) -> None:
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    temp = path.with_suffix(".optimized.mp4")

    cmd = [
        ffmpeg,
        "-y",
        "-i",
        str(path),
        "-vf",
        "scale='min(960,iw)':-2",
        "-c:v",
        "libx264",
        "-preset",
        "veryfast",
        "-crf",
        "33",
        "-movflags",
        "+faststart",
        "-c:a",
        "aac",
        "-b:a",
        "48k",
        str(temp),
    ]

    subprocess.run(cmd, check=True)

    if temp.exists() and temp.stat().st_size < path.stat().st_size:
        temp.replace(path)
    elif temp.exists():
        temp.unlink(missing_ok=True)


def extract_video_poster(video_path: Path, poster_path: Path) -> None:
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

    cmd = [
        ffmpeg,
        "-y",
        "-ss",
        "00:00:02.000",
        "-i",
        str(video_path),
        "-frames:v",
        "1",
        "-vf",
        "scale=960:-2",
        str(poster_path),
    ]

    subprocess.run(cmd, check=True)

    optimize_webp(poster_path, max_width=960, quality=58)


def main() -> None:
    image_targets = [
        ("boxing-gloves-lying-empty-ring.webp", 1600, 60),
        ("view-pair-boxing-gloves.webp", 1600, 60),
        ("hero-home.webp", 1920, 58),
        ("portsmouth-city.webp", 1600, 60),
        ("walking-to-the-ring.webp", 1400, 58),
        ("gaiety-bar-southsea.webp", 1400, 58),
        ("sporty-man-boxing-photo-boxer-ring-strength-motivation.webp", 1600, 52),
        ("pair-gloves-boxing-sport.webp", 1600, 52),
        ("side-view-male-boxer-with-gloves-helmet.webp", 1400, 56),
        ("portrait-young-man-boxing-gym.webp", 1400, 56),
        ("logo.webp", 512, 70),
    ]

    for filename, max_width, quality in image_targets:
        optimize_webp(IMG / filename, max_width=max_width, quality=quality)

    video_path = VID / "lucas-ballingall-training.mp4"
    optimize_video(video_path)
    extract_video_poster(video_path, IMG / "lucas-ballingall-training-poster.webp")


if __name__ == "__main__":
    main()
