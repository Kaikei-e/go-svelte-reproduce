<script>
	import '../app.css';

  import { get } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { session } from '$app/stores';
  import { userStatus } from "$lib/API/login";

	let userSession;
	session.subscribe((value) => {
		userSession = value;
	});
	if (browser) {
		const { user } = get(userStatus);
		if (!user) {
			console.log('user data is undefined.');
			goto('/auth/login');
		}
	}
</script>

<slot />