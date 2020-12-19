// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';

// import styles from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return createPortal(
//       <div className={styles.overlay} onClick={this.handleBackdropClick}>
//         <div className={styles.modal}>
//           <img src={this.props.largeImgURL} alt={this.props.alt} />
//         </div>
//       </div>,
//       modalRoot,
//     );
//   }
// }

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ largeImgURL, alt, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={largeImgURL} alt={alt} />
      </div>
    </div>,
    modalRoot,
  );
}
