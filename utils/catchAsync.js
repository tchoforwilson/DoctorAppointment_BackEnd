/**
 * @brief Method to catch all errors/exceptions resulting
 * from asynchronous executions
 * @param fn -> Function
 */
const catchAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;