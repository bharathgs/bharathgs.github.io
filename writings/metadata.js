// Writings Metadata and Index
window.writingsData = {
    writings: [
        {
            id: "space-between-thoughts",
            title: "The Space Between Thoughts",
            tags: ["meditation", "consciousness", "awareness"],
            meta: "on meditation and the observer",
            date: "2024-12-15",
            file: "space-between-thoughts.md",
            published: true,
            featured: true
        },
        {
            id: "building-ai-that-doesnt-suck",
            title: "Building AI That Doesn't Suck",
            tags: ["product engineering", "AI systems", "pragmatism"],
            meta: "pragmatic thoughts on product engineering",
            date: "2024-10-10",
            file: "building-ai-that-doesnt-suck.md",
            published: true,
            featured: false
        },
        {
            id: "playing-dumb",
            title: "The Magic of Playing Dumb",
            tags: ["product-management", "ai-development", "strategic-thinking"],
            meta: "on the value of not knowing",
            date: "2025-08-11",
            file: "playing-dumb.md",
            published: true, 
            featured: true
        },
    ],

    // Utility methods
    getPublished() {
        return this.writings.filter(w => w.published);
    },

    getByTag(tag) {
        return this.writings.filter(w => 
            w.published && w.tags.includes(tag)
        );
    },

    getFeatured() {
        return this.writings.filter(w => w.published && w.featured);
    },

    getAllTags() {
        const allTags = this.getPublished().flatMap(w => w.tags);
        return [...new Set(allTags)].sort();
    },

    // Generate HTML for writings list
    getListHTML() {
        const publishedWritings = this.getPublished();
        
        if (publishedWritings.length === 0) {
            return `
                <div class="no-writings">
                    <p>No published writings yet. Check back soon!</p>
                </div>
            `;
        }

        return publishedWritings.map(writing => `
            <div class="writing-item">
                <a href="#" class="writing-link" onclick="loadWritingPost('${writing.id}')">${writing.title}</a>
                <div class="writing-meta">${writing.meta}</div>
                <div class="writing-tags">
                    ${writing.tags.join(' • ')}
                </div>
            </div>
        `).join('');
    },

    // For backward compatibility - keeping old method structure
    getPostsHTML() {
        // This is now handled dynamically by markdown-loader.js
        // Just return empty container structure
        return '';
    }
};