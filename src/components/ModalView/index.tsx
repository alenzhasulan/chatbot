import React from 'react';
import ButtonModal from "./ButtonModal";

const ModalView: React.FC = () => {
    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <ButtonModal />
        </div>
    );
}

export default ModalView;
