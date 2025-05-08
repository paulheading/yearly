import getStore from "#getters/getStore";
import pureInclude from "#filters/include";
import pureExclude from "#filters/exclude";
import pureLength from "#filters/length";
import pureYear from "#filters/year";

let include = pureInclude;

let exclude = pureExclude;

let length = pureLength;

let year = pureYear;

include.playlistOwner = ({ owner }) =>
  owner.display_name == getStore().user.display_name;

exclude.playlistId = ({ id }) => id != getStore().playlist.style;

exclude.playlistOwner = ({ owner }) =>
  owner.display_name != getStore().user.display_name;

export { exclude, include, length, year };
