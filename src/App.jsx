import { useState } from "react";
import { episodeList } from "./data";
export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section>
          <h2>Episode Details</h2>
          <p>Select an episode to see details</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>
          Episode {selectedEpisode.id}: {selectedEpisode.title}
        </h2>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  function Index() {
    return (
      <section className="index">
        <h2>Episodes</h2>
        <ul className="elist">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Index />
        <EpisodeDetails />
      </main>
    </>
  );
}
