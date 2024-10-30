<script lang="ts">
  import AnalyticsCard from "$lib/components/MyProfile/AnalyticsCard.svelte";
  import type { PageData } from "./$types";
  import { getUserLanguages } from "$lib/utils/getUserLanguages";
  import { onMount } from "svelte";
  export let data: PageData;



  onMount(async () => {
    try {
      const languages = await getUserLanguages(data.session?.user?.image);
      console.log(languages);
    } catch (error) {
      console.error("Error fetching user languages:", error);
    }
  });

</script>


<div>
  <AnalyticsCard 
    title=""
    icon=""
    value=""
    description=""
  />
</div>