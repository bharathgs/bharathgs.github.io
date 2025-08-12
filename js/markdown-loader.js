// Markdown Loader for Writings
class MarkdownLoader {
    static async loadArticle(articleId) {
        const article = window.writingsData.writings.find(w => w.id === articleId);
        if (!article) {
            throw new Error(`Article ${articleId} not found`);
        }

        try {
            // Fetch markdown file
            const response = await fetch(`writings/articles/${article.file}`);
            if (!response.ok) {
                throw new Error(`Failed to load ${article.file}: ${response.status}`);
            }
            
            const markdown = await response.text();
            
            // Configure marked for better output
            marked.setOptions({
                breaks: true,
                gfm: true,
                headerIds: false,
                sanitize: false
            });
            
            // Parse with marked.js
            const html = marked.parse(markdown);
            
            return {
                ...article,
                content: html
            };
        } catch (error) {
            console.error('Error loading article:', error);
            return {
                ...article,
                content: `
                    <div class="error-message">
                        <p>Sorry, there was an error loading this article.</p>
                        <p class="error-details">${error.message}</p>
                    </div>
                `
            };
        }
    }

    static renderArticle(article) {
        return `
            <div class="writing-post active" id="${article.id}">
                <div class="writings-container">
                    <a href="#" class="back-link" onclick="showWritings()">← writings</a>
                    
                    <div class="post-header">
                        <h1 class="post-title">${article.title}</h1>
                        <div class="post-meta">${article.meta}</div>
                        ${article.date ? `<div class="post-date">${this.formatDate(article.date)}</div>` : ''}
                    </div>
                    
                    <div class="post-content">
                        ${article.content}
                    </div>
                    
                    <div class="post-footer">
                        <div class="post-tags">
                            ${article.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }

    static showLoadingState() {
        return `
            <div class="writing-post active">
                <div class="writings-container">
                    <a href="#" class="back-link" onclick="showWritings()">← writings</a>
                    <div class="loading-state">
                        <p>Loading article...</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Global function for navigation - called from onclick handlers
async function loadWritingPost(articleId) {
    try {
        // Show loading state
        const container = document.getElementById('writing-posts-container');
        container.innerHTML = MarkdownLoader.showLoadingState();
        
        // Navigate to show the loading state
        showWritingPost(articleId);
        
        // Load and render article
        const article = await MarkdownLoader.loadArticle(articleId);
        container.innerHTML = MarkdownLoader.renderArticle(article);
        
        // Scroll to top for better UX
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    } catch (error) {
        console.error('Failed to load writing post:', error);
        // Show error state
        const container = document.getElementById('writing-posts-container');
        container.innerHTML = `
            <div class="writing-post active">
                <div class="writings-container">
                    <a href="#" class="back-link" onclick="showWritings()">← writings</a>
                    <div class="error-state">
                        <h2>Oops! Something went wrong</h2>
                        <p>We couldn't load this article. Please try again later.</p>
                        <button onclick="showWritings()" class="retry-button">← Back to writings</button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Make MarkdownLoader available globally for debugging
window.MarkdownLoader = MarkdownLoader;