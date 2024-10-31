// $lib/types/socialIcons.ts

import {
	IconPlus,
	IconRollerSkating,
	IconSocial,
	IconBrandSpotifyFilled,
	IconLink,
	IconChess
} from '@tabler/icons-svelte';

// Mapping function for both social names and activity types
export const findSocialIcon = (activityType: string) => {
	const icons: Record<string, typeof IconPlus> = {
		LINK_CREATED: IconLink,
		LINK_DELETED: IconLink,
		HOBBY_CREATED: IconRollerSkating,
		HOBBY_DELETED: IconRollerSkating,
		SOCIAL_CREATED: IconSocial,
		SOCIAL_DELETED: IconSocial,
		UNLINK_SPOTIFY: IconBrandSpotifyFilled,
		LINK_SPOTIFY: IconBrandSpotifyFilled,
		CHESS_COM_CREATED: IconChess,
		CHESS_COM_DELETED: IconChess
	};

	return icons[activityType] || IconPlus;
};
