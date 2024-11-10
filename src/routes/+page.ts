import { superValidate } from 'sveltekit-superforms/client';
import { zod } from 'sveltekit-superforms/adapters';
import { sampleScheme } from '$lib/schemas';

export const load = async () => {
  const form = await superValidate({}, zod(sampleScheme), {
    errors: false
  });

  return { sampleScheme, form };
};
