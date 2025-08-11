// Work Section Data
window.workData = {
    expertiseTags: [
        "AI Product Strategy",
        "Recommendation Systems Design",
        "Cross-functional Leadership",
        "Consumer AI",
        "LLM Systems",
        "Product Design", 
        "Product Led Growth",
    ],

    summary: "I've spent 9+ years building machine learning systems that create real impact—powering multi-million dollar outcomes, improving user engagement, and driving operational efficiency. I specialize in turning AI capabilities into products people actually use and love.",

    currentJobs: [
        {
            company: "<a href=\"https://betterup.com\" target=\"_blank\" class=\"company-link\">BetterUp</a>",
            role: "Senior ML Engineer • July 2021 – Present",
            description: "Building AI systems that power BetterUp’s coaching platform. Re-architected the matching engine and recommendation systems, driving $10M+ in optimization impact, record retention, and industry-leading conversion via AI-driven drip campaigns."
        },
        {
            company: '<a href="https://sochwellbeing.com" target="_blank" class="company-link">Soch Wellbeing</a>',
            role: "Co-founder • March 2023 – Present", 
            description: "Co-founding Soch, an AI-driven journaling platform for self-understanding and intentional living. Leading product vision, UI/UX design, and building LLM-powered systems that deliver personalized insights and growth."
        }
    ],

    pastCompanies: [
        {
            name: "Elemendar",
            tooltip: "Cybersecurity AI platform used by UK's National Security Center. Built NLP pipelines for threat intelligence extraction."
        },
        {
            name: "Nirveda Cognition", 
            tooltip: "Enterprise document intelligence platform for clients like KPMG. Created synthetic data generation system and PyFlex pipeline."
        },
        {
            name: "Terra Economics",
            tooltip: "Built Indian address parser for major banks like HDFC. Created Address2Vec embeddings improving search accuracy by 40%."
        },
        {
            name: "Genesis AI",
            tooltip: "AI solutions for financial clients including Citibank. Built document classification and summarization systems."
        },
        {
            name: "Voyagenius Labs",
            tooltip: "Founding ML engineer at early-stage AI consulting firm. Built 1TB-scale churn prediction and dynamic pricing systems."
        }
    ],

    openSourceProjects: [
        {
            description: "A comprehensive collection of PyTorch resources including tutorials, papers, and tools for the deep learning community.",
            name: "Awesome PyTorch List",
            url: "https://github.com/bharathgs/Awesome-pytorch-list",
            stats: "16K+ stars"
        },
        {
            description: "An encrypted, decentralized deep learning library designed for privacy-preserving machine learning on encrypted data.",
            name: "PySyft",
            url: "https://github.com/OpenMined/PySyft", 
            stats: "48K+ downloads"
        },
        {
            description: "PyTorch implementation of Neural Arithmetic Logic Units providing clean implementations for numerical reasoning in neural networks.",
            name: "NALU",
            url: "https://github.com/bharathgs/NALU",
            stats: "11K+ downloads"
        },
        {
            description: "Implementation-agnostic OCR framework providing unified interface for various backends including AWS Textract, Google Cloud Vision, and Pytesseract.",
            name: "OCRpy", 
            url: "https://github.com/maxent-ai/ocrpy",
            stats: "10K+ downloads"
        },
        {
            description: "Natural language processing library for intelligent date and time extraction from unstructured text documents with robust parsing capabilities.",
            name: "PyDateParser",
            url: "https://github.com/GlibAI/pydateparser",
            stats: "4K+ downloads"
        }
    ],

    communityWork: [
        {
            role: "Core Committer & Developer",
            organization: "OpenMined.org",
            description: "Led development of encrypted decentralized deep learning library (PySyft) with 48K+ PyPI downloads. Architected core API functionality and established distributed team processes for international contributors."
        },
        {
            role: "Technical Reviewer",
            organization: "Packt Publications", 
            description: "Reviewed technical content for PyTorch Deep Learning Hands-On and other publications, ensuring code quality and educational effectiveness of AI/ML learning materials."
        }
    ],

    patents: [
        {
            title: "Document Intelligence System for Automatically Extracting Data from Templateless Document Images",
            authors: "Jordan Hochenbaum, Bharath G.S., Rita Anjan, Ajay Kapur",
            date: "September 2021"
        },
        {
            title: "Intelligent Coach and Member Matching System",
            authors: "Moritz Sudhoff, Bharath G.S., Daniel et al.",
            date: "In Review - March 2025"
        }
    ],

    getHTML() {
        return `
            <div class="expertise-tags">
                ${this.expertiseTags.join(' • ')}
            </div>
            
            <div class="summary-section">
                <p class="summary-text">
                    ${this.summary}
                </p>
            </div>
            
            <div class="section">
                <h2 class="section-title">Current</h2>
                <div class="current-work">
                    ${this.currentJobs.map(job => `
                        <div class="work-item">
                            <div class="company">${job.company}</div>
                            <div class="role">${job.role}</div>
                            <div class="work-description">
                                ${job.description}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">Past</h2>
                <div class="company-list">
                    ${this.pastCompanies.map(company => `
                        <span class="company-tag" data-tooltip="${company.tooltip}">${company.name}</span>
                    `).join('')}
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">Open Source</h2>
                <div class="project-sentences">
                    ${this.openSourceProjects.map(project => `
                        <p class="project-sentence">
                            ${project.description}
                            <a href="${project.url}">${project.name}</a> 
                            <span class="project-stats">${project.stats}</span>
                        </p>
                    `).join('')}
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">Community</h2>
                <div class="community-items">
                    ${this.communityWork.map(item => `
                        <div class="community-item">
                            <div class="community-role">${item.role}</div>
                            <div class="community-org">${item.organization}</div>
                            <div class="community-description">
                                ${item.description}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">Patents</h2>
                ${this.patents.map(patent => `
                    <div class="patent-item">
                        <div class="patent-title">${patent.title}</div>
                        <div class="patent-authors">${patent.authors}</div>
                        <div class="patent-date">${patent.date}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
};