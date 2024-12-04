import { getAuthorization } from "~scripts/services";

import $ from "~scripts/selectors";

$.buttons.login.addEventListener("click", getAuthorization);
