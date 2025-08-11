// Navigation Logic
function showContent() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('content').classList.add('active');
    document.getElementById('writings').classList.remove('active');
    // Hide any open writing posts
    document.querySelectorAll('.writing-post').forEach(post => post.classList.remove('active'));
    // Default to work section
    showWork();
}

function showLanding() {
    document.getElementById('content').classList.remove('active');
    document.getElementById('writings').classList.remove('active');
    document.getElementById('landing').style.display = 'flex';
    // Hide any open writing posts
    document.querySelectorAll('.writing-post').forEach(post => post.classList.remove('active'));
}

function showWritings() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('content').classList.remove('active');
    document.getElementById('writings').classList.add('active');
    // Hide any open writing posts
    document.querySelectorAll('.writing-post').forEach(post => post.classList.remove('active'));
}

function showWritingPost(postId) {
    document.getElementById('writings').classList.remove('active');
    document.getElementById(postId).classList.add('active');
}

function showWork() {
    document.getElementById('work-section').style.display = 'block';
    document.getElementById('philosophy-section').style.display = 'none';
    
    // Update nav button states
    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.nav-button').classList.add('active');
}

function showPhilosophy() {
    document.getElementById('work-section').style.display = 'none';
    document.getElementById('philosophy-section').style.display = 'block';
    
    // Update nav button states
    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.nav-button')[1].classList.add('active');
}