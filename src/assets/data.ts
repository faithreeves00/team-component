import { faker } from "@faker-js/faker";

export interface TeamMember {
  name: string;
  title: string;
  avatar_url?: string;
  linkedin_url?: string;
}

function createTeamMember(): TeamMember {
  const sexType = faker.person.sexType();
  const firstName = faker.person.firstName(sexType);
  const lastName = faker.person.lastName();
  const username = faker.internet.username({ firstName, lastName });

  return {
    name: `${firstName} ${lastName}`,
    title: faker.person.jobTitle(),
    avatar_url: faker.image.personPortrait({ sex: sexType }),
    linkedin_url: `https://www.linkedin.com/in/${username}`,
  };
}

export const teamMembersList: TeamMember[] = faker.helpers.multiple(
  createTeamMember,
  { count: 6 },
);
