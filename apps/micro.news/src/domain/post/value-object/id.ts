import { v4 } from 'uuid';

export class PostEntityId {
  static create() {
    return `post_${v4()}`;
  }
}
