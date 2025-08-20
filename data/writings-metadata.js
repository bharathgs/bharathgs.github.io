window.writingsData = {
    writings: [
        {
            id: "problem-understanding",
            title: "Stop Solving Problems. Start Understanding Them.",
            tags: ["problem-solving", "strategic-thinking", "systems-thinking"],
            meta: "Why the best solutions come from understanding context, not chasing cool ideas",
            date: "2025-08-14",
            file: "problem-understanding.md",
            published: true,
            featured: true
        },
        {
            id: "manager-knowledge-unlocking",
            title: "The Questions That Unlock Knowledge From Your Manager",
            tags: ["engineering-career", "management-skills", "strategic-thinking"],
            meta: "Four questions that turn surface-level one-on-ones into strategic learning sessions",
            date: "2025-08-07",
            file: "manager-knowledge-unlocking.md",
            published: true,
            featured: true
        },
        {
            id: "space-between-thoughts",
            title: "The Space Between Thoughts",
            tags: ["meditation", "consciousness", "awareness"],
            meta: "on meditation and the observer",
            date: "2025-08-01",
            file: "space-between-thoughts.md",
            published: true,
            featured: true
        },
        {
            id: "playing-dumb",
            title: "The Magic of Playing Dumb",
            tags: ["product-management", "ai-development", "strategic-thinking"],
            meta: "on the value of not knowing",
            date: "2025-07-28",
            file: "playing-dumb.md",
            published: true, 
            featured: true
        }
    ],

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

    // Generate HTML for writings list with proper event handling
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
                <a href="#writings/${writing.id}" 
                   class="writing-link" 
                   onclick="loadWritingPost('${writing.id}'); return false;"
                   data-article-id="${writing.id}">
                   ${writing.title}
                </a>
                <div class="writing-meta">${writing.meta}</div>
                <div class="writing-tags">
                    ${writing.tags.join(' • ')}
                </div>
            </div>
        `).join('');
    },

    // For backward compatibility
    getPostsHTML() {
        return '';
    }
};