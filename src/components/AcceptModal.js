import React from 'react';
import Loading from './Loading';

export const AcceptModal = ({ text, isOpen, setIsOpen, onAccept, loading }) => {
  const onAcceptAsync = async () => {
    await onAccept();
  };

  return (
    <div className={isOpen ? 'modal active' : 'modal'}>
      <div className="_container">
        <span className="_title">{text}</span>
        {loading && <Loading size={'small'} />}
        <div className="button_container">
          <button className="_button" onClick={onAcceptAsync}>
            Accept
          </button>
          <button className="_button" onClick={setIsOpen.bind(null, '')}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
