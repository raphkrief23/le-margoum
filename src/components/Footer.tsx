const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">Le Margoum</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          28 Pl. aux Aires, 06130 Grasse
        </p>
        <a href="tel:+33603369080" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 6 03 36 90 80
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} Le Margoum. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
