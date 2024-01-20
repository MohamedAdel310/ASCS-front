import './../pages/application/style/popups.css';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PopupFilter({
  children,
  isOpen,
  setIsOpen,
  className,
}) {
  return (
    <>
      <div className={`popup ${className} ${isOpen || 'display-popup-false'}`}>
        {children}
        <div
          className="closeBtn"
          onClick={() => setIsOpen(false)}
          style={{ backgroundColor: '#d32f2f' }}
        >
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </div>
      </div>
      <div className={isOpen ? `blur-background` : ''}></div>
    </>
  );
}
