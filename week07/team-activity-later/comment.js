export class Comment{
    constructor(hikeId, content) {
        this.CommentID = Date.now,
        this.HikeId = hikeId,
        this.Date = Date(),
        this.Content = content
    }
}