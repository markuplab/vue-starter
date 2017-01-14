/**
 * Commit mutation to store, with reference to args
 * @param {String} mutation
 * @param {String} [ref]
 */
module.exports = function commit (mutation, ref) {
  return function commit (args, store) {
    store.commit(mutation, args[ref]);
  }
};
