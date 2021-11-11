<script>
import { goto } from '$app/navigation';

import { login, userStatus } from '$lib/API/login';

  import { createForm } from 'felte';

  const { form } = createForm({
    onSubmit: async(values) => {
      await toHome(values)
    },

  })

  async function toHome(userData) {
		try {
			await login(userData);
			if ($userStatus.user.sessionToken) {//week authentication
				goto('/');
			}
		} catch (err) {
			console.log(err);
		}
	}
</script>

<form use:form>
  <input type="text" name="email">
  <input type="password" name="password">
  <input type="submit" value="Sign in">
</form>