// Philosophy Section Data
window.philosophyData = {
  sections: [
    {
      title: "Life Framework",
      content: [
        "I organize life around three fundamental axes across six key domains:",
        "<strong>The Three Axes:</strong> To Be (inner development, presence, who I'm becoming), To Do (actions, achievements, external impact), and To Know (understanding, learning, expanding my mental models of reality).",
        "<strong>Six Life Domains:</strong> Health | Wealth | Work | Inner-work | Relationships | Others",
        "This framework helps me evaluate any opportunity by asking: Does this serve my being, doing, or knowing? Am I neglecting any axis? Which domain needs attention?",
        "<strong>Core Approach:</strong> Achieve financial security and freedom first, then use that freedom to pursue deeper understanding and liberation. This isn't about choosing money over meaning—it's about creating conditions where you can pursue meaning without survival anxiety.",
        "<strong>Life Goals:</strong> Explore the nature of reality and pursue moksha (liberation), embrace diverse and meaningful experiences across all domains, and live joyfully while helping others do the same."
      ]
    },
    {
      title: "Core Values",
      content: [
        "Seven values guide both my life and work decisions:",
        "<strong>Autonomy</strong> — Acting from internal standards rather than external expectations. <strong>Growth</strong> — Continuous evolution through deliberate challenges. <strong>Mastery</strong> — Deep understanding and craftsmanship approach. <strong>Honesty</strong> — Direct communication and intellectual truth-seeking.",
        "<strong>Impact</strong> — Meaningful results over busy work. <strong>Balance</strong> — Managing the three life axes sustainably. <strong>Freedom</strong> — Creating conditions for choice and exploration where financial security enables deeper pursuits."
      ]
    },
    {
      title: "How I Think & Work",
      content: [
        "I'm an analytical systems thinker who sees patterns and builds frameworks. I approach problems through deep exploration rather than surface-level solutions, always asking 'what's really happening here?' and 'how do the pieces fit together?'",
        "<strong>Core Preferences:</strong> Direct feedback over diplomatic suggestions, effort vs impact evaluation, outcomes over outputs, 0-1 work environments, speed over perfection, process-driven approach, and high agency environments where I can act on judgment rather than wait for permission.",
        "I can overthink and seek too much control. I'm actively working on balancing analysis with action, and embracing uncertainty as part of the creative process."
      ]
    },
    {
      title: "Work Philosophy",
      content: [
        "Work operates at three distinct levels: Goals Level (defining what should exist), Problems Level (identifying what needs solving), and Solutions Level (executing predefined approaches). Complexity correlates with value created and inversely with time to create that value. The level you operate at should align with recognition and growth you receive—misalignment here leads to frustration and undervaluation.",
        "<strong>Operating Principles:</strong> Work in public and share ideas openly. Fight stagnation actively—when growth stops, plan your next move. Stay detached from outcomes while maintaining quality standards. Take recognition explicitly rather than waiting for it. I've learned that intrinsic motivation alone doesn't guarantee advancement.",
        "I evaluate opportunities across four dimensions: Growth, Learning, Impact, and Finance. Time is limited, so the work should be worth the energy invested."
      ]
    },
    {
      title: "Building Philosophy", 
      content: [
        "Building is where philosophy meets reality. Every product decision reflects beliefs about human nature, value creation, and how change happens in the world.",
        "<strong>Core Beliefs:</strong> Taste + Agency (aesthetic judgment with courage to act), User Wisdom vs User Voice (understanding what people need vs what they say), Conviction-Driven Development, and Systems Integration (design for how users integrate products into existing mental, social, and technical systems).",
        "Every product exists across Business Layer (value creation), Product Layer (user experience), and Engineering Layer (technical implementation). Great building happens at intersections where business insight, user understanding, and technical possibility converge.",
        "<strong>Current Focus:</strong> Products that change how people think, not just what they do. The constraint of making complex systems feel simple reveals the most interesting design challenges."
      ]
    },
    {
      title: "Growth Philosophy",
      content: [
        "Growth is a search for joy and understanding through deliberate challenge. It happens when we surface our limitations and generate energy to overcome them.",
        "I regularly ask: 'What am I actively seeking right now?' If there's no clear answer, I know I'm in danger of stagnation. Higher demand creates higher energy supply.",
        "Without the search we stagnate—entropy accelerates when you stop actively pursuing growth across the three axes of being, doing, and knowing."
      ]
    },
    { 
      title: "",
      content: [
        "<em>This philosophy has evolved through both success and failure. It reflects where I am now, not where I'll always be.</em>"
      ]
    }
  ],
  getHTML() {
    return this.sections.map(section => `
      <div class="section">
        <h2 class="section-title">${section.title}</h2>
        ${section.content.map(paragraph => `
          <p class="intro-paragraph">
            ${paragraph}
          </p>
        `).join('')}
      </div>
    `).join('');
  }
};