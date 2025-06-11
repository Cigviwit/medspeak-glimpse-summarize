
const Footer = () => {
  return (
    <footer className="relative w-full py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="text-white/60 font-inter font-medium">
            Coming soon: Powered by{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gemini AI
            </span>
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
