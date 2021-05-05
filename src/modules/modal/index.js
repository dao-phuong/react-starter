import React from "react";
import { Modal } from 'semantic-ui-react';

const ModalContainer =  (props) => {
    let { children, closeOnDimmerClick, openModal } = props;
    return(
        <Modal closeOnDimmerClick={closeOnDimmerClick ? true : false} open={openModal ? true : false} className="page-global-modal">
            {children}
        </Modal>
    )
}

export default ModalContainer;
