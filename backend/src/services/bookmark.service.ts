import { BookmarkRepository } from '../repositories/bookmark.repository';

export class BookmarkService {
  private repository = new BookmarkRepository();

  // Example placeholder
  public async getAll() {
    return this.repository.findAll();
  }
}
