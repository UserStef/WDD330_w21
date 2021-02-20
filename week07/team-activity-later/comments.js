import { Comment } from './comment.js';

let commentsList = [];

export default class Comments {

    constructor(elementId) {
        // this.parentElement = document.getElementById(elementId);
        // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
        this.getAllComments();
    }

    // method to add Comment
    AddNewComment(hikeId, content){
        let commentListElement = document.getElementById('commentList');
        let commentElement = document.createElement('li');
        commentElement.innerHTML = content;
        console.log(hikeId + " - " + content);
        commentListElement.appendChild(commentElement);

        let newComment = new Comment(hikeId, content);
        commentsList.push(newComment);
        console.log(commentsList);

        localStorage.setItem("comments", JSON.stringify(commentsList));
    }

    // method to read Comments
    getAllComments(){
        if (localStorage.getItem('comments')){
            commentsList = JSON.parse(localStorage.getItem("comments"));
            console.log(commentsList);
        }
        // commentsList
    }

    // Display comments.
    renderCommentList(hikeId){
        this.getAllComments();
        let commentListElement = document.getElementById('commentList');
        if (commentsList.length > 0){
            // -- for the 'table'
            commentListElement.innerHTML = '';
            commentsList.forEach((comment) =>{
                if(comment.HikeId == hikeId){
                    commentListElement.innerHTML += `<li>${comment.Content}</li>`;
                }
            });
        }
        else {
            commentListElement.innerHTML = '';
        }
        console.log(commentsList);
    }
}