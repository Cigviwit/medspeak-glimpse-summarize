
const Footer = () => {
  return (
    <footer className="w-full py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Coming soon: Powered by{" "}
            <span className="font-semibold text-primary">Gemini AI</span>
          </p>
          <div className="mt-2 flex justify-center">
            <div className="w-8 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
