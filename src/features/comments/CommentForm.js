import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

/*
    Create a function component named CommentForm. In its parameter list, destructure a campsiteId prop, using object destructuring syntax.
    Make sure to export it as the default.
*/

const CommentForm = ({ campsiteId }) => {
    
    /* In the component body, use array destructuring syntax to destructure modalOpen and setModalOpen from a call to the useState() hook. 
       Initialize the modalOpen variable's value to false by passing that value as an argument to useState(). */
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            {/* 

                Give the Button component a Boolean prop of outline and an onClick prop of an arrow function that returns the value from calling setModalOpen(true),
                making sure to surround the arrow function in curly braces since you are using JavaScript inside JSX. The onClick prop should look like this:
                onClick={() => setModalOpen(true)}
            */}
             <Button outline onClick={() => setModalOpen(true)}><i className='fa fa-pencil fa-lg' /> Add Comment</Button> 
             
             {/* 
             
             <Button outline onclick={() => setModalOpen(true)}>   --   MY INITIAL CODE.  USED TOGGLING MODALS CODE CHALLENGE AS A GUIDE.  
                                                                        CLICKING BUTTON DID NOTHING.  DIDN'T CAPITALIZE "C" IN ONCLCK.
  
            */}
             
             
             
             {/* 
             
                Beneath the Button, render a Modal component.
                Give it a prop of isOpen={modalOpen}. This will cause the Modal to open or close depending on the value of modalOpen.
                In the Modal component, render a ModalHeader component with a toggle prop.
                For the value of this toggle prop, pass an arrow function that returns setModalOpen(false). Make sure to surround the arrow function in curly braces.
                This will cause the modalOpen state to be set back to false when the Modal is closed.
                Give the ModalHeader component a text content of Add Comment, between its start and end tags.
                Below the ModalHeader component, render a ModalBody component that simply shows the current campsiteId, as follows:
                <ModalBody>campsite: {campsiteId}</ModalBody> 
            
            */}

            
             <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>Add Comment</ModalHeader>
                    <ModalBody>campsite: {campsiteId}</ModalBody>
            </Modal>
        </>

    )

}

export default CommentForm;