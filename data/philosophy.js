// Philosophy Section Data
window.philosophyData = {
  sections: [
    {
      title: "Life Framework",
      content: [
        "I organize life around a simple agenda: Be healthy, build wealth, maintain relationships, do interesting work, and pursue deeper understanding.",
        "This isn't about choosing money over meaning—it's about creating conditions where you can pursue meaning without survival anxiety. Financial security enables exploration, and exploration leads to growth.",
        "<strong>The Practice:</strong> Physical health through movement and recovery. Mental clarity through reduced noise and increased observation. Spiritual depth through consistent practice and study. Purposeful action through building and shipping work that matters.",
        "The goal is moksha through understanding the nature of reality, while living fully and joyfully in the world."
      ]
    },
    {
      title: "Core Values",
      content: [
        "The values that guide my decisions, often subconsciously, or deliberately when clarity is needed:",
        "<strong>Agency & Action:</strong> Responsibility, Agency, Decisiveness, Control, Assertiveness",
        "<strong>Truth & Clarity:</strong> Authenticity, Honesty, Truth, Wisdom, Knowledge, Realism", 
        "<strong>Creating & Building:</strong> Creation, Simplicity, Beauty, Growth, Mastery",
        "<strong>Inner Work:</strong> Balance, Calm, Acceptance, Health, Spirituality, Silence",
        "<strong>Living Well:</strong> Freedom, Joy, Intensity, Wealth, Fairness, Trust, Security, Purpose"
      ]
    },
    {
      title: "Growth Philosophy",
      content: [
        "Life grows through challenges. Challenges surface limitations and generate the energy needed to overcome them. This creates a cycle: seek challenge, surface limitation, generate energy, grow, repeat.",
        "The search itself matters. Without actively seeking growth, stagnation accelerates. Energy operates on supply and demand—higher demand creates higher supply.",
        "<strong>The Practice:</strong> Seek real feedback that reveals blind spots. Increase surface area of luck through action. Exercise radical agency—act on your judgment rather than wait for permission.",
        "Growth isn't comfortable, but the alternative—slow decay through comfort—is worse. The question I ask regularly: What am I actively seeking right now?"
      ]
    },
    {
      title: "Work Philosophy",
      content: [
        "Purposeful work unites intellect, craft, and connection. It's where ideas meet reality and abstraction becomes tangible.",
        "<strong>Focus on Craft:</strong> Build things that are elegant, useful, and enduring. Let clarity and quality guide creation, not trends or noise.",
        "<strong>Collaboration Matters:</strong> Work with interesting, capable people who challenge your perspective. Seek resonance in values and curiosity, not just complementary skills.",
        "<strong>Action Over Abstraction:</strong> Translate insight into tangible form. Engage directly with the world through prototypes, conversations, data, and lived experience. Ship work, get feedback, iterate.",
        "<strong>Impact as Measure:</strong> Choose projects that deepen understanding or solve real problems. Measure progress by contribution and coherence, not busyness or activity.",
        "Maintain rhythm. Balance intensity with renewal. Protect time for solitude, learning, and deep work. Consume less, create more. Momentum generates energy and energy enables progress."
      ]
    },
    {
      title: "Operating Principles",
      content: [
        "These principles shape how I approach decisions, challenges, and daily life:",
        "<strong>Self-Reliance:</strong> Look within for answers. Nobody cares more about your work than you do. Don't seek external validation or wait for rescue—face reality and work with what is.",
        "<strong>Letting Go:</strong> Embrace uncertainty. Reduce expectations. Don't get attached to specific outcomes—attachment creates suffering. Focus on process and let results emerge.",
        "<strong>Authenticity & Truth:</strong> Be direct and honest in communication. Stick to truth even when inconvenient. Be yourself rather than performing a role.",
        "<strong>Conscious Living:</strong> Observe your own mind constantly. Most suffering is psychological, created by unconscious thought patterns rather than actual circumstances. Stop overthinking, start doing. Stop living in your head.",
        "<strong>Balance:</strong> Life requires managing competing demands. Track what matters. Build wealth consciously. Maintain health proactively. Nurture relationships intentionally. None of these areas can be neglected indefinitely without cost."
      ]
    },
    {
      title: "On Suffering & Peace",
      content: [
        "Unhappiness and suffering are primarily psychological rather than circumstantial. The unconscious thought process—the constant mental chatter—creates suffering, not the actual situation.",
        "The practice is to observe this process constantly. Notice when you're lost in thought, rumination, or stories about how things should be. Return to what is.",
        "Peace comes from acceptance, not control. Stop trying to be perfect. Stop trying to fix people or situations. Reduce the need for everything to have meaning or purpose. Sometimes things just are.",
        "This doesn't mean passive acceptance of everything—it means choosing your battles consciously and not creating internal suffering through resistance to reality."
      ]
    },
    { 
      title: "",
      content: [
        "<em>This philosophy evolves through lived experience. It reflects current understanding, not fixed truth. I share it publicly as a stake in the ground—a way to clarify my own thinking and perhaps resonate with others on similar paths.</em>"
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