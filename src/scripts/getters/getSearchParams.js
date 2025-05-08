import listenSearchParams from "#listeners/listenSearchParams";
import getAccessToken from "#getters/getAccessToken";

let state = { ...listenSearchParams(), loggedIn: getAccessToken() };

function allScenarios(callback) {
  if (this.fails) return;
  callback(state);
}

function loggedIn(callback) {
  if (this.fails || !state.loggedIn) return;
  callback(state);
}

function loggedOut(callback) {
  if (this.fails || state.loggedIn) return;
  callback(state);
}

let validParams = {
  fails: state.empty || !state.valid.length || state.invalid.length,
  allScenarios,
  loggedIn,
  loggedOut,
};

let invalidParams = {
  fails: state.empty || !state.invalid.length || state.valid.length,
  allScenarios,
  loggedIn,
  loggedOut,
};

let mixedParams = {
  fails: state.empty || !state.invalid.length || !state.valid.length,
  allScenarios,
  loggedIn,
  loggedOut,
};

export default { validParams, invalidParams, mixedParams };
