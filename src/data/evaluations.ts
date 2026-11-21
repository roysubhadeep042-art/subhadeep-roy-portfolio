import type { PromptCoTExample, HallucinationCase, MultiModelComparison } from '../types';

export const PROMPT_COT_EXAMPLES: PromptCoTExample[] = [
  {
    title: 'NCF-FS Panchaadi Lesson Plan Architect',
    task: 'Generate a structured 40-minute foundational mathematics lesson plan on "Grouping in 10s" adhering strictly to the NCF-FS Panchaadi pedagogical sequence for Grade 2 learners.',
    systemPrompt: `You are an expert curriculum developer and instructional designer specializing in India's National Curriculum Framework for Foundational Stage (NCF-FS).
Strict Constraints:
1. You MUST structure the response into the 5 Panchaadi stages: Adhiti (Introduction), Bodh (Conceptual Understanding), Abhyas (Practice), Prayog (Application), and Prasar (Expansion).
2. Use concrete local realia (e.g., tamarind seeds, sticks, pebbles) suitable for resource-constrained classrooms in rural Assam.
3. Every step must have an explicit time allocation (totaling exactly 40 minutes).
4. Output must adhere to clean structured markdown without generic preambles.`,
    userPrompt: `Grade: Class 2
Subject: Foundational Numeracy
Topic: Bundling into Tens and Ones (Numbers 10-30)
Pedagogical Model: Panchaadi
Classroom Context: Multilingual primary classroom with locally available materials`,
    chainOfThought: [
      'Deconstruct constraints: 40-minute total; 5 distinct Panchaadi stages; Grade 2 cognitive level; low-cost rural realia.',
      'Timing breakdown: Adhiti (5 min) -> Bodh (10 min) -> Abhyas (12 min) -> Prayog (8 min) -> Prasar (5 min) = 40 minutes exactly.',
      'Material selection: Reject plastic manipulatives; select bamboo counting sticks or dried neem/tamarind twigs tied with jute string.',
      'Language scaffolding: Include instructions in simple bilingual phrasing (Assamese/English keywords: "দশটাৰ বাণ্ডল" / "Bundle of 10").',
      'Assessment check: Embed an observation checklist in the Prayog stage so the teacher can spot place-value confusion immediately.',
    ],
    output: `### Foundational Numeracy Lesson: Bundling Tens & Ones
**Total Duration:** 40 Minutes | **Class:** Grade 2 | **Pedagogy:** NCF-FS Panchaadi

#### 1. Adhiti (Introduction & Curiosity) — 5 Mins
- **Teacher Action:** Place a heap of 23 loose bamboo sticks on the central mat. Ask: *"Who can count these before the bell rings without losing track?"*
- **Learner Engagement:** Children try counting one by one, discovering that counting high single numbers is slow and prone to errors.

#### 2. Bodh (Conceptual Grasp) — 10 Mins
- **Demonstration:** Show how tying 10 sticks with a jute thread makes "One Ten" (*Ek Dosh*).
- **Core Concept:** Group 20 sticks into 2 neat bundles. Show 3 loose sticks remain.
- **Language Bridge:** *"2 Tens and 3 Ones make Twenty-Three"* (দহৰ দুটা বাণ্ডল আৰু তিনিটা বাকি = ২৩).

#### 3. Abhyas (Guided & Peer Practice) — 12 Mins
- **Small-Group Work:** Provide pairs of children with tamarind seeds and string loops.
- **Task:** Form bundles of 10 for target cards: 14 (1 ten, 4 ones), 28 (2 tens, 8 ones).
- **Teacher Check:** Circulate to verify that bundles contain strictly 10 units.

#### 4. Prayog (Real-World Application) — 8 Mins
- **Market Simulation:** One student acts as the bamboo vendor selling bundles of 10 twigs; another student acts as the buyer requiring 26 twigs to fix a fence.
- **Formative Check:** Verify if the buyer asks for 2 bundles + 6 loose twigs directly.

#### 5. Prasar (Expansion & Reflection) — 5 Mins
- **Home Connect:** Ask children to count 15 beans or leaves at home with their parents and explain how many "Tens" and "Ones" they found.`,
    guardrails: [
      'Zero hallucinations regarding school resources; only locally accessible realia specified.',
      'Strict sum validation ensuring total duration equals 40 minutes.',
      'Alignment with NEP 2020 Foundational Literacy and Numeracy (FLN) competencies.',
    ],
  },
  {
    title: 'Multi-Modal Reasoning & Edge-Case Guardrailing',
    task: 'Formulate an AI agent prompt that validates and normalizes student attendance and diagnostic score logs from multi-dialect regional records without leaking student identities.',
    systemPrompt: `You are an automated diagnostic data pipeline agent.
Strict Security & Privacy Directives:
1. Strip all PII (names, phone numbers, exact village addresses, father/mother names).
2. Replace identifiers with salted pseudo-anonymized hashes (e.g. [STU-HASH-xxx]).
3. Validate numeric diagnostic scores against expected ranges (0-100); flag out-of-bounds anomalies.
4. Output strict JSON with deterministic validation schema.`,
    userPrompt: `Input Log: "Student Rahul Bora, Son of M. Bora, Phone 98640xxxxx, Village Sonai Silchar, Scored 108/100 in Math test due to extra credit, and 45/100 in English."`,
    chainOfThought: [
      'Analyze PII entities: "Rahul Bora" (Name), "M. Bora" (Guardian), "98640xxxxx" (Contact), "Sonai Silchar" (Geo PII).',
      'Execute Redaction: Mask or compute deterministic hash STU-642.',
      'Examine test scores: Math is 108/100 (exceeds 100 limit; flag boundary breach), English is 45/100 (valid range).',
      'Synthesize structured output JSON with audit metadata.',
    ],
    output: `{
  "anonymized_id": "STU-8F32",
  "pii_redacted": true,
  "redacted_fields": ["student_name", "guardian_name", "contact_number", "address"],
  "scores": {
    "math": {
      "raw": 108,
      "max": 100,
      "status": "ANOMALY_DETECTED",
      "flag": "Score exceeds 100% threshold. Requires teacher manual override for extra credit."
    },
    "english": {
      "raw": 45,
      "max": 100,
      "status": "VALID",
      "grade_band": "Developing"
    }
  },
  "audit_timestamp": "2026-11-21T15:54:00Z"
}`,
    guardrails: [
      'Zero PII leakage in the downstream telemetry payload.',
      'Anomaly isolation prevents invalid metrics from corrupting cohort analytics.',
    ],
  },
];

