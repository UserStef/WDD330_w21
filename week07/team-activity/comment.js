export class Comment{
    constructor(hikeId, comment) {
        this.CommentID = Date.now,
        this.HikeId = hikeId,
        this.Date = Date(),
        this.Content = comment
    }
}