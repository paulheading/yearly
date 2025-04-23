import loadComplete from "~scripts/loaders/loadComplete";
import displaySection from "~scripts/display/displaySection";
import data from "~scripts/selectors/data";

export default function () {
  loadComplete(function () {
    displaySection(data.section.empty_playlist, "block");
  });
}
