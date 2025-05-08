import data from "#selectors/data";
import displaySection from "#display/displaySection";
import usingLiveData from "#using/usingLiveData";
import getLocalTracks from "#getters/getLocalTracks";
import getRemoteTracks from "#getters/spotify/getRemoteTracks";

export let loop = {
  continue: true,
  offset: 0,
  limit: 20,
};

export default async function () {
  displaySection(data.section.tracks_added, "block");

  return !usingLiveData ? getLocalTracks() : getRemoteTracks();
}
