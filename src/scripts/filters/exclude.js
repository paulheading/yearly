let idCustom = ({ id }) => id != "custom";
let typeConfig = ({ type }) => type != "config";
let trackExplicit = ({ track }) => !track.explicit;
let playlistExcess = ({ _, index }) => index < 10;

function falsyBooleans(value) {
  if (value == null) return false;
  if (value == false) return false;
  if (value == 0) return false;
  return true;
}

function truthyBooleans(value) {
  if (value == true) return false;
  return true;
}

let allBooleans = (value) => falsyBooleans(value) && truthyBooleans(value);

export default {
  idCustom,
  typeConfig,
  trackExplicit,
  playlistExcess,
  falsyBooleans,
  truthyBooleans,
  allBooleans,
};
