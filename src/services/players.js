import { client, checkError } from './client.js';

export async function fetchPlayers() {
  const resp = await client.from('players').select().order('name');
  return checkError(resp);
}

export async function fetchPlayerById(id) {
  const resp = await client.from('players').select('*, teams(*)').match({ id });
  return checkError(resp);
}
