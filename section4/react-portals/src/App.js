import Modal from './components/Modal';
import { useState } from 'react';

const App = () => {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(!showModal);
  const handleCLose = () => setShowModal(false);

  const actions = (
    <button type='button' onClick={handleCLose}>
      Close
    </button>
  );

  const modal = (
    <Modal onClose={handleCLose} actions={actions}>
      <p>This is a modal!</p>
    </Modal>
  );



  return (
    <div className='Container'>
      <button type='button' onClick={handleClick}> 
        Open
      </button>

{showModal && modal}

    </div>
  );

};
export default App;
