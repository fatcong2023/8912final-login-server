const logger = (context, message) => {
    context.log(`[LOG] ${message}`);
  };
  
  module.exports = { logger };
  