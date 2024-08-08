type TaskProps = {
    _id?: string
    title: string
    color: string
}

export class Task {
public _id?: string
public title: string
public color: string

constructor({_id, title, color}: TaskProps) {
    this._id = _id
    this.title = title
    this.color = color.toUpperCase()
}
}