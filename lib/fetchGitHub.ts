export const fetchRecentRepos = async (): Promise<GitHubRepository[]> => {
  const response = await fetch(
    'https://api.github.com/users/judahsullivan/repos?sort=updated&direction=desc&per_page='
  );
  const repositories = await response.json();
  return repositories;
};
