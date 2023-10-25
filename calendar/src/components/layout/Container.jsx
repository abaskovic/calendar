import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return (
    <div className="px-6 xs:px-[7.5vw] sm:px-[5.625vw] 2xl:px-[108px] py-10  2xl:max-w-screen-2xl 2xl:mx-auto ">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
