import getStore from "~scripts/store/getStore";
import pureInclude from "~scripts/filters/include";
import pureExclude from "~scripts/filters/exclude";
import pureLength from "~scripts/filters/length";
import pureYear from "~scripts/filters/year";

let include = pureInclude;

let exclude = pureExclude;

let length = pureLength;

let year = pureYear;

include.playlistId = ({ id }) => id == getStore().create.playlist.style;

include.playlistOwner = ({ owner }) =>
  owner.display_name == getStore().user.display_name;

exclude.playlistId = ({ id }) => id != getStore().create.playlist.style;

exclude.playlistOwner = ({ owner }) =>
  owner.display_name != getStore().user.display_name;

export { exclude, include, length, year };
