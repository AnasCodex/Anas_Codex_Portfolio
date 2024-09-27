const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center pb-5">
      <div className="flex justify-center space-x-5">
        <a
          href="https://www.facebook.com/anascodex/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/facebook-new.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/anascodex/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin-2.png" />
        </a>
        <a
          href="https://www.instagram.com/anascodex/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram-new.png" />
        </a>

        <a
          href="https://github.com/AnasCodex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
