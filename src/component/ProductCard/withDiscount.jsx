// HOC FUNCTION
const withDiscount = (WrappedComponent) => {
  return function WithDiscountComponent(props) {
    const data = props;
    return (
      <>
        <div className="relative">
          <div className="absolute top-2 left-2 bg-white px-4 py-2 rounded-lg shadow-lg">
            <p>{Math.round(data.discount)} %</p>
          </div>
          <WrappedComponent {...data} />
        </div>
      </>
    );
  };
};

export default withDiscount;
