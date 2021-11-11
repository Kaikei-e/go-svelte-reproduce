<script>
	import { goto } from '$app/navigation';

	import { trylogin, userStatus } from '$lib/API/login';

	import { createForm } from 'felte';

	const { form } = createForm({
		onSubmit: (values) => {
			toHome(values);
		}
	});

	async function toHome(userData) {
		try {
			await trylogin(userData);
			if ($userStatus.user.sessionToken) {
				//week authentication
				goto('/');
			}
		} catch (err) {
			console.error(err);
		}
	}
</script>

<form use:form class="content">
	<label>ID</label>
	<input type="text" name="id" />
	<label>Password</label>
	<input type="password" name="password" />
	<input type="submit" value="Sign in" />
</form>
