import { getGitHubUserIdFromImageUrl } from "./getGithubIDFromImage";
export const getUserLanguages = async (imageUrl: string | null | undefined) => {

    const userId = getGitHubUserIdFromImageUrl(imageUrl);

    const fetchGitHubLanguagesById = async (id: number): Promise<string[] | null> => {
        const url = `https://api.github.com/user/${id}/repos`;
        try {
            const response = await fetch(url, {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const data = await response.json();
            const languages = data.map((repo: any) => repo.language);
            return languages;
        } catch (error) {
            console.error('Failed to fetch GitHub languages:', error);
            throw error;
        }
    };

    if (userId) {
        return await fetchGitHubLanguagesById(userId);
    } else {
        throw new Error('User ID is null or undefined');
    }
};