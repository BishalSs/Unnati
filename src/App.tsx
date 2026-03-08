import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  BookOpen, 
  Palette, 
  GraduationCap, 
  Sparkles, 
  Users, 
  Target, 
  CheckCircle2,
  MapPin,
  Mail,
  ChevronRight,
  Flower2,
  ArrowRight
} from 'lucide-react';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-saffron-200 selection:text-saffron-700">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream/80 backdrop-blur-md z-50 border-b border-saffron-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Flower2 className="w-6 h-6 text-saffron-500" />
              <span className="font-serif font-semibold text-xl tracking-wide text-ink">UNNATI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#vision" className="text-sm font-medium text-ink/70 hover:text-saffron-600 transition-colors">Vision & Mission</a>
              <a href="#pillars" className="text-sm font-medium text-ink/70 hover:text-saffron-600 transition-colors">Pillars</a>
              <a href="#membership" className="text-sm font-medium text-ink/70 hover:text-saffron-600 transition-colors">Membership</a>
              <a href="#verticals" className="text-sm font-medium text-ink/70 hover:text-saffron-600 transition-colors">Verticals</a>
            </div>
            <a href="#join" className="bg-saffron-500 hover:bg-saffron-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md">
              Join Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-saffron-50),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-softpink),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/60 border border-saffron-200 text-saffron-700 text-sm font-medium tracking-wide"
          >
            Jaya Srila Prabhupada
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-ink mb-6"
          >
            <span className="text-saffron-500">🌸 UNNATI</span><br />
            Progress with Purpose
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-ink/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A Spiritual Growth & Leadership Collective for Young Women Under ISKCON Youth Services, Chennai
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#join" className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-ink/90 transition-all shadow-lg hover:shadow-xl">
              Join the Movement <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <div className="bg-saffron-50 rounded-3xl p-10 h-full border border-saffron-100">
                <div className="w-12 h-12 bg-saffron-100 rounded-2xl flex items-center justify-center mb-6 text-saffron-600">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-ink mb-6">🎯 Vision</h2>
                <p className="text-ink/80 leading-relaxed mb-6">
                  To cultivate a dynamic community of spiritually rooted, emotionally strong, and purpose-driven young women who rise together — integrating devotion, self-mastery, leadership, and meaningful contribution for value-driven holistic growth.
                </p>
                <p className="text-ink/80 leading-relaxed font-medium">
                  Unnati is not just a youth club. It is a movement of conscious growth, a leadership incubator, and a living sisterhood that empowers women to flourish spiritually, personally, and socially.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-softpink rounded-3xl p-10 h-full border border-pink-100">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 text-pink-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-ink mb-6">🎯 Mission</h2>
                <ul className="space-y-4">
                  {[
                    "To create a safe and empowering sisterhood that nurtures emotional resilience and mutual growth.",
                    "To provide spiritual depth and self-mastery through guided study and daily discipline.",
                    "To cultivate leadership, character, and creative contribution.",
                    "To prepare young women to live and serve confidently in their personal lives, society, and temple."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-ink/80 leading-relaxed">
                      <span className="text-pink-500 mt-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5 Pillars Overview */}
      <section id="pillars" className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">🌟 Our 5 Pillars</h2>
              <div className="w-24 h-1 bg-saffron-400 mx-auto rounded-full"></div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "1️⃣", title: "Sakhi Circles", desc: "Weekly small-group mentorship spaces for emotional growth, spiritual reflection, and value-based discussions.", icon: Heart },
              { num: "2️⃣", title: "Study Pod", desc: "Weekday online reading circle studying Śrīla Prabhupāda’s books — building discipline, clarity, and spiritual depth.", icon: BookOpen },
              { num: "3️⃣", title: "Creative Bhakti Lab", desc: "Skill-based service streams including digital media, devotional arts, event leadership, and structured social impact initiatives.", icon: Palette },
              { num: "4️⃣", title: "Monthly Youth Masterclass", subtitle: "(Transformational Growth Workshop)", desc: "Professional masterclasses addressing real-life youth challenges with spiritual grounding — open to all (subsidized for members).", icon: GraduationCap },
              { num: "5️⃣", title: "Inner Beauty Retreat", desc: "Quarterly immersive retreat for reflection, identity alignment, and deeper sisterhood bonding.", icon: Sparkles }
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full border border-saffron-50">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl">{pillar.num}</span>
                    <h3 className="text-xl font-serif font-bold text-ink">{pillar.title}</h3>
                  </div>
                  {pillar.subtitle && <p className="text-sm font-medium text-saffron-600 mb-3">{pillar.subtitle}</p>}
                  <p className="text-ink/70 leading-relaxed">{pillar.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-24 bg-white border-y border-saffron-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <FadeIn>
                <h2 className="text-4xl font-serif font-bold text-ink mb-10">Membership</h2>
                
                <div className="mb-10">
                  <h3 className="text-2xl font-serif font-semibold text-ink mb-4 flex items-center gap-2">
                    👩‍🎓 Who Can Join?
                  </h3>
                  <p className="text-ink/80 text-lg">Girls aged 15–28 Spiritually inclined and committed to growth.</p>
                </div>

                <div className="mb-10 bg-saffron-50 p-6 rounded-2xl border border-saffron-100">
                  <h3 className="text-2xl font-serif font-semibold text-ink mb-2 flex items-center gap-2">
                    💎 Membership Contribution
                  </h3>
                  <p className="text-3xl font-bold text-saffron-600 mb-2">Annual Membership: ₹501</p>
                  <p className="text-ink/70 italic">(A conscious commitment toward your growth journey.)</p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold text-ink mb-6 flex items-center gap-2">
                    🎁 Membership Benefits
                  </h3>
                  <p className="text-ink/80 mb-4 font-medium">Each registered member receives:</p>
                  <ul className="space-y-3">
                    {[
                      "Official Membership Card",
                      "Special Archana on two chosen dates annually",
                      "Subsidized access to Transformational Growth Workshop",
                      "Structured social contribution opportunities",
                      "Eligibility for leadership roles",
                      "Participation certificates",
                      "Recommendation letters (based on contribution)",
                      "Newsletter / social media feature opportunities"
                    ].map((benefit, i) => (
                      <li key={i} className="flex gap-3 items-start text-ink/80">
                        <CheckCircle2 className="w-5 h-5 text-saffron-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <div className="bg-ink text-white rounded-3xl p-10 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-saffron-300">💛 Unnati is…</h3>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <ul className="space-y-3 text-white/80">
                        <li className="flex items-center gap-2"><span className="text-red-400">✕</span> Not compulsory-heavy.</li>
                        <li className="flex items-center gap-2"><span className="text-red-400">✕</span> Not attendance-policed.</li>
                        <li className="flex items-center gap-2"><span className="text-red-400">✕</span> Not emotionally overwhelming</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-saffron-200 mb-3">But it is:</p>
                      <ul className="space-y-3 text-white/90 font-medium">
                        <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Committed.</li>
                        <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Disciplined.</li>
                        <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Growth-oriented</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-softpink rounded-3xl p-10 border border-pink-100">
                  <h3 className="text-2xl font-serif font-bold text-ink mb-6">Unnati is:</h3>
                  <ul className="space-y-4">
                    {[
                      "A sisterhood.",
                      "A growth platform.",
                      "A leadership incubator.",
                      "A spiritual ecosystem.",
                      "A place where ambition and devotion coexist."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-ink/80 text-lg font-medium">
                        <span className="text-pink-500 text-xl">❖</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-ink mb-4">DETAILS</h2>
              <h3 className="text-4xl font-serif font-bold text-saffron-600">Governance Structure</h3>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-saffron-100 mb-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-bold text-ink mb-2">Vision Head</h4>
                  <p className="text-2xl font-serif text-saffron-600 mb-6">Sukirti Madhavi DD</p>
                  <p className="font-semibold text-ink mb-3">Role:</p>
                  <ul className="space-y-2 text-ink/80">
                    <li>● Vision & direction</li>
                    <li>● Monthly Workshop leadership</li>
                    <li>● Quality oversight</li>
                    <li>● Problem solving & mentoring of team leads</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ink mb-4">Core Team (4–5 Trained Coordinators)</h4>
                  <p className="text-ink/80 mb-6">Each vertical will have a designated Lead + 1 assistant.</p>
                  <div className="bg-saffron-50 p-4 rounded-xl border border-saffron-200">
                    <p className="font-medium text-saffron-800">
                      <span className="font-bold">Remember:</span> Unnati must run systemically — not personality-based.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Verticals Detailed */}
      <section id="verticals" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-ink mb-4">Core Verticals of Unnati</h2>
              <p className="text-xl text-ink/70">Unnati operates through 5 vertical pillars:</p>
              <div className="w-24 h-1 bg-saffron-400 mx-auto rounded-full mt-8"></div>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {/* Vertical 1 */}
            <FadeIn>
              <div className="bg-cream rounded-3xl p-8 md:p-12 border border-saffron-100">
                <div className="inline-block bg-saffron-100 text-saffron-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">Vertical 1</div>
                <h3 className="text-3xl font-serif font-bold text-ink mb-8">Sakhi Circles <span className="text-xl font-normal text-ink/60 block mt-2">(Mentorship & Emotional Growth)</span></h3>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-lg font-bold text-ink mb-3">Purpose</h4>
                    <p className="text-ink/80 mb-8">To create a safe, value-based space for emotional sharing, spiritual reflection, and personal growth.</p>
                    
                    <h4 className="text-lg font-bold text-ink mb-3">Structure</h4>
                    <ul className="space-y-2 text-ink/80 mb-8">
                      <li>● Small groups (8–10 members)</li>
                      <li>● Fixed mentor (Lead)</li>
                      <li>● Hybrid format (physical + online option)</li>
                      <li>● Closed & confidential environment</li>
                    </ul>

                    <h4 className="text-lg font-bold text-ink mb-3">Frequency</h4>
                    <p className="text-ink/80 mb-8">Weekly (60 minutes)</p>

                    <h4 className="text-lg font-bold text-ink mb-3">Format</h4>
                    <ul className="space-y-3 text-ink/80">
                      <li><span className="font-semibold text-ink">10 min</span> – Icebreaker / Check-in question (Emotion-based or reflection-based)</li>
                      <li>
                        <span className="font-semibold text-ink">20 min</span> – Guided theme discussion
                        <ul className="ml-6 mt-2 space-y-1 text-sm">
                          <li>● Theme anchored in a relevant Bhagavad-gita verse</li>
                          <li>● Short contextual explanation</li>
                          <li>● 2–3 reflection prompts</li>
                        </ul>
                      </li>
                      <li><span className="font-semibold text-ink">20 min</span> – Sharing & discussion</li>
                      <li><span className="font-semibold text-ink">10 min</span> – Takeaway + Personal Action Point (One small commitment for the week)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-ink mb-3">Themes (Flexible & Feedback-Based)</h4>
                    <p className="text-ink/80 mb-4 text-sm">Themes may be pre-planned monthly but adapted based on group feedback.</p>
                    <p className="font-semibold text-ink mb-2">Possible themes:</p>
                    <ul className="space-y-1 text-ink/80 mb-8 text-sm">
                      <li>● Emotional boundaries</li>
                      <li>● Family expectations & pressure</li>
                      <li>● Marriage & discernment</li>
                      <li>● Handling comparison & social media</li>
                      <li>● Spiritual consistency amidst busy life</li>
                      <li>● Identity & self-worth</li>
                      <li>● Self-discipline & mind management</li>
                      <li>● Dealing with setbacks</li>
                    </ul>

                    <h4 className="text-lg font-bold text-ink mb-3">Vertical Lead Responsibility</h4>
                    <ul className="space-y-2 text-ink/80 mb-8 text-sm">
                      <li>● Maintain attendance sheet</li>
                      <li>● Maintain simple growth observations and engagement notes</li>
                      <li>● Prepare monthly theme plan</li>
                      <li>● Connect personally once a week (short message/check-in)</li>
                      <li>● Note significant life events and follow up appropriately</li>
                      <li>● Escalate major concerns to senior leadership (without breaching confidentiality)</li>
                    </ul>

                    <div className="bg-white p-6 rounded-2xl border border-red-100">
                      <h4 className="text-lg font-bold text-red-600 mb-4">REMEMBER</h4>
                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-bold text-ink mb-1">● Mentors are Guides, Not Counselors</p>
                          <p className="text-ink/80">Mentors support. They do not replace professional therapy. They do not give legal/marriage advice. They do not interfere in family matters.</p>
                        </div>
                        <div>
                          <p className="font-bold text-ink mb-1">● Emotional Safety Protocol</p>
                          <p className="text-ink/80">Confidentiality must be respected. However, in cases involving safety, abuse, or serious emotional distress, the matter must be escalated to senior leadership with discretion.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Vertical 2 */}
            <FadeIn>
              <div className="bg-cream rounded-3xl p-8 md:p-12 border border-saffron-100">
                <div className="inline-block bg-saffron-100 text-saffron-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">Vertical 2</div>
                <h3 className="text-3xl font-serif font-bold text-ink mb-8">Study Pod <span className="text-xl font-normal text-ink/60 block mt-2">(Daily Śrīla Prabhupāda Reading Circle)</span></h3>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-lg font-bold text-ink mb-3">Purpose</h4>
                    <p className="text-ink/80 mb-8">To cultivate spiritual depth, discipline, and philosophical clarity through systematic reading of Śrīla Prabhupāda’s books.</p>
                    
                    <h4 className="text-lg font-bold text-ink mb-3">Structure</h4>
                    <ul className="space-y-2 text-ink/80 mb-8">
                      <li>● Common platform for all Unnati members (not divided by Sakhi Circles)</li>
                      <li>● Online format (Zoom / Google Meet)</li>
                      <li>● Monday to Friday</li>
                      <li>● 20 minutes per session</li>
                    </ul>

                    <h4 className="text-lg font-bold text-ink mb-3">Reading Plan</h4>
                    <ul className="space-y-2 text-ink/80 mb-8">
                      <li>● Systematic progression through short books of Śrīla Prabhupāda</li>
                      <li>● Sequential reading</li>
                    </ul>

                    <h4 className="text-lg font-bold text-ink mb-3">Session Format (20 Minutes)</h4>
                    <ul className="space-y-2 text-ink/80 mb-8">
                      <li>● Opening pranam mantra</li>
                      <li>● 19 min collective reading</li>
                      <li>● Assigning reflection question, which they can answer in the WA group</li>
                    </ul>
                  </div>

                  <div>
                    <div className="bg-white p-6 rounded-2xl border border-saffron-100 mb-8">
                      <h4 className="font-bold text-ink mb-3">If someone misses live session:</h4>
                      <ul className="space-y-2 text-ink/80 text-sm mb-4">
                        <li>● She completes assigned reading independently</li>
                        <li>● Posts “Completed ✔” in WhatsApp group by next day</li>
                      </ul>
                      <p className="font-medium text-saffron-600 italic">No pressure. No shaming. Habit culture only.</p>
                    </div>

                    <h4 className="text-lg font-bold text-ink mb-3">Leadership Model</h4>
                    <div className="space-y-4 text-sm mb-8">
                      <div>
                        <p className="font-semibold text-ink mb-1">Study Pod Coordinator:</p>
                        <ul className="space-y-1 text-ink/80">
                          <li>● Creates reading calendar</li>
                          <li>● Maintains schedule</li>
                          <li>● Tracks participation trends</li>
                          <li>● Reports monthly engagement</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-ink mb-1">Facilitators (Rotating Sakhi Leads):</p>
                        <ul className="space-y-1 text-ink/80">
                          <li>● Anchor session</li>
                          <li>● Maintain timing</li>
                          <li>● Ask reflection question</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-ink mb-3">Cultural Principle</h4>
                    <ul className="space-y-2 text-ink/80 text-sm">
                      <li>● This is not a class. It is not a lecture. It is not heavy philosophy breakdown.</li>
                      <li>● It is disciplined, collective reading.</li>
                      <li>● Depth happens through consistency.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Vertical 3 */}
            <FadeIn>
              <div className="bg-cream rounded-3xl p-8 md:p-12 border border-saffron-100">
                <div className="inline-block bg-saffron-100 text-saffron-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">Vertical 3</div>
                <h3 className="text-3xl font-serif font-bold text-ink mb-8">Creative Bhakti Lab <span className="text-xl font-normal text-ink/60 block mt-2">(Skill Development & Devotional Contribution Vertical)</span></h3>
                
                <div className="mb-10">
                  <h4 className="text-lg font-bold text-ink mb-3">Purpose</h4>
                  <p className="text-ink/80 mb-2">To transform members from passive participants into confident contributors by nurturing devotional creativity, leadership, and practical service skills.</p>
                  <p className="font-medium text-saffron-600">This vertical bridges talent and seva.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-10">
                  <div>
                    <h4 className="text-lg font-bold text-ink mb-3">Structure</h4>
                    <ul className="space-y-2 text-ink/80 mb-6">
                      <li>● Monthly in-person/online Lab meeting</li>
                      <li>● Ongoing project-based seva teams</li>
                      <li>● Skill-based grouping (not random volunteering)</li>
                      <li>● Output-oriented (every lab produces deliverables)</li>
                    </ul>
                    <p className="font-semibold text-ink"><span className="text-ink/70">Frequency:</span> Monthly meeting + ongoing seva</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ink mb-3">Onboarding Process</h4>
                    <p className="text-ink/80 mb-6">Members choose ONE primary stream based on strengths and commitment.</p>
                    <div className="bg-white p-5 rounded-xl border border-saffron-100">
                      <h4 className="font-bold text-ink mb-3">Governance Rule</h4>
                      <p className="text-sm text-ink/80 mb-2">Every stream must have:</p>
                      <ul className="space-y-1 text-sm text-ink/80">
                        <li>● 1 Stream Lead</li>
                        <li>● 1 Assistant</li>
                        <li>● Clear project cycle</li>
                        <li>● Measurable deliverables</li>
                        <li>● Quarterly review</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-ink mb-6">Streams:</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-saffron-50 shadow-sm">
                    <h5 className="font-bold text-saffron-600 mb-4">Digital and Media seva</h5>
                    <ul className="space-y-2 text-sm text-ink/80">
                      <li>Podcast production</li>
                      <li>Graphic design</li>
                      <li>Script writing</li>
                      <li>Content Creation</li>
                      <li>Social Media</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-saffron-50 shadow-sm">
                    <h5 className="font-bold text-saffron-600 mb-4">Devotional Art</h5>
                    <ul className="space-y-2 text-sm text-ink/80">
                      <li>Singing and music</li>
                      <li>Drama scripting</li>
                      <li>Painting</li>
                      <li>Cooking/Baking</li>
                      <li>Garland making</li>
                      <li>Cleaning</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-saffron-50 shadow-sm">
                    <h5 className="font-bold text-saffron-600 mb-4">Event & Community Engagement</h5>
                    <ul className="space-y-2 text-sm text-ink/80">
                      <li>Event coordination</li>
                      <li>Anchoring & event presentation</li>
                      <li>Calling Seva</li>
                      <li>Hospitality & hosting</li>
                      <li>Youth outreach support</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-saffron-50 shadow-sm">
                    <h5 className="font-bold text-saffron-600 mb-4">Stream 4: Voluntary & Social Impact Seva</h5>
                    <ul className="space-y-2 text-sm text-ink/80">
                      <li>Old age home visits</li>
                      <li>Orphanage visits</li>
                      <li>Value education sessions for school students</li>
                      <li>Environmental cleaning drives</li>
                      <li>Tree plantation drives</li>
                      <li>Food distribution initiatives</li>
                      <li>Hospital seva</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Vertical 4 */}
            <FadeIn>
              <div className="bg-cream rounded-3xl p-8 md:p-12 border border-saffron-100">
                <div className="inline-block bg-saffron-100 text-saffron-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">Vertical 4</div>
                <h3 className="text-3xl font-serif font-bold text-ink mb-8">Transformational Growth Workshop <span className="text-xl font-normal text-ink/60 block mt-2">- Masterclass Series (Monthly)</span></h3>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-lg font-bold text-ink mb-3">Purpose</h4>
                    <p className="text-ink/80 mb-4">To inspire and engage the wider youth community through high-quality, value-driven masterclasses that address real-life challenges while introducing them to spiritually grounded growth.</p>
                    <p className="font-semibold text-ink mb-2">This vertical serves as:</p>
                    <ul className="space-y-2 text-ink/80 mb-6">
                      <li>● A visibility platform</li>
                      <li>● A brand-building tool for ISKCON Youth Services</li>
                      <li>● A funnel for serious girls into Unnati and boys to their club</li>
                    </ul>
                    <p className="font-semibold text-ink"><span className="text-ink/70">Frequency:</span> Once a month</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-ink mb-3">Structure</h4>
                    <ul className="space-y-2 text-ink/80 mb-8">
                      <li>● Open to boys and girls</li>
                      <li>● Professional event format</li>
                      <li>● Paid entry (Suggestion ₹249–₹499)</li>
                      <li>● Subsidized for Unnati members</li>
                      <li>● Conducted once a month</li>
                    </ul>

                    <h4 className="text-lg font-bold text-ink mb-3">Experience Components</h4>
                    <p className="text-sm text-ink/80 mb-2">Each Workshop would include:</p>
                    <ul className="space-y-2 text-ink/80 mb-8 text-sm">
                      <li>● Professionally curated masterclass</li>
                      <li>● Fellowship lunch / Hi-tea (depending on time)</li>
                      <li>● Participation certificate</li>
                      <li>● Curated Śrīla Prabhupāda book aligned with the topic</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-white p-6 rounded-2xl border border-saffron-100 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h4 className="font-bold text-ink mb-2">Funnel Mechanism</h4>
                    <p className="text-sm text-ink/80 mb-2">At the end of each Workshop:</p>
                    <ul className="space-y-1 text-sm text-ink/80">
                      <li>● Collect feedback form</li>
                      <li>● Ask: “Would you like to be part of Unnati?”</li>
                      <li>● Segregate women data</li>
                      <li>● Follow up within 48 hours</li>
                    </ul>
                  </div>
                  <div className="bg-saffron-50 px-6 py-4 rounded-xl text-center">
                    <p className="text-sm text-ink/70">This vertical is overseen by</p>
                    <p className="font-bold text-saffron-700">Sukirti Madhavi DD.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Vertical 5 */}
            <FadeIn>
              <div className="bg-softpink rounded-3xl p-8 md:p-12 border border-pink-100 text-center max-w-3xl mx-auto">
                <div className="inline-block bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">Vertical 5</div>
                <h3 className="text-3xl font-serif font-bold text-ink mb-4">Inner Beauty Retreat</h3>
                <p className="font-semibold text-pink-600 mb-8">Frequency: Quarterly</p>
                
                <div className="grid sm:grid-cols-2 gap-8 text-left mb-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-ink mb-4">Format:</h4>
                    <ul className="space-y-2 text-ink/80">
                      <li>● Full-day immersive retreat</li>
                      <li>● Guided reflection</li>
                      <li>● Kirtan meditation</li>
                      <li>● Value realignment</li>
                      <li>● Sister bonding</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-center">
                    <h4 className="font-bold text-ink mb-2">Objective:</h4>
                    <p className="text-xl font-serif text-pink-600 leading-relaxed">
                      Depth + identity consolidation + retention.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="join" className="bg-ink text-white py-20 border-t-4 border-saffron-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Flower2 className="w-12 h-12 text-saffron-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Join the Movement.<br/>Rise Together.</h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5 text-saffron-400" />
                <span>Hosted at ISKCON Chennai</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20"></div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-5 h-5 text-saffron-400" />
                <span>Contact us to join</span>
              </div>
            </div>

            <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Become a Member Today
            </button>
            
            <p className="mt-16 text-white/40 text-sm">
              © {new Date().getFullYear()} UNNATI - Progress with Purpose. All rights reserved.
            </p>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
}
