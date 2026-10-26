interface Props { src?: string; label: string; ratio?: string }
// Swap `src` for real photography. Without it, a branded block renders.
export default function Placeholder({ src, label, ratio = "1 / 1" }: Props) {
  return src
    ? <img className="ph" src={src} alt={label} style={{ aspectRatio: ratio }} loading="lazy" />
    : <div className="ph ph--empty" role="img" aria-label={label} style={{ aspectRatio: ratio }}><span>{label.slice(0, 2)}</span></div>;
}