export const HALLUCINATION_CASES: HallucinationCase[] = [
  {
    title: 'Kaziranga National Park Conservation Boundary & Species Audit',
    domain: 'Assam Geography & Wildlife Ecology',
    rawOutput: `Kaziranga National Park was declared a UNESCO World Heritage site in 1995. It is located entirely in the Kamrup Metropolitan district of Assam and is home to the world's largest population of the Asian Lion and the Two-Horned Rhinoceros. The Brahmaputra river flows along its southern boundary.`,
    hallucinations: [
      {
        flaggedText: 'declared a UNESCO World Heritage site in 1995',
        issue: 'Inaccurate historical declaration year.',
        severity: 'critical',
        groundTruth: 'Kaziranga was inscribed as a UNESCO World Heritage Site in 1985 (not 1995).',
        sourceVerification: 'UNESCO World Heritage Convention Official Inscription Record (Ref: 337).',
      },
      {
        flaggedText: 'located entirely in the Kamrup Metropolitan district',
        issue: 'Severe geographical location hallucination.',
        severity: 'critical',
        groundTruth: 'Kaziranga spans the Golaghat, Nagaon, and Sonitpur/Biswanath districts, roughly 200 km east of Kamrup Metropolitan.',
        sourceVerification: 'Government of Assam Forest Department Gazette & Survey of India.',
      },
      {
        flaggedText: 'Asian Lion and the Two-Horned Rhinoceros',
        issue: 'Zoological impossibility and species confusion.',
        severity: 'critical',
        groundTruth: 'Kaziranga is famous for the Great Indian One-Horned Rhinoceros (Rhinoceros unicornis). Asian Lions exist exclusively in Gir Forest, Gujarat.',
        sourceVerification: 'IUCN Red List of Threatened Species & Wildlife Institute of India.',
      },
      {
        flaggedText: 'Brahmaputra river flows along its southern boundary',
        issue: 'Directional spatial error.',
        severity: 'moderate',
        groundTruth: 'The Brahmaputra river demarcates the northern and eastern boundaries; the southern boundary is skirted by the Karbi Anglong hills and National Highway 715.',
        sourceVerification: 'Kaziranga National Park Master Plan & Survey of India Topographical Maps.',
      },
    ],
    correctedOutput: `Kaziranga National Park, inscribed as a UNESCO World Heritage Site in 1985, is situated across the Golaghat, Nagaon, and Sonitpur districts of Assam. It hosts two-thirds of the world's Great Indian One-Horned Rhinoceroses (Rhinoceros unicornis) alongside significant populations of the Royal Bengal Tiger and Asian Elephant. Geographically, the Brahmaputra River runs along its northern periphery, while the Karbi Anglong Hills frame its southern expanse.`,
    preventionRubric: 'Enforce canonical regional entity checklists and multi-turn entity cross-validation against verified gazetteers before rendering educational content.',
  },
  {
    title: 'Barak Valley Colonial Tea History & Railway Infrastructure',
    domain: 'Assam Regional History & Infrastructure',
    rawOutput: `The Assam Bengal Railway connected Silchar directly to Kolkata via Guwahati in 1860, immediately after the first commercial tea garden in Cachar was planted by Lord Curzon in 1899.`,
    hallucinations: [
      {
        flaggedText: 'connected Silchar directly to Kolkata via Guwahati in 1860',
        issue: 'Chronological timeline hallucination by nearly 40 years.',
        severity: 'critical',
        groundTruth: 'The meter-gauge railway line to Silchar was surveyed in the 1890s and operationalized in 1899 under the Assam Bengal Railway company, traversing the Lumding-Badarpur hill section.',
        sourceVerification: 'Imperial Gazetteer of India, Railways Section (Vol IV) & Northeast Frontier Railway archives.',
      },
      {
        flaggedText: 'first commercial tea garden in Cachar was planted by Lord Curzon in 1899',
        issue: 'Historical personality anachronism and incorrect origin date.',
        severity: 'critical',
        groundTruth: 'The first tea plantation in Cachar was established in 1855 at Barsangam. Lord Curzon was Viceroy from 1899-1905 and had no role in founding Cachar tea estates.',
        sourceVerification: 'Tea Board of India Historical Monographs & Cachar District Gazetteers (B.C. Allen, 1905).',
      },
    ],
    correctedOutput: `The first commercial tea plantation in the Cachar district of Assam was initiated around 1855 at Barsangam. Infrastructure followed decades later to transport produce, culminating in the historic Assam Bengal Railway hill section linking Badarpur and Silchar to Chittagong port and Kolkata towards the late 1890s.`,
    preventionRubric: 'Zero-tolerance historical entity linking; verify dates against gazetteer timeline tables prior to content generation.',
  },
];

