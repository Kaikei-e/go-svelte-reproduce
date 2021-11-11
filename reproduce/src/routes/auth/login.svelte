<script>
  import { createForm } from 'felte';

  const { form } = createForm({
    onSubmit: (values) => {
      // ...
    },
  })
</script>

<form use:form>
  <input type="text" name="email">
  <input type="password" name="password">
  <input type="submit" value="Sign in">
</form>