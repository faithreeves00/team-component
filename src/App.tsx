import "./App.css";
import TeamSection from "./components/TeamSection";
import { faker } from "@faker-js/faker";
import { teamMembersList } from "./assets/data";

function App() {
  const title = faker.lorem.sentence();
  const description = faker.lorem.paragraph();
  const members = teamMembersList;

  return (
    <div id="app">
      <TeamSection title={title} description={description} members={members} />
    </div>
  );
}

export default App;
