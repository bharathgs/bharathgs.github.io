function showContent() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('content').classList.add('active');
    document.getElementById('writings').classList.remove('active');
    hideAllWritingPosts();
    showWork();
}

function showLanding() {
    document.getElementById('content').classList.remove('active');
    document.getElementById('writings').classList.remove('active');
    document.getElementById('landing').style.display = 'flex';
    hideAllWritingPosts();
}

function showWritings() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('content').classList.remove('active');
    document.getElementById('writings').classList.add('active');
    hideAllWritingPosts();
}

function showWritingPost(postId) {

    document.getElementById('writings').classList.remove('active');
    document.getElementById('content').classList.remove('active');
    document.getElementById('landing').style.display = 'none';

}


function hideAllWritingPosts() {
    const container = document.getElementById('writing-posts-container');
    if (container) {

        const posts = container.querySelectorAll('.writing-post');
        posts.forEach(post => {
            post.classList.remove('active');
        });

        if (posts.length === 0 || !Array.from(posts).some(post => post.classList.contains('active'))) {
            container.innerHTML = '';
        }
    }
}

function showWork() {
    document.getElementById('work-section').style.display = 'block';
    document.getElementById('philosophy-section').style.display = 'none';
    

    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.nav-button').classList.add('active');
}

function showPhilosophy() {
    document.getElementById('work-section').style.display = 'none';
    document.getElementById('philosophy-section').style.display = 'block';
    

    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.nav-button')[1].classList.add('active');
}

