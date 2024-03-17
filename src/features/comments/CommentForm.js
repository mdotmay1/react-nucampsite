import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from '../../utils/validateCommentForm';



const CommentForm = ({ campsiteId }) => {
    
    /* TASK 1: In the component body, use array destructuring syntax to destructure modalOpen and setModalOpen from a call to the useState() hook. 
       Initialize the modalOpen variable's value to false by passing that value as an argument to useState(). */
    const [modalOpen, setModalOpen] = useState(false);

    /* TASK 2: 

        Above the return statement of the CommentForm component, declare an arrow function named handleSubmit, using const.
        Give it a single parameter of values.
        In the arrow function body, declare a const named comment and initialize its value to the following object:
        {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText
        };
        Below this, still inside the handleSubmit function body, log the comment object to the console.
        Then call setModalOpen with a value of false to update the modalOpen state, which should have the effect of closing the modal at the end of this function's execution.

    */
    const handleSubmit = (values) => {
        const comment =
            {
                campsiteId: parseInt(campsiteId),
                rating: values.rating,
                author: values.author,
                text: values.commentText,
            };
            console.log(comment);
            setModalOpen(false);
    };

    return (
        <>
             <Button outline onClick={() => setModalOpen(true)}><i className='fa fa-pencil fa-lg' /> Add Comment</Button> 
        
             {/* 
             
             <Button outline onclick={() => setModalOpen(true)}>   --   MY INITIAL CODE.  CLICKING BUTTON DID NOTHING.  DIDN'T CAPITALIZE "C" IN ONCLCK.
  
            */}

             <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>Add Comment</ModalHeader>
                    <ModalBody>
                        {/*campsite: {campsiteId}  removed in Task 2*/}
                    
                        <Formik 
                            initialValues={{
                                rating: undefined,
                                author: '',
                                commentText: ''
                            }}
                            onSubmit={handleSubmit}
                            validate={validateCommentForm}
                        >

                        <Form>
                            <FormGroup>
                                <Label htmlFor='rating'>
                                    Rating
                                </Label>
                                <Field  
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option> 
                                </Field>
                                <ErrorMessage name='rating'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='author'>
                                    Your Name
                                </Label>
                                <Field  
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                >
                                </Field>
                                <ErrorMessage name='author'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='commentText'>
                                    Comment
                                </Label>
                                <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                        </Formik>
                    </ModalBody> 
            </Modal>
        </>

    )

}

export default CommentForm;