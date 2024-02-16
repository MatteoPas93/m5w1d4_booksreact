// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import classes from "./CommentModal.module.css"


import AddComment from './AddComments/AddComments';
import CommentList from './CommentsList';
import classes from "./Comments.module.css"


const CommentArea = ({asin}) => {
   let comment = {
    comment: "Excellent",
    rate: "5",
    asin: `${asin}`
   };

   return (
    <div className={classes["commentsArea"]}>
    <CommentList asin={asin}/>
    <AddComment asin={asin} comment={comment}/>
    </div>
)
}

export default CommentArea





// const CommentArea = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  


//   return (
//     <>
//       <Button className={classes["recensione"]} variant="primary" onClick={handleShow}>
//         Lascia una recensione
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Lascia una recensione</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <Form.Control type="text" placeholder="Scrivi qui la tua recensione..." />
//             </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Aggiungi recensione
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default CommentArea