import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { getGithubUsername } from '$lib/utils/getGithubUsername';
import { getGitHubUserIdFromImageUrl } from '$lib/utils/getGithubIDFromImage';
import { prisma } from '$lib/server/prisma';
import type { User } from '$lib/types/User';
import { getUserLanguages } from '$lib/utils/getUserLanguages';
// Define the user variable with a possible null
let user: User | null = null;

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth();
	if (!session?.user) throw redirect(303, '/');
	const userId = getGitHubUserIdFromImageUrl(session.user.image);
	if (!userId) throw new Error('User ID could not be determined from image URL');

	// Fetch the user from the database	
	user = await prisma.user.findUnique({
		where: { githubId: userId }
	});

	// If the user does not exist, create a new user
	if (!user) {
		const username = await getGithubUsername(session.user.image);
		if (!username) throw new Error('Username could not be determined from image URL');

		// Create new user in the database
		user = await prisma.user.create({
			data: {
				githubId: userId,
				githubUsername: username,
				updatedAt: new Date()
			}
		});
	}

	// Ensure user is not null before accessing properties
	if (!user) throw new Error('User creation failed or user is null');

	// Fetch links, skills, hobbies, spotifyTokens related to the user
	const links = await prisma.link.findMany({
		where: { userId: user.githubId },
		orderBy: [{ order: 'asc' }]
	});

	const skills = await prisma.skill.findMany({
		where: { userId: user.githubId },
		orderBy: [{ order: 'asc' }]
	});

	const hobbies = await prisma.hobby.findMany({
		where: { userId: user.githubId }
	});

	const socials = await prisma.social.findMany({
		where: { userId: user.githubId }
	});

	// Create userStats object
	const userData = {
		username: user.githubUsername,
		views: user.views || 0,
		openToCollaborating: user.openToCollaborating
	};

	const userLanguages = await getUserLanguages(session.user.image);

	// Return data to the frontend
	return {
		userId: user.id,
		userData,
		links,
		skills,
		hobbies,
		socials,
	};
};

