import '../Modal.css';
import ReactDOM from 'react-dom'

const Modal = ({onClose, children, actions}) => {


    return ReactDOM.createPortal( 
        <div className='modal-container' onClick={onClose}>
            <div className='modal'>
            {children}
            {actions}
            </div>
        </div>,
        document.querySelector('.modal-wrapper')
    );

};


export default Modal;