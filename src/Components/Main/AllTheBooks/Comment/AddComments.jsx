import FormMessage from "./Form/Form";

const AddComment = ({ asin }) => {
  return (
    <div>
      <FormMessage asin={asin} />
    </div>
  );
};

export default AddComment;
