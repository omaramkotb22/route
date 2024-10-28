<script lang="ts">
	import GitHub from 'lucide-svelte/icons/github';
	import Users from 'lucide-svelte/icons/users';
	import Folder from 'lucide-svelte/icons/folder';
	import { ChartArea } from 'lucide-svelte';
	import type { PrivateProfileData } from '$lib/types/PrivateProfileData';
	import Analytics from '$lib/components/Shared/Analytics.svelte';
	import StatsCard from '$lib/components/Shared/StatsCard.svelte';
	import StatsCardSkeleton from '../Shared/StatsCardSkeleton.svelte';

	export let privateProfileData: PrivateProfileData | null;
</script>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
	{#if privateProfileData}
		<StatsCard
			icon={Users}
			title="Total Profile Views"
			data={privateProfileData.views.toString()}
		/>
		<StatsCard
			icon={Folder}
			title="Projects on Github"
			data={privateProfileData.repoCount.toString()}
		/>
		<StatsCard
			icon={GitHub}
			title="GitHub Contributions (Past 30 Days)"
			data={privateProfileData.contributionsCount.toString()}
		/>
		<StatsCard
			icon={GitHub}
			title="GitHub Followers"
			data={privateProfileData.followers.toString()}
		/>
		<Analytics 
		icon={ChartArea}
		title="Profile Views"
		data={privateProfileData}
		/>


	{:else}
		{#each { length: 4 } as _}
			<StatsCardSkeleton />
		{/each}
	{/if}
</div>
