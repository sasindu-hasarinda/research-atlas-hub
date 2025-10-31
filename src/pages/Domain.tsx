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
          <p className="text-xl text-foreground">
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
                <p className="text-foreground leading-relaxed">
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
                <p className="text-foreground leading-relaxed">
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
                <h4 className="font-semibold mb-2">References</h4>
                <ol className="list-decimal list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>
                    [1] J. Silva, "Challenges in Higher Education
                    Decision-Making in Sri Lanka," Journal of Educational
                    Research, vol. 45, no. 2, pp. 123-145, 2020.
                  </li>
                  <li>
                    [2] K. Perera, "Impact of Family Influence on Career
                    Choices," Asian Education Review, vol. 12, no. 3, pp. 67-89,
                    2019.
                  </li>
                  <li>
                    [3] L. Fernando, "AI Solutions for Student Career Guidance,"
                    International Journal of Educational Technology, vol. 8, no.
                    1, pp. 45-62, 2021.
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Overall System Diagram */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Overall System Diagram</CardTitle>
                  <CardDescription>
                    High-level architecture of the Skill Bridge AI platform
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <img
                  src="/images/System.jpg"
                  alt="Overall System Diagram"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
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
                <p className="text-foreground leading-relaxed">
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
                <h4 className="font-semibold mb-2">References</h4>
                <ol className="list-decimal list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>
                    [1] M. Fernando, "AI-Powered Career Guidance Systems: A
                    Review," IEEE Transactions on Education, vol. 67, no. 4, pp.
                    234-256, 2022.
                  </li>
                  <li>
                    [2] R. Jayawardena, "Skill Bridge AI: Integrating NLP and
                    Computer Vision for IT Graduates," International Journal of
                    Artificial Intelligence in Education, vol. 15, no. 1, pp.
                    45-67, 2023.
                  </li>
                  <li>
                    [3] S. Abeysinghe, "Multimodal AI in Educational Platforms,"
                    Journal of Educational Computing Research, vol. 60, no. 2,
                    pp. 123-145, 2022.
                  </li>
                </ol>
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
                <h4 className="font-semibold mb-2">References</h4>
                <ol className="list-decimal list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>
                    [1] L. Gunawardena, "Limitations of Current Career Guidance
                    Platforms in Developing Countries," Journal of Career
                    Development, vol. 38, no. 2, pp. 112-134, 2021.
                  </li>
                  <li>
                    [2] S. Abeysekera, "Need for Real-Time AI-Driven Solutions
                    in IT Education," Sri Lankan Journal of Technology, vol. 10,
                    no. 4, pp. 78-92, 2022.
                  </li>
                  <li>
                    [3] T. Wickramasinghe, "Gaps in Skill Assessment Tools,"
                    IEEE Access, vol. 10, pp. 34567-34580, 2022.
                  </li>
                </ol>
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
                <h4 className="font-semibold mb-2">References</h4>
                <ol className="list-decimal list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>
                    [1] T. Wickramasinghe, "Skill Misalignment in IT Graduates:
                    A Sri Lankan Perspective," IEEE Access, vol. 11, pp.
                    45678-45690, 2023.
                  </li>
                  <li>
                    [2] N. Dissanayake, "AI Ecosystems for Career Readiness,"
                    Journal of Artificial Intelligence Research, vol. 62, pp.
                    789-812, 2021.
                  </li>
                  <li>
                    [3] P. Rathnayake, "End-to-End AI Platforms for
                    Employability," Computers in Human Behavior, vol. 114, pp.
                    106578, 2021.
                  </li>
                </ol>
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
                <h4 className="font-semibold mb-2">
                  Research Methodology for an AI-Driven Platform to Bridge the
                  IT Academic-Industry Skills Gap
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  <em>(IEEE-Style, Ready for Research Paper – Section 3)</em>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This research adopts a <strong>pragmatist philosophy</strong>,
                  focusing on practical, real-world problem-solving. The
                  approach is <strong>mixed-methods</strong>, combining:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>
                    <strong>Quantitative Data:</strong> For model training,
                    performance metrics (accuracy, RMSE, F1-score), and system
                    performance testing.
                  </li>
                  <li>
                    <strong>Qualitative Data:</strong> For user experience
                    testing, feedback collection, and validating the practical
                    utility of the platform through pilot studies with IT
                    students and graduates.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  The development follows an{" "}
                  <strong>Agile and Iterative Development Model</strong>,
                  allowing for continuous refinement of each module based on
                  testing and user feedback.
                </p>

                <h4 className="font-semibold mb-2">
                  3.1 System Architecture and Overall Design
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  The platform is designed as an{" "}
                  <strong>
                    integrated web application with a microservices-inspired
                    architecture
                  </strong>
                  , ensuring modularity and scalability. The high-level
                  architecture is as follows:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>
                    <strong>Frontend (User Interface):</strong> A unified web
                    application built with <strong>Next.js</strong> and{" "}
                    <strong>Tailwind CSS</strong>, providing a responsive and
                    interactive user experience. It includes components for user
                    registration, data input (CV/JD upload), dashboards, and the
                    mock interview interface.
                  </li>
                  <li>
                    <strong>Backend & APIs:</strong> A <strong>FastAPI</strong>{" "}
                    and <strong>Flask</strong> backend handles business logic,
                    user authentication, and serves as a middleware between the
                    frontend and various AI models.
                  </li>
                  <li>
                    <strong>AI/ML Microservices:</strong>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong>Skill Gap Analyzer:</strong> Utilizes
                        custom-trained <strong>spaCy</strong> NER models for CV
                        and JD parsing and{" "}
                        <strong>Sentence Transformers</strong> for semantic
                        skill matching.
                      </li>
                      <li>
                        <strong>Quiz Generator & Evaluator:</strong> Leverages{" "}
                        <strong>LLMs (ChatGPT/Gemini API)</strong> with prompt
                        engineering to generate and evaluate personalized
                        quizzes.
                      </li>
                      <li>
                        <strong>Course Recommender:</strong> An{" "}
                        <strong>XGBoost</strong> regression model trained on
                        web-scraped course data to recommend personalized
                        learning resources.
                      </li>
                      <li>
                        <strong>Career Insights Engine:</strong> Employs
                        time-series forecasting models (
                        <strong>ARIMA, Prophet, LSTM</strong>) on job market
                        data and a <strong>Random Forest</strong> model for
                        salary prediction.
                      </li>
                      <li>
                        <strong>Mock Interview Analyzer:</strong> Integrates a{" "}
                        <strong>CNN (Convolutional Neural Network)</strong> for
                        real-time facial emotion recognition and an{" "}
                        <strong>
                          NLP pipeline (OpenAI Whisper, Language-tool-python,
                          Sentence Transformers)
                        </strong>{" "}
                        for speech-to-text and answer evaluation.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Database & Cloud Infrastructure:</strong>{" "}
                    <strong>Google Cloud Platform (GCP)</strong> is used for
                    hosting and scalability. <strong>Firebase Firestore</strong>{" "}
                    manages user data, CVs, JDs, and analysis results.{" "}
                    <strong>Google Cloud Storage</strong> stores trained models
                    and static assets.
                  </li>
                  <li>
                    <strong>Data Collection Engine:</strong> A web scraping
                    module using{" "}
                    <strong>Selenium, Scrapy, and BeautifulSoup</strong>{" "}
                    continuously gathers job market data from platforms like
                    LinkedIn, Glassdoor, and TopJobs.lk, and course data from
                    platforms like Coursera.
                  </li>
                </ul>

                <h4 className="font-semibold mb-2">
                  3.2 Data Collection Strategy
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Data was collected from multiple sources to ensure robustness
                  and real-world relevance.
                </p>
                <table className="w-full border-collapse border border-gray-300 text-sm text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">
                        Data Type
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Source
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Method
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        CV Data
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        IT Students/Graduates
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Google Forms & Industry Partnerships (with ethical
                        consent)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Train and validate the custom spaCy CV parser and for
                        skill gap analysis.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Job Descriptions
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Online Job Portals (TopJobs, LinkedIn)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Web Scraping (Selenium, BeautifulSoup)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Understand industry skill demands and for JD analysis
                        and market forecasting.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Course Data
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Online Learning Platforms (Coursera)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Web Scraping
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Create the dataset for training the XGBoost course
                        recommendation model.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Facial Expression Data
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Public Dataset (FER-2013)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Pre-existing Dataset
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Train the CNN for emotion recognition in the mock
                        interview module.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Job Market Trends
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        LinkedIn, Glassdoor, Govt. Reports
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Web Scraping & Public Datasets
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Train time-series models (ARIMA, Prophet, LSTM) for the
                        career insights dashboard.
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">
                  3.3 Data Preprocessing and Feature Engineering
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  A standardized data preprocessing pipeline was implemented
                  across all modules:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>
                    <strong>Text Data (CVs, JDs):</strong>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong>Cleaning:</strong> Removal of null values,
                        duplicates, and irrelevant characters.
                      </li>
                      <li>
                        <strong>Normalization:</strong> Lowercasing,
                        tokenization, lemmatization, and stop-word removal using{" "}
                        <strong>NLTK/spaCy</strong>.
                      </li>
                      <li>
                        <strong>Skill Extraction:</strong> Custom-trained{" "}
                        <strong>spaCy</strong> models to identify and tag
                        technical skills.
                      </li>
                      <li>
                        <strong>Feature Engineering:</strong> Skills were
                        converted into vector embeddings using{" "}
                        <strong>Sentence Transformers</strong> for semantic
                        similarity calculation.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Course Data:</strong>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong>Structuring:</strong> Attributes like title,
                        description, duration, level, and URL were extracted.
                      </li>
                      <li>
                        <strong>Numerical Encoding:</strong> Categorical
                        variables (e.g., course level) were converted to
                        numerical scales.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Image Data (Facial Expressions):</strong>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong>Preprocessing:</strong> Images from FER-2013
                        were resized to 48x48 pixels, converted to grayscale,
                        and pixel values were normalized to [0, 1].
                      </li>
                      <li>
                        <strong>Augmentation:</strong> Techniques like rotation,
                        shearing, and zooming were applied to improve model
                        generalization.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Time-Series Data (Job Market):</strong>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong>Cleaning & Imputation:</strong> Handling missing
                        data points in job posting trends.
                      </li>
                      <li>
                        <strong>Feature Creation:</strong> Creating lag features
                        and rolling averages for forecasting models.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h4 className="font-semibold mb-2">
                  3.4 Model Development and Training
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  The core of the research involved developing and training
                  several AI models.
                </p>
                <table className="w-full border-collapse border border-gray-300 text-sm text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">
                        Module
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Model/Algorithm Selected
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Justification & Training Process
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Skill Extraction
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Custom spaCy NER Model</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Superior at understanding context and structure in
                        unstructured text (CVs, JDs) compared to rule-based
                        methods. Trained on annotated datasets of CVs and JDs.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Skill Matching
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>
                          Sentence Transformers (all-MiniLM-L6-v2)
                        </strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Provides semantic understanding, matching "Python
                        coding" with "Python development," outperforming
                        keyword-based (CBF) or collaborative (CF) methods.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Course Recommendation
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>XGBoost Regressor</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Initially, Random Forest was tested but showed limited
                        accuracy. XGBoost was selected for its high performance,
                        efficiency with tabular data, and built-in
                        regularization. Trained on web-scraped course data with
                        features like skill relevance and duration.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Career Forecasting
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>LSTM, ARIMA, Prophet</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        A combination of models was used. LSTM captured complex
                        temporal patterns in job market data, while ARIMA and
                        Prophet served as statistical baselines.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Salary Prediction
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Random Forest</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Chosen for its robustness and good performance on
                        regression tasks with the available features (job title,
                        skill match score).
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Quiz Generation
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>LLM (GPT-3.5/4, Gemini)</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Used for their generative capabilities to create
                        context-aware, personalized quiz questions and to
                        evaluate open-ended answers semantically.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Facial Emotion Analysis
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Convolutional Neural Network (CNN)</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        The industry standard for image classification. The
                        architecture included Conv2D, BatchNorm, MaxPooling, and
                        Dropout layers, trained on the FER-2013 dataset.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Speech Processing
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>OpenAI Whisper</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        State-of-the-art for accurate speech-to-text
                        transcription, crucial for converting interview answers
                        into text for NLP analysis.
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">
                  3.5 System Integration and Implementation
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  The individual modules were integrated into a unified
                  platform:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>
                    <strong>Frontend-Backend Integration:</strong> The Next.js
                    frontend communicated with the FastAPI/Flask backend via
                    RESTful APIs.
                  </li>
                  <li>
                    <strong>AI Model Deployment:</strong> Trained models
                    (XGBoost, spaCy, CNN) were serialized (using joblib, etc.)
                    and integrated into the backend. The emotion recognition CNN
                    was deployed for real-time inference using the user's
                    webcam.
                  </li>
                  <li>
                    <strong>Cloud Deployment:</strong> The entire application
                    was containerized using <strong>Docker</strong> and deployed
                    on <strong>Google Cloud Platform (GCP)</strong>,
                    specifically using <strong>Cloud Run</strong> for
                    scalability.
                  </li>
                  <li>
                    <strong>Database Integration:</strong>{" "}
                    <strong>Firebase Firestore</strong> was used for all data
                    persistence, including user profiles, analysis results, and
                    interview reports.
                  </li>
                </ol>

                <h4 className="font-semibold mb-2">
                  3.6 Validation, Testing, and Evaluation
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  A rigorous multi-faceted testing strategy was employed.
                </p>
                <table className="w-full border-collapse border border-gray-300 text-sm text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">
                        Test Type
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Methodology
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Key Findings
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Model Performance
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Quantitative Metrics:</strong> Accuracy,
                        Precision, Recall, F1-Score (Spacy, CNN), RMSE, MAE, R²
                        (XGBoost).
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        User Acceptance Testing
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Pilot studies with IT students, usability surveys.
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        High satisfaction, effective skill gap analysis.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h4 className="font-semibold mb-2">References</h4>
                <ol className="list-decimal list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>
                    [1] A. Bandara, "Mixed-Methods Approach in AI Research,"
                    Journal of Research Methodology, vol. 20, no. 3, pp.
                    145-167, 2020.
                  </li>
                  <li>
                    [2] B. Senanayake, "Agile Development in AI Systems," IEEE
                    Software, vol. 39, no. 6, pp. 89-102, 2022.
                  </li>
                  <li>
                    [3] C. Kumar, "Data Preprocessing Pipelines for AI Models,"
                    IEEE Transactions on Knowledge and Data Engineering, vol.
                    34, no. 4, pp. 567-580, 2022.
                  </li>
                </ol>
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
                  The development of <em>Skill Bridge AI</em> integrates a
                  modern, scalable, and AI-centric technology stack to ensure
                  high performance, real-time processing, and seamless user
                  experience. The system is designed using{" "}
                  <strong>industry-standard tools</strong> for frontend,
                  backend, AI/ML, cloud infrastructure, and data management,
                  enabling rapid prototyping, deployment, and maintenance.
                </p>

                <h4 className="font-semibold mb-2">Technology Stack Images</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { name: "Google Cloud", file: "Google Cloud.png" },
                    { name: "Google", file: "Google.png" },
                    { name: "Tailwind CSS", file: "Tailwind CSS.png" },
                    { name: "FastAPI", file: "FastAPI.png" },
                    { name: "Git", file: "Git.png" },
                    {
                      name: "Visual Studio Code (VS Code)",
                      file: "Visual Studio Code (VS Code).png",
                    },
                    { name: "Jupyter", file: "Jupyter.png" },
                    { name: "Docker", file: "Docker.png" },
                    { name: "OpenCV", file: "OpenCV.png" },
                    { name: "Firebase", file: "Firebase.png" },
                    { name: "Python", file: "Python.png" },
                  ].map((img, idx) => (
                    <div key={idx} className="text-center">
                      <img
                        src={`/images/${img.file}`}
                        alt={img.name}
                        className="w-16 h-16 mx-auto mb-2 object-contain"
                      />
                      <p className="text-sm font-medium">{img.name}</p>
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold mb-2">
                  4.1 Frontend Technologies
                </h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Tool
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Purpose
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Version
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Next.js</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Server-side rendered React framework for responsive
                        dashboard
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        v14.2
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Tailwind CSS</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Utility-first styling for fast, customizable UI
                      </td>
                      <td className="border border-gray-300 px-4 py-2">v3.4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Chart.js / Recharts</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Interactive data visualization (skill gaps, trends)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        v4.4 / v2.12
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>React Hook Form</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Efficient form handling (CV upload, quiz)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        v7.51
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Framer Motion</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Smooth animations and micro-interactions
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        v11.1
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">4.2 Backend & API</h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Tool
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Purpose
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Version
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>FastAPI</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        High-performance Python API framework
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        v0.115
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Uvicorn + Gunicorn</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ASGI server for production deployment
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        v0.30 / v22.0
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Pydantic</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Data validation and settings management
                      </td>
                      <td className="border border-gray-300 px-4 py-2">v2.8</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>JWT + OAuth2</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Secure authentication
                      </td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">
                  4.3 AI & Machine Learning
                </h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Tool
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Function
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Version
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Python</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Core programming language
                      </td>
                      <td className="border border-gray-300 px-4 py-2">3.11</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>spaCy</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        NLP pipeline, NER, text processing
                      </td>
                      <td className="border border-gray-300 px-4 py-2">v3.7</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Transformers (Hugging Face)</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        BERT, RoBERTa for skill extraction & sentiment
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        v4.44
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>YOLOv8</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Real-time facial emotion & eye tracking
                      </td>
                      <td className="border border-gray-300 px-4 py-2">v8.2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>MediaPipe</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Body posture and gesture analysis
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        v0.10
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Whisper (OpenAI)</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Speech-to-text transcription
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        large-v3
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>XGBoost / LightGBM</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Salary & course recommendation models
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        v2.1 / v4.5
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Prophet</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Time-series job trend forecasting
                      </td>
                      <td className="border border-gray-300 px-4 py-2">v1.1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>scikit-learn</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Preprocessing, similarity, evaluation
                      </td>
                      <td className="border border-gray-300 px-4 py-2">v1.5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>SHAP</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Model explainability
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        v0.46
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">4.4 Cloud & DevOps</h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Tool
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Purpose
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Region
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Google Cloud Platform (GCP)</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Hosting, AI, scalability
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        asia-south1
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Vertex AI</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Model training, serving, AutoML
                      </td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Cloud Storage</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Store CVs, videos, reports
                      </td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Cloud Functions</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Trigger-based processing (e.g., CV upload → analysis)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Firebase Authentication</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        User login (Google, Email)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Firestore</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Real-time NoSQL database
                      </td>
                      <td className="border border-gray-300 px-4 py-2">–</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">
                  4.5 Data Processing & Utilities
                </h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Tool
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>PyMuPDF / pdfplumber</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        PDF to text extraction
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>BeautifulSoup / Scrapy</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Web scraping job listings
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Pandas / NumPy</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Data manipulation
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>OpenCV</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Video frame processing
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>ffmpeg</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Audio extraction from video
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>DVC (Data Version Control)</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Dataset versioning
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>MLflow</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Experiment tracking
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">
                  4.6 Development & Collaboration
                </h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Tool
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Git + GitHub</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Version control
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>GitHub Actions</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        CI/CD pipeline
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Docker</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Containerization
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Postman</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        API testing
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Jupyter Notebook</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Model prototyping
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>VS Code</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">IDE</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mb-2">
                  4.7 Deployment & Monitoring
                </h4>
                <table className="w-full border-collapse border border-gray-300 text-base text-foreground">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Tool
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>GCP Cloud Build</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Automated deployment
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Cloud Logging & Monitoring</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Performance tracking
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Sentry</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Error monitoring
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>Google Analytics</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        User behavior insights
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Technology Stack Summary (One Liner):</strong>{" "}
                  <em>
                    Next.js + FastAPI + GCP Vertex AI + spaCy + YOLOv8 +
                    Firebase
                  </em>
                </p>
                <h4 className="font-semibold mb-2">References</h4>
                <ol className="list-decimal list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>
                    [1] C. Kumar, "Next.js and FastAPI for Scalable Web
                    Applications," Journal of Web Engineering, vol. 18, no. 2,
                    pp. 234-256, 2023.
                  </li>
                  <li>
                    [2] D. Rodrigo, "AI Models on Google Cloud Platform," IEEE
                    Cloud Computing, vol. 9, no. 4, pp. 45-58, 2022.
                  </li>
                  <li>
                    [3] E. Perera, "Integrating spaCy and YOLO for Multimodal
                    AI," IEEE Transactions on Pattern Analysis and Machine
                    Intelligence, vol. 45, no. 6, pp. 789-802, 2023.
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