export const MULTI_MODEL_COMPARISONS: MultiModelComparison[] = [
  {
    title: 'Evaluation of Primary Science Explanation: "Why Do Leaves Change Color?"',
    prompt: 'Explain to a 9-year-old child in rural Assam why tree leaves turn yellow and fall before the dry season. Include a simple classroom demonstration using readily available items.',
    modelA: {
      name: 'Model A (Baseline LLM)',
      response: `Leaves have chlorophyll, which absorbs blue and red wavelengths of electromagnetic radiation while reflecting green wavelengths. In winter, photoperiodism reduces auxin production in the abscission zone, triggering senescence. Carotenoids and anthocyanins become unmasked.
For a demonstration, place a chromatography paper into an acetone solvent in a laboratory beaker and extract the pigments using capillary action.`,
      scores: {
        factuality: 4.8,
        instructionFollowing: 2.0,
        reasoningDepth: 4.5,
        safetyTone: 3.5,
        formatting: 2.5,
      },
      critique: 'Technically factual but completely violates target audience comprehension (9-year-old child) and practical constraints (acetone, chromatography paper, and beakers in a rural village primary school). Heavy cognitive overload.',
    },
    modelB: {
      name: 'Model B (Pedagogy & RLHF Aligned)',
      response: `Imagine the green leaf is a tiny kitchen where a green chef named **Chlorophyll** cooks food for the tree using sunlight and water!

When the cool, dry winter comes:
1. **The Tree Takes a Rest:** There is less water in the soil, so the tree tells the leaf kitchen to slow down and sleep.
2. **The Hidden Colors Wake Up:** As the green color fades away, other colors that were hiding underneath—warm yellow and orange—finally peek out!
3. **Saving Energy:** The tree lets the old leaves gently drop to the ground like a blanket to keep its roots cozy until springtime rains return.

**Simple 5-Minute Classroom Activity (No Lab Required):**
- **What You Need:** 1 fresh green mango leaf, 1 dry yellow leaf fallen from the schoolyard, and a bowl of clear water.
- **What to Do:** Have children touch both leaves. Feel how the green one is soft and full of moisture, while the yellow one is crisp and dry. Crush a tiny corner of the green leaf against white slate chalk—see the green mark! The yellow leaf leaves almost no green mark, showing the tree saved its energy inside its trunk.`,
      scores: {
        factuality: 4.9,
        instructionFollowing: 5.0,
        reasoningDepth: 4.8,
        safetyTone: 5.0,
        formatting: 4.9,
      },
      critique: 'Superb pedagogical alignment. Metaphor (tiny kitchen) matches 9-year-old developmental psychology. The demonstration requires zero hazardous chemicals and utilizes readily available schoolyard leaves and classroom chalk.',
    },
    winner: 'Model B',
    rlhfAnnotation: 'Model B achieved +3.0 delta in instruction following and +1.5 in pedagogical safety. Model A exhibited classic academic bias and ignored audience context.',
  },
  {
    title: 'Prompt Evaluation: Automated Hallucination Guardrail in RAG Summary',
    prompt: 'Synthesize the key points from this document snippet about Solar PV inverter maintenance. If any metric is not mentioned in the source, you MUST state "Not provided in source" rather than estimating.',
    modelA: {
      name: 'Model A (Unconstrained Generation)',
      response: `Key Points:
- Inspect DC wiring for degradation annually.
- Clean inverter cooling fins every 3 months.
- The average efficiency rating is 98.4% and maximum voltage is 1000V DC.
- Replace thermal paste every 5 years to prevent inverter shutdown.`,
      scores: {
        factuality: 2.2,
        instructionFollowing: 1.5,
        reasoningDepth: 3.0,
        safetyTone: 3.0,
        formatting: 4.0,
      },
      critique: 'Severe hallucination: Fabricated efficiency figures (98.4%) and voltage specs (1000V) not present in the reference context, violating the negative constraint.',
    },
    modelB: {
      name: 'Model B (Strict Grounding & Constraint Adherence)',
      response: `Verified Maintenance Directives from Source:
1. **DC Wiring Inspection:** Mandatory annual check for insulation wear and terminal tightness.
2. **Cooling Fins:** Clean dust and debris every quarter (3 months).

**Unspecified Metrics (Per Guardrail Directive):**
- Inverter Efficiency Rating: *Not provided in source.*
- Voltage & Current Limits: *Not provided in source.*
- Thermal Paste Replacement Cadence: *Not provided in source.*`,
      scores: {
        factuality: 5.0,
        instructionFollowing: 5.0,
        reasoningDepth: 4.7,
        safetyTone: 5.0,
        formatting: 5.0,
      },
      critique: 'Flawless adherence to negative constraints. Explicitly separates grounded claims from missing metrics, preventing costly field maintenance mistakes.',
    },
    winner: 'Model B',
    rlhfAnnotation: 'Model B demonstrates production-ready RAG discipline. Critical win for safety-critical technical documentation.',
  },
];
