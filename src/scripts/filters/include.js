let idCustom = ({ id }) => id == "custom";
let typeConfig = ({ type }) => type == "config";
let trackExplicit = ({ track }) => track.explicit;
let playlistExcess = ({ _, index }) => index >= 10;

export default {
  idCustom,
  typeConfig,
  trackExplicit,
  playlistExcess,
};
