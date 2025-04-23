import data from "~scripts/selectors/data";
import displaySection from "~scripts/display/displaySection";
import usingLiveData from "~scripts/using/usingLiveData";
import getLocalTracks from "~scripts/getters/getLocalTracks";
import getRemoteTracks from "~scripts/getters/getRemoteTracks";

export let loop = {
  continue: true,
  offset: 0,
  limit: 20,
};

export default async function () {
  displaySection(data.section.tracks_added, "block");

  return !usingLiveData ? getLocalTracks() : getRemoteTracks();
}
