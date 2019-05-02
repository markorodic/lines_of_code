import _ from "lodash";

function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

export function mergeStates(state, ...newPartialState) {
  return _.mergeWith({}, state, ...newPartialState, customizer);
}

export function cloneStates(state) {
  const args = [{}, state];
  return _.merge.apply(this, args);
}
