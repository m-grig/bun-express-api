export const translationTextQuery = `
  select 
    verse,
    verse_text --should be 'text' after migrating
  from translation_text t
  inner join translations tr
    on tr.id = t.translation_id
  inner join books b
    on b.id = t.book
  where 
    b.name = $book
    and t.chapter = $chapter
    and tr.name = $translation
  order by verse
  ;`;

export const translationListQuery = `
  select 
    *
  from translations
  where complete = 1
  ;`;
