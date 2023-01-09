import { DatabaseConnection } from './database';
import { translationListQuery, translationTextQuery } from './queries/query';

export class Repository {
  private connection = new DatabaseConnection();

  constructor() {}

  translationsList() {
    return this.connection.query(translationListQuery);
  }
  translationText($chapter: number, $book: string, $translation: string) {
    const params = {
      $book,
      $chapter,
      $translation,
    };
    return this.connection.query(translationTextQuery, params);
  }
}
