export interface PostEntityProps {
  id: number;
  title: string;
}

export class PostEntity {
  private readonly _id: number;
  private readonly _title: string;

  constructor(readonly props: PostEntityProps) {
    this._id = props.id;
    this._title = props.title;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  toJson(): PostEntityProps {
    return {
      id: this.id,
      title: this.title,
    };
  }
}
