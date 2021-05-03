const serviceFolderCollection = require("../database").getServiceRouteFolderCollection();

module.exports.checkDuplicateUser = (parameters) => {
  const { name } = parameters;
  return serviceFolderCollection.findOne({
    name,
  }).then((result) => {
    return result === null;
  });
};
