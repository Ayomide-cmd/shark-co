const cols: Record<string, string[]> = {
  Explore: ["Drops", "Lookbook", "Collections", "Stores", "Community", "About", "Journal"],
  Support: ["Join the pack", "Shipping", "Returns", "Contact us"],
  Connect: ["Instagram", "TikTok", "X", "YouTube"],
};
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cols">
        <div className="footer__brand">SHARK.CO</div>
        {Object.entries(cols).map(([h, links]) => (
          <div key={h}><h4>{h}</h4><ul>{links.map(l => <li key={l}><a href="#top">{l}</a></li>)}</ul></div>
        ))}
      </div>
      <div className="footer__legal"><span>2026 Shark.co</span><a href="#top">Terms and conditions</a><a href="#top">Privacy policy</a></div>
    </footer>
  );
}
