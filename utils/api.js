import { supabase } from './supabase';

export async function getCards() {
  let { data, error } = await supabase
  .from('Cards')
  .select('*')
  if (error) throw new Error(error.message);
  return data;
}

export async function selectCard(cardId) {
    const { data, error } = await supabase
      .from('Cards')
      .update({ selected: true })
      .eq('id', cardId);
  
    // Deselect all other cards
    await supabase
      .from('Cards')
      .update({ selected: false })
      .not('id', 'eq', cardId);
  
    if (error) throw new Error(error.message);
    return data;
  }