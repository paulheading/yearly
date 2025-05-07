import query from "~scripts/selectors/queries";
import data from "~scripts/selectors/data";

let print = {
  banner: query.print(data.section.banner),
  first_name: query.print("first_name"),
  share_link: query.print("share-link"),
  since: query.print("since"),
  tracks_added: query.print(data.section.tracks_added),
  year_added: query.print("year-added"),
};

export default print;
