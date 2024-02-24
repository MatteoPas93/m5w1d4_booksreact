import EpicBooks from "./AllTheBooks/AllTheBooks";
import CommentArea from "./AllTheBooks/Comment/CommentArea";
import { useState } from "react";

const MainContainer = () => {
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  const handleBookClick = (asin) => {
    setSelectedBookAsin(asin);
  };

  return (
    <div className="row">
      <EpicBooks onBookClick={handleBookClick}/>
      {selectedBookAsin && <CommentArea asin={selectedBookAsin} />}
    </div>
  );
};

export default MainContainer;
