import getPlaylistConfig from "#getters/getPlaylistConfig";

export default function ({ card, snake }) {
  let config = getPlaylistConfig(card);

  let self = config.filter((item) => item.snake == snake)[0];

  let others = config.filter((item) => item.snake != snake);

  others = others.filter((item) => item.value);

  others = others.filter((item) => item.group.name == self.group.name);

  return { self, others };
}
