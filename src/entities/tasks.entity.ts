type TaskProps = {
    _id?: string
    title?: string
    color?: string
    text?: string
    favorite?: boolean
}

export class Task {
public _id?: string
public title?: string
public color?: string
public text?: string
public favorite?: boolean

constructor({_id, title, color, favorite, text}: TaskProps) {
    this._id = _id
    this.title = title
    this.color = color?.toUpperCase()
    this.text = text
    this.favorite = favorite
}
}