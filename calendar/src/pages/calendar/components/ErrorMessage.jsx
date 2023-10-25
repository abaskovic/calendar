import PropTypes from "prop-types";

export const ErrorMessage = ({ message }) => {
  return <p className="text-red-500">{message}</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
