import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const username = params.username;
	// user is the user being viewed
	if (!username) {
		throw new Error('Username is required');
	}

	const user = await prisma.user.findUnique({
		where: { githubUsername: username } // find user by username
	});

	if (!user) {
		throw new Error('User not found');
	}

	//update view by one
	await prisma.user.update({
		where: { githubId: user.githubId },
		data: {
			views: user.views + 1
		}
	});

	// get user data
	// get viewer data 
	// get time of view 
	

	const links = await prisma.link.findMany({
		where: { userId: user.githubId },
		orderBy: [{ order: 'asc' }]
	});

	const skills = await prisma.skill.findMany({
		where: { userId: user.githubId },
		orderBy: [{ order: 'asc' }]
	});

	const isOpenToCollaborating = await prisma.user.findUnique({
		where: { githubId: user.githubId },
		select: { openToCollaborating: true }
	});

	const hobbies = await prisma.hobby.findMany({
		where: { userId: user.githubId }
	});

	const socials = await prisma.social.findMany({
		where: { userId: user.githubId }
	});
	const userData = {
		links,
		skills,
		socials,
		username: username,
		isOpenToCollaborating: isOpenToCollaborating?.openToCollaborating,
		hobbies
	};

	return {
		userData
	};
};
