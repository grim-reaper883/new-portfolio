import PropTypes from "prop-types";


// primary button
const ButtonPrimary = ({
  href,
  target= '_self',
  label,
  icon,
  classes,
  download = false
}) => {
  if (href) {
    return (
      <a 
      href={href}
      target={target}
      download={download}
      className={"btn btn-primary " + classes}
      >
        {label}

        {icon ?
      <span className="material-symbols-outlined" aria-hidden= "true">
        {icon}
      </span>  
      : undefined
      }
      </a>
    )
  }else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}

        {icon ?
      <span className="material-symbols-outlined" aria-hidden= "true">
        {icon}
      </span>  
      : undefined
      }
      </button>
    )
  }
};

ButtonPrimary.prototype = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.bool
}


// button outline

const ButtonOutline = ({
  href,
  target= '_self',
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a 
      href={href}
      target={target}
      className={"btn btn-outline " + classes}
      >
        {label}

        {icon ?
      <span className="material-symbols-outlined" aria-hidden= "true">
        {icon}
      </span>  
      : undefined
      }
      </a>
    )
  }else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}

        {icon ?
      <span className="material-symbols-outlined" aria-hidden= "true">
        {icon}
      </span>  
      : undefined
      }
      </button>
    )
  }
};

ButtonOutline.prototype = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string

}

export {
  ButtonPrimary,
  ButtonOutline
};