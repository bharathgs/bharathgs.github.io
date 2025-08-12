// Updated Navigation Logic for Dynamic Markdown Loading
function showContent() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('content').classList.add('active');
    document.getElementById('writings').classList.remove('active');
    // Hide any open writing posts
    hideAllWritingPosts();
    // Default to work section
    showWork();
}

function showLanding() {
    document.getElementById('content').classList.remove('active');
    document.getElementById('writings').classList.remove('active');
    document.getElementById('landing').style.display = 'flex';
    // Hide any open writing posts
    hideAllWritingPosts();
}

function showWritings() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('content').classList.remove('active');
    document.getElementById('writings').classList.add('active');
    // Hide any open writing posts
    hideAllWritingPosts();
}

// Updated to work with dynamically created posts
function showWritingPost(postId) {
    console.log('📱 showWritingPost called with:', postId);
    
    // Hide main sections
    document.getElementById('writings').classList.remove('active');
    document.getElementById('content').classList.remove('active');
    document.getElementById('landing').style.display = 'none';
    
    // The writing post content is already loaded and visible in writing-posts-container
    // by the loadWritingPost function, so we don't need to do anything else here
    console.log('✅ Navigation to writing post complete');
}

// Helper function to hide all writing posts
function hideAllWritingPosts() {
    const container = document.getElementById('writing-posts-container');
    if (container) {
        // Find all writing posts and hide them
        const posts = container.querySelectorAll('.writing-post');
        posts.forEach(post => {
            post.classList.remove('active');
        });
        
        // If no specific post is being shown, clear the container
        if (posts.length === 0 || !Array.from(posts).some(post => post.classList.contains('active'))) {
            container.innerHTML = '';
        }
    }
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

// Debug function to check what elements exist
function debugElements() {
    console.log('🔍 Debug: Available elements');
    const elements = [
        'landing',
        'content', 
        'writings',
        'writing-posts-container',
        'work-section',
        'philosophy-section'
    ];
    
    elements.forEach(id => {
        const element = document.getElementById(id);
        console.log(`${id}:`, element ? '✅ Found' : '❌ Missing');
    });
}

// Call debug on load to help troubleshoot
if (typeof window !== 'undefined') {
    window.debugElements = debugElements;
    console.log('🎯 Updated navigation.js loaded');
}