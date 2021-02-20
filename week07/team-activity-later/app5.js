import Hikes from './hikes.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});

import Comments from './comments.js';
const myComments = new Comments('commentList');
window.addEventListener('click', ev =>{
    event.preventDefault();
    if(ev.target.dataset.btn != null){
        let content = document.getElementById('newcomment').value;
        console.log(content);
        myComments.AddNewComment(ev.target.dataset.btn, content);

        document.getElementById('newcomment').value = '';
    }
    if(ev.target.dataset.showComments != null){
        document.getElementById('commentSection').classList.toggle('hidden');
        
        console.log(ev.target.dataset.showComments);
        myComments.renderCommentList(ev.target.dataset.showComments);
    }
});

let commentsStored = [];
if (localStorage.getItem('comments')){
    commentsStored = JSON.parse(localStorage.getItem("comments"));
    console.log(commentsStored);
}

