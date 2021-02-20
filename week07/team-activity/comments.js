import { Comment } from './comment.js';

export default class Comments {

    constructor(elementId) {
        //const commentsList = [];
        // this.commentParentElement = document.getElementById('commentSection');
        this.commentParentElementId = 'commentSection';
        this.commentListElement = document.getElementById('commentList');
        this.commentList = [];
        this.loadFromLocalStorage();
    }

    loadFromLocalStorage(){
        if (localStorage.getItem('comments')){
            this.commentList = JSON.parse(localStorage.getItem("comments"));
        }
        console.log(`number of comments: ${this.commentList.length}`);
    }

    saveToLocalStorage(){
        localStorage.setItem("comments", JSON.stringify(this.commentList));
        console.log(`number of comments: ${this.commentList.length}`);
    }

    // getAllComments(){
    // }
    // filterCommentsByName(){
    // }

    renderCommentList(filterByHike = null){
        const commentParentElement = document.getElementById(this.commentParentElementId);
        // console.log(`number of comments: ${this.commentList.length}`);
        if (commentParentElement.innerHTML === ''){
            commentParentElement.innerHTML = `<div>
                <h3>Comments</h3>
                <ul id="commentList"></ul>
                <div>
                    <input type="text" id="newcomment" name="newcomment" placeholder="new comment">
                    <button id="addCommentBtn" data-addbtn="0">+</button>
                </div>
            </div>`
            this.AddCommentEvent();
        } else {
            document.getElementById('commentList').innerHTML = '';
        }
        if (filterByHike === null){
            // console.log(`number of comments: ${this.commentList.length}`);
            // render al comments.
            if (this.commentList.length != 0){
                let commentListElement = document.getElementById('commentList');
                this.commentList.forEach(comment =>{
                    commentListElement.innerHTML += `<li>(id:${comment.HikeId}) ${comment.Content}</li>`;
                })
            }

            // the add comment btn now has the filter.
            const addCommentBtn = document.getElementById('addCommentBtn');
            addCommentBtn.dataset.addbtn = 0;
        } else {
            // filter comments.
            let filteredComments = this.commentList.filter(comment => comment.HikeId == filterByHike);
            // console.log(`number of comments: ${filteredComments.length}`);
            // render only the filter ones.
            if (filteredComments.length != 0){
                let commentListElement = document.getElementById('commentList');
                filteredComments.forEach(comment =>{
                    commentListElement.innerHTML += `<li>(id:${comment.HikeId}) ${comment.Content}</li>`;
                })
            }

            // the add comment btn now has the filter.
            const addCommentBtn = document.getElementById('addCommentBtn');
            addCommentBtn.dataset.addbtn = filterByHike;
        }
        // AddCommentEvent();
    }

    AddCommentEvent(filterByHike){
        const addCommentBtn = document.getElementById('addCommentBtn');
        addCommentBtn.addEventListener('touchend', (ev) => {
            let content = document.getElementById('newcomment');
            // console.log(`adding ${content.value} to hikeId: ${addCommentBtn.dataset.addbtn}`);
            this.AddNewComment(addCommentBtn.dataset.addbtn, content.value);
            content.value = '';
        });
    }

    // method to add Comment
    AddNewComment(hikeId, content){
        let commentListElement = document.getElementById('commentList');
        let commentElement = document.createElement('li');
        commentElement.innerHTML = `(id:${comment.HikeId}) ${content}`;
        //console.log(hikeId + " - " + content);
        commentListElement.appendChild(commentElement);

        let newComment = new Comment(hikeId, content);
        this.commentList.push(newComment);
        //console.log(this.commentList);

        //localStorage.setItem("comments", JSON.stringify(this.commentList));
        this.saveToLocalStorage()
    }

    // method to read Comments


}