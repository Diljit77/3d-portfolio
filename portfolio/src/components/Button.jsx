const Button = ({ text, className, id, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      // If a custom onClick is passed (like for downloading resume), use it
      onClick(e);
    } else if (id) {
      // Else, use the default smooth scroll behavior
      e.preventDefault();

      const target = document.getElementById(id);
      if (target) {
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <a
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
