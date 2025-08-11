// Writings Data
window.writingsData = {
    writings: [
        {
            id: "post1",
            title: "The Space Between Thoughts",
            tags: ["meditation", "consciousness", "awareness"],
            meta: "on meditation and the observer",
            content: [
                "When I sit to meditate, initially the outer noise dominates. Cars passing, birds chirping, the hum of the air conditioner. But as I settle deeper, something shifts. The external sounds recede into background, and the mental noise becomes louder.",
                "This is where it gets interesting. I notice thoughts arising—some mundane, others charged with emotion. The automatic response is to engage, to follow the thread, to become the thinker of the thought. But what if we don't?",
                "I've been exploring this question: when exactly do we identify with a thought? Can we catch the precise moment we go from observing a mental event to becoming it? It's subtle, like trying to observe the observer.",
                "The ears hear, the eyes see, the skin feels. None of this can be controlled unless we deliberately avoid contact with objects. But when they encounter objects, processing happens automatically. We have no say.",
                "Extending this observation: when a thought comes in contact with the mind, thinking happens. I have no way to control it. This suggests that thoughts—even thoughts about \"my\" identity—are not me. So who or what am I?",
                "The space between thoughts might hold the answer. Or perhaps the question itself is the answer."
            ]
        },
        {
            id: "post2",
            title: "Building AI That Doesn't Suck",
            tags: ["product engineering", "AI systems", "pragmatism"],
            meta: "pragmatic thoughts on product engineering",
            content: [
                "After 9 years building ML systems, I've learned that the sexiest algorithm is worthless if users don't engage with it. The real work isn't in the model—it's in the product wrapped around it.",
                "At BetterUp, we rearchitected our core ML system not because the old one was technically inferior, but because it couldn't scale with user needs. The new system drives $8M+ in annual impact, not through better accuracy, but through better integration with actual workflows.",
                "This is the pragmatist in me speaking: build systems that solve real problems for real people. The elegance of your architecture matters less than whether someone's day gets easier because of what you shipped.",
                "Three things I've learned: First, synthetic data generation often matters more than model architecture. Clean, relevant training data beats fancy algorithms. Second, the UI/UX around your AI is the product—not the model itself. Third, if you can't explain why your system made a decision, users won't trust it.",
                "We're in an era where LLMs can do remarkable things, but most AI products still suck because they're built by people who love the technology more than the problem it's supposed to solve.",
                "Start with the problem. Build for humans. Ship frequently. The rest is just implementation details."
            ]
        },
        {
            id: "post3",
            title: "The Identification Problem",
            tags: ["advaita", "self-inquiry", "thoughts"],
            meta: "on the mechanism of becoming",
            content: [
                "Coming soon..."
            ]
        },
        {
            id: "post4", 
            title: "Synthetic Data for Real Problems",
            tags: ["machine learning", "data engineering", "ML systems"],
            meta: "lessons from the trenches",
            content: [
                "Coming soon..."
            ]
        },
        {
            id: "post5",
            title: "Beyond the Mind's Commentary", 
            tags: ["authenticity", "trika", "inner work"],
            meta: "living without the narrator",
            content: [
                "Coming soon..."
            ]
        },
        {
            id: "post6",
            title: "The Two-Principle Life",
            tags: ["life philosophy", "freedom", "intentional living"],
            meta: "wealth and liberation",
            content: [
                "Coming soon..."
            ]
        }
    ],

    getListHTML() {
        return this.writings.map(writing => `
            <div class="writing-item">
                <a href="#" class="writing-link" onclick="showWritingPost('${writing.id}')">${writing.title}</a>
                <div class="writing-tags">
                    ${writing.tags.join(' • ')}
                </div>
            </div>
        `).join('');
    },

    getPostsHTML() {
        return this.writings.map(writing => `
            <div class="writing-post" id="${writing.id}">
                <div class="writings-container">
                    <a href="#" class="back-link" onclick="showWritings()">← writings</a>
                    
                    <div class="post-header">
                        <h1 class="post-title">${writing.title}</h1>
                        <div class="post-meta">${writing.meta}</div>
                    </div>
                    
                    <div class="post-content">
                        ${writing.content.map(paragraph => `<p>${paragraph}</p>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
};