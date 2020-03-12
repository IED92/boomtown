export default function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Title Required";
  }
  if (!values.description) {
    errors.description = "Description Required";
  }
  if (!values.tags) {
    errors.tags = "At least a single tag is required";
  }

  return errors;
}
