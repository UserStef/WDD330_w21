import { Comment } from './comment.js';

export default class Comments {

    constructor(elementId) {
        this.commentList = [];
        this.loadFromLocalStorage();
    }

    loadFromLocalStorage(){
        if (localStorage.getItem('comments')){
            this.commentList = JSON.parse(localStorage.getItem("comments"));
        }
        console.log(`Number of comments: ${this.commentList.length}`);
    }

    saveToLocalStorage(){
        localStorage.setItem("comments", JSON.stringify(this.commentList));
        console.log(`New number of comments: ${this.commentList.length}`);
    }

    renderCommentList2(hikeId = null){
        let commentParentElement = document.getElementById('commentSection');
        commentParentElement.innerHTML = '';

        let commentTitle = document.createElement('h3');
        commentTitle.innerHTML = "Comments";
        commentParentElement.appendChild(commentTitle);

        let commentListElem = document.createElement('ul');
        commentParentElement.appendChild(commentListElem);

        // -- if no 'hikeId' was provided, then show all comments.
        if(hikeId === null && this.commentList.length != 0){
            this.commentList.forEach(comment =>{
                commentListElem.innerHTML += `<li>(id:${comment.HikeId}) ${comment.Content}</li>`;
            });
        }

        // -- if 'hikeId' was provided, then 
        // -- -- show filtered all comments.
        // -- -- and the 'addNewComment' feature.
        if(hikeId !== null){
            // Load the comments.
            this.commentList.forEach(comment => {
                let confirm = comment.HikeId == hikeId;
                if(comment.HikeId == hikeId){
                    commentListElem.innerHTML += `<li>${comment.Content}</li>`;
                }
            });

            let addComment = document.createElement('div');
            addComment.innerHTML += `<input type="text" id="newcomment" name="newcomment" placeholder="new comment">`;
            commentParentElement.appendChild(addComment);

            let addCommentBtn = document.createElement('button');
            addCommentBtn.dataset.addbtn = hikeId;
            addCommentBtn.innerHTML = "+";
            
            addCommentBtn.addEventListener('touchend', (ev) => {
                let newComment = new Comment(ev.target.dataset.addbtn, document.getElementById('newcomment').value);
                this.commentList.push(newComment);
                this.saveToLocalStorage();
                this.renderCommentList2(ev.target.dataset.addbtn);
            });
            addComment.appendChild(addCommentBtn);
        }
    }
}