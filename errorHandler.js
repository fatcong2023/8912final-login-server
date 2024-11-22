const errorHandler = (err, context) => {
    context.log(err.stack);
    return {
      status: 500,
      body: { error: "Something went wrong!" },
    };
  };
  
  module.exports = errorHandler;
  