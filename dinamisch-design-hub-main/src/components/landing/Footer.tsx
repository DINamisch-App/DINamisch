const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} DINamisch. Alle Rechte vorbehalten.</p>
      <p>Hochschule Mainz · Lucy-Hillebrand-Straße 2 · 55128 Mainz</p>
    </div>
  </footer>
);

export default Footer;
