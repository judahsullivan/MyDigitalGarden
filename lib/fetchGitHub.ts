import { GitHubRepository } from '@/types';

export const fetchRepo = async (): Promise<GitHubRepository[]> => {
  try {
    const response = await fetch('https://api.github.com/users/judahsullivan/repos');
    const repositories = await response.json();
    // Sort repositories by date created in descending order
    repositories.sort((a: any, b: any) => Date.parse(b.created_at) - Date.parse(a.created_at));
    return repositories;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchRecentRepos = async (): Promise<GitHubRepository[]> => {
  const response = await fetch(
    'https://api.github.com/users/judahsullivan/repos?sort=updated&direction=desc&per_page=1'
  );
  const repositories = await response.json();
  return repositories;
};
