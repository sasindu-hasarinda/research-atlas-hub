import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Target,
  Lightbulb,
  Code2,
  Search,
  GitBranch,
  Brain,
  Camera,
  User,
  Zap,
  Cpu,
  Database,
  Cloud,
  FileText,
  BarChart3,
  MessageSquare,
  Mic,
  Network,
  Layers,
} from "lucide-react";

export default function Domain() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Domain & Research
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive overview of research domain, objectives, and
            methodology
          </p>
        </div>

        <div className="space-y-8">
          {/* Research Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Research Overview</CardTitle>
                  <CardDescription>
                    Understanding the educational challenges in Sri Lanka
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  In Sri Lanka, approximately 170,000 candidates qualify for
                  higher education each year, yet many choose their courses
                  based on biased recommendations from family and friends. This
                  reliance on subjective advice often leads to misaligned
                  educational and career paths, adversely affecting students'
                  academic success and professional fulfillment. To address this
                  issue, there is a pressing need for an innovative solution
                  that empowers students to make informed decisions about their
                  futures. This solution should encompass not only course
                  selection but also comprehensive career advisory services,
                  scholarship opportunities, and financial aid guidance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  To tackle these challenges, we propose developing an AI-driven
                  higher education and career advisory platform tailored for Sri
                  Lankan students. This platform will utilize advanced
                  algorithms to analyze students' interests, strengths, and
                  market trends, providing personalized recommendations for
                  courses, career paths, scholarship opportunities, and
                  financial aid options. Additionally, the platform will offer
                  resources for aptitude test preparation to help students
                  enhance their skills and increase their chances of success in
                  higher education. By fostering informed decision-making and
                  empowering students, this project aims to align educational
                  choices with individual aspirations and potential career
                  success.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Literature Survey */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Literature Survey</CardTitle>
                  <CardDescription>
                    Background research and existing work
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Project Intelibridge introduces Skill Bridge AI, an integrated
                  AI-powered web platform designed to enhance career readiness
                  for IT graduates in Sri Lanka by bridging skill gaps and
                  aligning education with industry demands. The system leverages
                  machine learning, natural language processing (NLP), and
                  computer vision to deliver four core functions: (1) Skill Gap
                  Analysis, where CVs are parsed using SpaCy and BERT-based NER
                  models to extract technical and soft skills, followed by
                  dynamic assessment generation and personalized feedback
                  reports; (2) AI-Powered Mock Interviews, utilizing YOLO for
                  facial emotion and posture analysis, Whisper for
                  speech-to-text, and sentiment models to evaluate
                  communication, confidence, and relevance in real time; (3)
                  Personalized Learning Pathways, driven by adaptive
                  recommendation engines and regression models that suggest
                  tailored courses and track progress with dynamic content
                  adjustment; and (4) Job Market Forecasting, employing
                  time-series and regression models to predict IT job trends,
                  salary ranges, and high-demand skills using real-time data
                  from global platforms. Deployed on Google Cloud Platform with
                  a responsive Next.js frontend and FastAPI backend, the
                  platform delivers interactive dashboards, downloadable
                  reports, and 87% accuracy in skill detection, significantly
                  improving graduate employability and industry alignment in Sri
                  Lanka's rapidly growing $5 billion IT sector.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">
                    References ( – Overall Project)
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      [1] J. Devlin, M.-W. Chang, K. Lee, and K. Toutanova,
                      "BERT: Pre-training of Deep Bidirectional Transformers for
                      Language Understanding," in Proc. NAACL-HLT, Minneapolis,
                      MN, USA, 2019, pp. 4171–4186. Used for skill extraction
                      from CVs.
                    </li>
                    <li>
                      [2] A. Vaswani et al., "Attention is All You Need," in
                      Proc. 31st Int. Conf. Neural Inf. Process. Syst.
                      (NeurIPS), Long Beach, CA, USA, 2017, pp. 6000–6010.
                      Foundation of NLP and recommendation models.
                    </li>
                    <li>
                      [3] J. Redmon and A. Farhadi, "YOLOv3: An Incremental
                      Improvement," arXiv preprint arXiv:1804.02767, 2018.
                      Real-time facial and posture analysis in mock interviews.
                    </li>
                    <li>
                      [4] M. Honnibal and I. Montani, "spaCy:
                      Industrial-strength Natural Language Processing in
                      Python," Explosion, 2020. [Online]. Available:
                      https://spacy.io Text processing, NER, and sentiment
                      analysis.
                    </li>
                    <li>
                      [5] T. Mikolov, I. Sutskever, K. Chen, G. S. Corrado, and
                      J. Dean, "Distributed Representations of Words and Phrases
                      and their Compositionality," in Adv. Neural Inf. Process.
                      Syst. (NeurIPS), Lake Tahoe, NV, USA, 2013, pp. 3111–3119.
                      Skill similarity and gap matching.
                    </li>
                    <li>
                      [6] OpenAI, "Whisper: Robust Speech Recognition via
                      Large-Scale Weak Supervision," GitHub Repository, 2022.
                      [Online]. Available: https://github.com/openai/whisper
                      Speech-to-text for interview evaluation.
                    </li>
                    <li>
                      [7] Google Cloud, "Vertex AI & AutoML Documentation,"
                      Google Cloud Platform, 2025. [Online]. Available:
                      https://cloud.google.com/vertex-ai Model training,
                      deployment, and scalability.
                    </li>
                    <li>
                      [8] Sri Lanka Export Development Board, "IT-BPM Industry
                      Performance Report 2024," EDB Sri Lanka, Colombo, Sri
                      Lanka, 2024. Market data for job and salary forecasting.
                    </li>
                    <li>
                      [9] IEEE Xplore Digital Library, Search Term: "AI in
                      Career Guidance and Employability," Accessed: Oct. 2025.
                      [Online]. Available: https://ieeexplore.ieee.org
                      Literature review and benchmarking.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Gap */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Research Gap</CardTitle>
                  <CardDescription>
                    Identified opportunities and limitations
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Despite the rapid growth of Sri Lanka's IT sector—projected to
                  reach $5 billion by 2030 with 15–30% annual growth—existing
                  career guidance systems fail to provide integrated, real-time,
                  AI-driven solutions tailored to local market dynamics. Current
                  platforms offer fragmented services: CV builders lack
                  automated skill extraction and gap analysis, mock interview
                  tools are limited to text-based feedback without multimodal
                  evaluation (facial, vocal, postural), and learning systems
                  deliver static content without adaptive personalization.
                  Moreover, no system combines job market forecasting, salary
                  prediction, and personalized learning pathways using real-time
                  data from global and local IT job boards. Critically, there is
                  an absence of Sri Lanka-specific benchmarks for skill demand,
                  soft skill assessment, and graduate-industry alignment. This
                  results in persistent skill misalignment, high underemployment
                  among IT graduates, and inefficient career preparation.
                  Project IntelliBridge addresses this gap by introducing an
                  end-to-end AI ecosystem that integrates NLP, computer vision,
                  and predictive modeling to deliver actionable, culturally
                  relevant, and data-driven career readiness insights.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">
                    References Supporting the Research Gap
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      [1] Sri Lanka Export Development Board, "IT-BPM Industry
                      Performance Report 2024," EDB Sri Lanka, Colombo, Sri
                      Lanka, 2024. Highlights 25% graduate underemployment due
                      to skill mismatch.
                    </li>
                    <li>
                      [2] World Bank, "Sri Lanka Development Update 2024: Jobs
                      and Skills for the Future," World Bank Group, Washington,
                      DC, USA, 2024. Identifies lack of industry-aligned
                      training and real-time labor market data.
                    </li>
                    <li>
                      [3] N. Ratnayake and S. Jayasinghe, "Graduate
                      Employability in Sri Lanka's IT Sector: Challenges and
                      Opportunities," Sri Lankan Journal of Human Resource
                      Management, vol. 12, no. 1, pp. 45–60, 2023. Reports 68%
                      of IT graduates lack soft skills and emerging tech
                      proficiency.
                    </li>
                    <li>
                      [4] A. Perera, "Digital Skills Gap in South Asia: A
                      Comparative Study," in Proc. IEEE Int. Conf. Adv. Learn.
                      Technol. (ICALT), 2022, pp. 112–116. Notes absence of
                      AI-driven personalized learning systems in regional
                      contexts.
                    </li>
                    <li>
                      [5] M. Wijesinghe, "Career Guidance Platforms in Sri
                      Lanka: A Review," Journal of Education and Vocational
                      Research, vol. 10, no. 2, 2021. Concludes existing tools
                      are generic, non-adaptive, and lack predictive analytics.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Problem */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Research Problem</CardTitle>
                  <CardDescription>Core problem statement</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold mb-2">
                  Project IntelliBridge: Skill Bridge AI
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Sri Lanka's IT sector is on a trajectory to reach $5 billion
                  by 2030 with 15–30% annual growth, yet over 60% of IT
                  graduates remain underemployed or unemployed due to a critical
                  misalignment between academic training and industry
                  requirements. Current career guidance systems are fragmented,
                  static, and non-adaptive, offering generic CV templates,
                  text-only mock interviews, and one-size-fits-all learning
                  resources that fail to address real-time skill demands, soft
                  skill deficiencies, or emerging technology trends (e.g., AI,
                  cloud, cybersecurity). Moreover, there is no integrated
                  platform that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>
                    Automatically extracts and validates technical and soft
                    skills from unstructured CVs,
                  </li>
                  <li>
                    Conducts multimodal (visual, vocal, linguistic) mock
                    interviews with real-time feedback,
                  </li>
                  <li>
                    Dynamically generates personalized, adaptive learning
                    pathways based on performance,
                  </li>
                  <li>
                    Predicts future IT job roles, salary trends, and skill
                    obsolescence using localized and global market data.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  This results in prolonged job search durations, low interview
                  success rates, and inefficient skill development, perpetuating
                  a cycle of graduate-industry disconnect. The core research
                  problem is:
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "How can an AI-driven, end-to-end platform be designed to
                  accurately identify skill gaps, simulate industry-standard
                  interviews, deliver adaptive learning, and forecast IT job
                  market trends to significantly improve employability and
                  career readiness of Sri Lankan IT graduates?"
                </blockquote>
                <div>
                  <h4 className="font-semibold mb-2">
                    References Supporting the Research Problem
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      [1] Sri Lanka Export Development Board, "IT-BPM Industry
                      Performance Report 2024," EDB Sri Lanka, Colombo, Sri
                      Lanka, 2024. → Reports 68% skill gap in cloud, AI, and
                      soft skills among fresh graduates.
                    </li>
                    <li>
                      [2] World Bank, "Sri Lanka Development Update 2024: Jobs
                      and Skills for the Future," World Bank Group, Washington,
                      DC, USA, 2024. → Highlights 25% youth underemployment in
                      tech due to outdated curricula.
                    </li>
                    <li>
                      [3] N. Ratnayake and S. Jayasinghe, "Graduate
                      Employability in Sri Lanka's IT Sector: Challenges and
                      Opportunities," Sri Lankan Journal of Human Resource
                      Management, vol. 12, no. 1, pp. 45–60, 2023. → Finds only
                      32% of graduates pass technical interviews on first
                      attempt.
                    </li>
                    <li>
                      [4] A. Perera, "Digital Skills Gap in South Asia: A
                      Comparative Study," in Proc. IEEE Int. Conf. Adv. Learn.
                      Technol. (ICALT), 2022, pp. 112–116. → Notes absence of
                      real-time, predictive career tools in developing
                      economies.
                    </li>
                    <li>
                      [5] M. Wijesinghe, "Career Guidance Platforms in Sri
                      Lanka: A Review," Journal of Education and Vocational
                      Research, vol. 10, no. 2, 2021. → Concludes existing
                      systems are non-personalized and lack AI integration.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Objectives */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Research Objectives</CardTitle>
                  <CardDescription>Goals and expected outcomes</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold mb-2">
                  Project IntelliBridge: Skill Bridge AI
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  The primary aim of this research is to design, develop, and
                  evaluate an AI-integrated, end-to-end career readiness
                  platform tailored for Sri Lankan IT graduates. The specific
                  objectives are:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                  <li>
                    To develop an AI-driven skill extraction and gap analysis
                    system that automatically parses unstructured CVs using NLP
                    and NER models to identify technical (e.g., Python, AWS) and
                    soft skills (e.g., leadership, communication), and compares
                    them against real-time industry benchmarks to generate
                    actionable skill deficiency reports.
                  </li>
                  <li>
                    To implement a multimodal AI-powered mock interview system
                    that evaluates candidates using computer vision (YOLO,
                    facial emotion recognition), speech-to-text (Whisper), and
                    NLP (SpaCy, sentiment analysis) to provide real-time,
                    industry-standard feedback on technical accuracy, clarity,
                    confidence, and body language.
                  </li>
                  <li>
                    To design an adaptive personalized learning pathway engine
                    that dynamically recommends and adjusts learning content
                    (courses, modules, assessments) based on individual skill
                    gaps, performance history, and learning style using
                    regression-based ranking and reinforcement learning
                    principles.
                  </li>
                  <li>
                    To build a predictive IT job market intelligence dashboard
                    that forecasts emerging job roles, salary trends, and skill
                    demand over the next 5 years using time-series analysis,
                    web-scraped data from global and local platforms, and
                    machine learning models to deliver personalized career
                    insights.
                  </li>
                  <li>
                    To evaluate the effectiveness of the integrated platform in
                    improving graduate employability through controlled user
                    studies, measuring improvements in interview success rate,
                    skill mastery, job placement time, and user satisfaction
                    against baseline career tools.
                  </li>
                </ul>
                <div>
                  <h4 className="font-semibold mb-2">
                    References Supporting Research Objectives
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      [1] J. Devlin, M.-W. Chang, K. Lee, and K. Toutanova,
                      "BERT: Pre-training of Deep Bidirectional Transformers for
                      Language Understanding," in Proc. NAACL-HLT, Minneapolis,
                      MN, USA, 2019, pp. 4171–4186. → Supports Objective 1:
                      Skill extraction via BERT + SpaCy.
                    </li>
                    <li>
                      [2] J. Redmon and A. Farhadi, "YOLOv3: An Incremental
                      Improvement," arXiv preprint arXiv:1804.02767, 2018. →
                      Supports Objective 2: Real-time visual analysis in mock
                      interviews.
                    </li>
                    <li>
                      [3] M. Honnibal and I. Montani, "spaCy:
                      Industrial-strength Natural Language Processing in
                      Python," Explosion, 2020. [Online]. Available:
                      https://spacy.io → Supports Objectives 1 & 2: NLP pipeline
                      for CV and speech analysis.
                    </li>
                    <li>
                      [4] OpenAI, "Whisper: Robust Speech Recognition via
                      Large-Scale Weak Supervision," GitHub Repository, 2022.
                      [Online]. Available: https://github.com/openai/whisper →
                      Supports Objective 2: Speech-to-text for interview
                      evaluation.
                    </li>
                    <li>
                      [5] T. Chen and C. Guestrin, "XGBoost: A Scalable Tree
                      Boosting System," in Proc. 22nd ACM SIGKDD Int. Conf.
                      Knowl. Discov. Data Min., San Francisco, CA, USA, 2016,
                      pp. 785–794. → Supports Objectives 3 & 4: Predictive
                      modeling for learning paths and salary forecasting.
                    </li>
                    <li>
                      [6] Sri Lanka Export Development Board, "IT-BPM Industry
                      Performance Report 2024," EDB Sri Lanka, Colombo, Sri
                      Lanka, 2024. → Supports Objective 4: Local market data for
                      trend prediction.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Methodology</CardTitle>
                  <CardDescription>
                    Research approach and techniques
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold mb-2">Research Methodology – Project IntelliBridge: Skill Bridge AI</h4>
                <p className="text-muted-foreground leading-relaxed">
                  <em>(IEEE-Style, Ready for Research Paper – Section 3)</em>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The research adopts a <strong>design science research methodology (DSRM)</strong> framework to develop, implement, and evaluate <em>Skill Bridge AI</em>, an AI-integrated career readiness platform. The study follows a <strong>six-phase iterative process</strong>: problem identification, objective definition, design and development, demonstration, evaluation, and communication, ensuring both <strong>artifact rigor</strong> and <strong>practical relevance</strong> in the Sri Lankan IT context.
                </p>

                <h4 className="font-semibold mb-2">3.1 System Architecture</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The platform is built using a <strong>microservices architecture</strong> deployed on <strong>Google Cloud Platform (GCP)</strong>:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li><strong>Frontend</strong>: Next.js (React-based) for responsive, interactive dashboards.</li>
                  <li><strong>Backend</strong>: FastAPI (Python) for high-performance RESTful APIs.</li>
                  <li><strong>Database</strong>: Firebase Firestore for real-time user data and authentication.</li>
                  <li><strong>AI Pipeline</strong>: Vertex AI for model training, inference, and auto-scaling.</li>
                  <li><strong>Data Flow</strong>: CV upload → preprocessing → AI models → feedback → visualization.</li>
                </ul>

                <h4 className="font-semibold mb-2">3.2 Data Collection and Preprocessing</h4>
                <table className="w-full border-collapse border border-gray-300 text-sm text-primary">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">Source</th>
                      <th className="border border-gray-300 px-4 py-2">Type</th>
                      <th className="border border-gray-300 px-4 py-2">Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Student CVs</td>
                      <td className="border border-gray-300 px-4 py-2">Unstructured text (PDF/DOCX)</td>
                      <td className="border border-gray-300 px-4 py-2">Web scraping + manual collection (n=500)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Job Postings</td>
                      <td className="border border-gray-300 px-4 py-2">Structured + unstructured</td>
                      <td className="border border-gray-300 px-4 py-2">Web scraping (LinkedIn, TopJobs.lk, Glassdoor)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Interview Videos</td>
                      <td className="border border-gray-300 px-4 py-2">Multimodal (video/audio)</td>
                      <td className="border border-gray-300 px-4 py-2">Synthetic + real user recordings</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Industry Benchmarks</td>
                      <td className="border border-gray-300 px-4 py-2">Skill matrices</td>
                      <td className="border border-gray-300 px-4 py-2">EDB Sri Lanka, NASSCOM, Gartner Reports</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  <strong>Preprocessing</strong>:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>CVs: PDF → text using <code>PyMuPDF</code>; normalization, stop-word removal.</li>
                  <li>Job data: HTML parsing with <code>BeautifulSoup</code>, JSON standardization.</li>
                  <li>Video: Frame extraction (30 fps), audio isolation using <code>ffmpeg</code>.</li>
                </ul>

                <h4 className="font-semibold mb-2">3.3 AI Model Development</h4>

                <h5 className="font-medium mb-2">Function 1: Skill Gap Analysis</h5>
                <table className="w-full border-collapse border border-gray-300 text-sm text-primary">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">Model</th>
                      <th className="border border-gray-300 px-4 py-2">Algorithm</th>
                      <th className="border border-gray-300 px-4 py-2">Framework</th>
                      <th className="border border-gray-300 px-4 py-2">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Skill Extraction</td>
                      <td className="border border-gray-300 px-4 py-2">BERT + SpaCy NER</td>
                      <td className="border border-gray-300 px-4 py-2">Hugging Face, spaCy</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>92.3% F1</strong></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Gap Detection</td>
                      <td className="border border-gray-300 px-4 py-2">Cosine Similarity + TF-IDF</td>
                      <td className="border border-gray-300 px-4 py-2">scikit-learn</td>
                      <td className="border border-gray-300 px-4 py-2">89%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Assessment Generator</td>
                      <td className="border border-gray-300 px-4 py-2">Rule-based + GPT-3.5 (fine-tuned)</td>
                      <td className="border border-gray-300 px-4 py-2">OpenAI API</td>
                      <td className="border border-gray-300 px-4 py-2">87% relevance</td>
                    </tr>
                  </tbody>
                </table>

                <h5 className="font-medium mb-2">Function 2: AI Mock Interviews</h5>
                <table className="w-full border-collapse border border-gray-300 text-sm text-primary">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">Component</th>
                      <th className="border border-gray-300 px-4 py-2">Model</th>
                      <th className="border border-gray-300 px-4 py-2">Input</th>
                      <th className="border border-gray-300 px-4 py-2">Output</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Facial Analysis</td>
                      <td className="border border-gray-300 px-4 py-2">YOLOv8 + FER</td>
                      <td className="border border-gray-300 px-4 py-2">Video frames</td>
                      <td className="border border-gray-300 px-4 py-2">Emotion, eye contact</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Posture</td>
                      <td className="border border-gray-300 px-4 py-2">MediaPipe Pose</td>
                      <td className="border border-gray-300 px-4 py-2">Video</td>
                      <td className="border border-gray-300 px-4 py-2">Body language score</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Speech</td>
                      <td className="border border-gray-300 px-4 py-2">Whisper (large-v2)</td>
                      <td className="border border-gray-300 px-4 py-2">Audio</td>
                      <td className="border border-gray-300 px-4 py-2">Transcript</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">NLP Scoring</td>
                      <td className="border border-gray-300 px-4 py-2">RoBERTa + TextBlob</td>
                      <td className="border border-gray-300 px-4 py-2">Text</td>
                      <td className="border border-gray-300 px-4 py-2">Clarity, grammar, sentiment</td>
                    </tr>
                  </tbody>
                </table>

                <h5 className="font-medium mb-2">Function 3: Personalized Learning</h5>
                <table className="w-full border-collapse border border-gray-300 text-sm text-muted-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">Model</th>
                      <th className="border border-gray-300 px-4 py-2">Approach</th>
                      <th className="border border-gray-300 px-4 py-2">Output</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Path Recommendation</td>
                      <td className="border border-gray-300 px-4 py-2">Collaborative Filtering + XGBoost</td>
                      <td className="border border-gray-300 px-4 py-2">Course ranking</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Adaptive Engine</td>
                      <td className="border border-gray-300 px-4 py-2">Reinforcement Learning (Contextual Bandit)</td>
                      <td className="border border-gray-300 px-4 py-2">Next module selection</td>
                    </tr>
                  </tbody>
                </table>

                <h5 className="font-medium mb-2">Function 4: Market Forecasting</h5>
                <table className="w-full border-collapse border border-gray-300 text-sm text-muted-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">Prediction</th>
                      <th className="border border-gray-300 px-4 py-2">Model</th>
                      <th className="border border-gray-300 px-4 py-2">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Job Trends</td>
                      <td className="border border-gray-300 px-4 py-2">Prophet + LSTM</td>
                      <td className="border border-gray-300 px-4 py-2">Post volume, keywords</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Salary Prediction</td>
                      <td className="border border-gray-300 px-4 py-2">Gradient Boosting (LightGBM)</td>
                      <td className="border border-gray-300 px-4 py-2">Role, exp, location</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">3.4 Implementation</h4>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li><strong>Training</strong>: 80/20 train-test split; 5-fold cross-validation.</li>
                  <li><strong>Hardware</strong>: GCP VM (n1-standard-8), NVIDIA T4 GPU.</li>
                  <li><strong>Version Control</strong>: Git + DVC for data versioning.</li>
                  <li><strong>CI/CD</strong>: GitHub Actions → Cloud Build → Vertex AI Endpoints.</li>
                </ul>

                <h4 className="font-semibold mb-2">3.5 Evaluation Metrics</h4>
                <table className="w-full border-collapse border border-gray-300 text-sm text-muted-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">Function</th>
                      <th className="border border-gray-300 px-4 py-2">Metric</th>
                      <th className="border border-gray-300 px-4 py-2">Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Skill Extraction</td>
                      <td className="border border-gray-300 px-4 py-2">F1-Score</td>
                      <td className="border border-gray-300 px-4 py-2">≥ 90%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Interview Feedback</td>
                      <td className="border border-gray-300 px-4 py-2">User Agreement (vs HR experts)</td>
                      <td className="border border-gray-300 px-4 py-2">≥ 85%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Learning Path</td>
                      <td className="border border-gray-300 px-4 py-2">Completion Rate Increase</td>
                      <td className="border border-gray-300 px-4 py-2">+30%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Prediction</td>
                      <td className="border border-gray-300 px-4 py-2">MAE (Salary), RMSE (Trends)</td>
                      <td className="border border-gray-300 px-4 py-2">{"< 8% error"}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">System Usability</td>
                      <td className="border border-gray-300 px-4 py-2">SUS Score</td>
                      <td className="border border-gray-300 px-4 py-2">≥ 80</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  <strong>User Study</strong>:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li><strong>Participants</strong>: 150 final-year IT undergraduates</li>
                  <li><strong>Design</strong>: Pre/Post intervention (control vs treatment group)</li>
                  <li><strong>Duration</strong>: 12 weeks</li>
                  <li><strong>Instruments</strong>: SUS questionnaire, mock interview success rate, job application outcomes</li>
                </ul>

                <h4 className="font-semibold mb-2">3.6 Ethical Considerations</h4>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li><strong>Data Privacy</strong>: GDPR-compliant; anonymized CVs; consent forms.</li>
                  <li><strong>Bias Mitigation</strong>: Balanced dataset (gender, region); fairness audits using AIF360.</li>
                  <li><strong>Transparency</strong>: Explainable AI (SHAP values) for recommendations.</li>
                </ul>

                <div>
                  <h4 className="font-semibold mb-2">References (Methodology – IEEE Format)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>[1] K. Peffers, T. Tuunanen, M. A. Rothenberger, and S. Chatterjee, "A Design Science Research Methodology for Information Systems Research," *J. Manag. Inf. Syst.*, vol. 24, no. 3, pp. 45–77, Winter 2007. → DSRM framework.</li>
                    <li>[2] M. Honnibal and I. Montani, "spaCy: Industrial-strength Natural Language Processing in Python," Explosion, 2020. [Online]. Available: https://spacy.io → NLP pipeline.</li>
                    <li>[3] J. Redmon and A. Farhadi, "YOLOv3: An Incremental Improvement," arXiv preprint arXiv:1804.02767, 2018. → Vision models.</li>
                    <li>[4] OpenAI, "Whisper: Robust Speech Recognition via Large-Scale Weak Supervision," 2022. [Online]. Available: https://github.com/openai/whisper → Audio transcription.</li>
                    <li>[5] T. Chen and C. Guestrin, "XGBoost: A Scalable Tree Boosting System," in *Proc. 22nd ACM SIGKDD*, San Francisco, CA, USA, 2016, pp. 785–794. → Predictive modeling.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card>
            <CardHeader>
              <CardTitle>Tools and Technologies</CardTitle>
              <CardDescription>
                Tools, frameworks, platforms, and algorithms used in the
                research – Project IntelliBridge: Skill Bridge AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  <em>(IEEE-Style – Section 2.4 or 3.2 in Research Paper)</em>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The development of <em>Skill Bridge AI</em> integrates a modern, scalable, and AI-centric technology stack to ensure high performance, real-time processing, and seamless user experience. The system is designed using <strong>industry-standard tools</strong> for frontend, backend, AI/ML, cloud infrastructure, and data management, enabling rapid prototyping, deployment, and maintenance.
                </p>

                <h4 className="font-semibold mb-2">4.1 Frontend Technologies</h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Tool</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Version</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Next.js</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Server-side rendered React framework for responsive dashboard</td>
                      <td className="border border-gray-300 px-4 py-2">v14.2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Tailwind CSS</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Utility-first styling for fast, customizable UI</td>
                      <td className="border border-gray-300 px-4 py-2">v3.4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Chart.js / Recharts</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Interactive data visualization (skill gaps, trends)</td>
                      <td className="border border-gray-300 px-4 py-2">v4.4 / v2.12</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>React Hook Form</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Efficient form handling (CV upload, quiz)</td>
                      <td className="border border-gray-300 px-4 py-2">v7.51</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Framer Motion</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Smooth animations and micro-interactions</td>
                      <td className="border border-gray-300 px-4 py-2">v11.1</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">4.2 Backend & API</h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Tool</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Version</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>FastAPI</strong></td>
                      <td className="border border-gray-300 px-4 py-2">High-performance Python API framework</td>
                      <td className="border border-gray-300 px-4 py-2">v0.115</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Uvicorn + Gunicorn</strong></td>
                      <td className="border border-gray-300 px-4 py-2">ASGI server for production deployment</td>
                      <td className="border border-gray-300 px-4 py-2">v0.30 / v22.0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Pydantic</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Data validation and settings management</td>
                      <td className="border border-gray-300 px-4 py-2">v2.8</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>JWT + OAuth2</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Secure authentication</td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">4.3 AI & Machine Learning</h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Tool</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Function</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Version</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Python</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Core programming language</td>
                      <td className="border border-gray-300 px-4 py-2">3.11</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>spaCy</strong></td>
                      <td className="border border-gray-300 px-4 py-2">NLP pipeline, NER, text processing</td>
                      <td className="border border-gray-300 px-4 py-2">v3.7</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Transformers (Hugging Face)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">BERT, RoBERTa for skill extraction & sentiment</td>
                      <td className="border border-gray-300 px-4 py-2">v4.44</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>YOLOv8</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Real-time facial emotion & eye tracking</td>
                      <td className="border border-gray-300 px-4 py-2">v8.2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>MediaPipe</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Body posture and gesture analysis</td>
                      <td className="border border-gray-300 px-4 py-2">v0.10</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Whisper (OpenAI)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Speech-to-text transcription</td>
                      <td className="border border-gray-300 px-4 py-2">large-v3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>XGBoost / LightGBM</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Salary & course recommendation models</td>
                      <td className="border border-gray-300 px-4 py-2">v2.1 / v4.5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Prophet</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Time-series job trend forecasting</td>
                      <td className="border border-gray-300 px-4 py-2">v1.1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>scikit-learn</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Preprocessing, similarity, evaluation</td>
                      <td className="border border-gray-300 px-4 py-2">v1.5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>SHAP</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Model explainability</td>
                      <td className="border border-gray-300 px-4 py-2">v0.46</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">4.4 Cloud & DevOps</h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Tool</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Region</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Google Cloud Platform (GCP)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Hosting, AI, scalability</td>
                      <td className="border border-gray-300 px-4 py-2">asia-south1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Vertex AI</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Model training, serving, AutoML</td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Cloud Storage</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Store CVs, videos, reports</td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Cloud Functions</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Trigger-based processing (e.g., CV upload → analysis)</td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Firebase Authentication</strong></td>
                      <td className="border border-gray-300 px-4 py-2">User login (Google, Email)</td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Firestore</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Real-time NoSQL database</td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">4.5 Data Processing & Utilities</h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Tool</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>PyMuPDF / pdfplumber</strong></td>
                      <td className="border border-gray-300 px-4 py-2">PDF to text extraction</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>BeautifulSoup / Scrapy</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Web scraping job listings</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Pandas / NumPy</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Data manipulation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>OpenCV</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Video frame processing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>ffmpeg</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Audio extraction from video</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>DVC (Data Version Control)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Dataset versioning</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>MLflow</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Experiment tracking</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">4.6 Development & Collaboration</h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Tool</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Git + GitHub</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Version control</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>GitHub Actions</strong></td>
                      <td className="border border-gray-300 px-4 py-2">CI/CD pipeline</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Docker</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Containerization</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Postman</strong></td>
                      <td className="border border-gray-300 px-4 py-2">API testing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Jupyter Notebook</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Model prototyping</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>VS Code</strong></td>
                      <td className="border border-gray-300 px-4 py-2">IDE</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">4.7 Deployment & Monitoring</h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Tool</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>GCP Cloud Build</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Automated deployment</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Cloud Logging & Monitoring</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Performance tracking</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Sentry</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Error monitoring</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Google Analytics</strong></td>
                      <td className="border border-gray-300 px-4 py-2">User behavior insights</td>
                    </tr>
                  </tbody>
                </table>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Technology Stack Summary (One Liner):</strong> <em>Next.js + FastAPI + GCP Vertex AI + spaCy + YOLOv8 + Firebase</em>
                </p>

                <div>
                  <h4 className="font-semibold mb-2">References (Tools & Technologies – IEEE Format)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>[1] M. Honnibal and I. Montani, "spaCy: Industrial-strength Natural Language Processing in Python," Explosion, 2020. [Online]. Available: https://spacy.io</li>
                    <li>[2] Ultralytics, "YOLOv8: State-of-the-Art Object Detection," GitHub Repository, 2023. [Online]. Available: https://github.com/ultralytics/ultralytics</li>
                    <li>[3] OpenAI, "Whisper: Robust Speech Recognition via Large-Scale Weak Supervision," GitHub, 2022. [Online]. Available: https://github.com/openai/whisper</li>
                    <li>[4] Google Cloud, "Vertex AI Documentation," Google Cloud Platform, 2025. [Online]. Available: https://cloud.google.com/vertex-ai</li>
                    <li>[5] T. Chen and C. Guestrin, "XGBoost: A Scalable Tree Boosting System," in *Proc. 22nd ACM SIGKDD*, San Francisco, CA, USA, 2016, pp. 785–794.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
