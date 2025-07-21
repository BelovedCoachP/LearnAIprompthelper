// Categories and tasks data
const categories = {
  'Course Design & Development': {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>`,
    tasks: {
      'Course Design': {
        description: 'Create comprehensive course outlines and structures',
        questions: [
          { id: 'framework', label: 'Course Creation Framework', type: 'select', options: ['ADDIE Model', 'Bloom\'s Taxonomy', 'SAM Model', 'Gagné\'s 9 Events of Instruction', 'Merrill\'s First Principles of Instruction'] },
          { id: 'title', label: 'Course Title', type: 'text' },
          { id: 'audience', label: 'Target Audience', type: 'text' },
          { id: 'objective1', label: 'Learning Objective 1', type: 'text' },
          { id: 'objective2', label: 'Learning Objective 2', type: 'text' },
          { id: 'objective3', label: 'Learning Objective 3', type: 'text' },
          { id: 'topic1', label: 'Key Topic 1', type: 'text' },
          { id: 'topic2', label: 'Key Topic 2', type: 'text' },
          { id: 'topic3', label: 'Key Topic 3', type: 'text' }
        ]
      },
      'Lesson Planning': {
        description: 'Plan individual lessons with detailed structure',
        questions: [
          { id: 'topic', label: 'Lesson Topic', type: 'text' },
          { id: 'objectives', label: 'Lesson Objectives', type: 'textarea' },
          { id: 'background', label: 'Student Background/Prior Knowledge', type: 'textarea' },
          { id: 'content', label: 'Content to be Covered', type: 'textarea' },
          { id: 'strategies', label: 'Teaching Strategies', type: 'textarea' },
          { id: 'resources', label: 'Resources and Materials', type: 'textarea' },
          { id: 'assessment', label: 'Assessment Methods', type: 'textarea' },
          { id: 'timeline', label: 'Lesson Duration/Timeline', type: 'text' }
        ]
      },
      'Learning Objectives': {
        description: 'Generate clear, measurable learning objectives',
        questions: [
          { id: 'outline', label: 'Course/Lesson Outline', type: 'textarea' },
          { id: 'chapters', label: 'Chapters (optional)', type: 'text' },
          { id: 'modules', label: 'Modules (optional)', type: 'text' }
        ]
      }
    }
  },
  'Visual Content Creation': {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
      <circle cx="9" cy="9" r="2"/>
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>`,
    tasks: {
      'Educational Images': {
        description: 'Generate images, diagrams, and infographics for learning',
        questions: [
          { id: 'imageType', label: 'Type of Visual', type: 'select', options: ['Infographic/Diagram', 'Scientific Diagram', 'Historical Illustration', 'Mathematical Concept', 'Character/Mascot', 'Timeline', 'Map/Geography', 'Process Flow'] },
          { id: 'subject', label: 'Subject/Topic', type: 'text' },
          { id: 'ageGroup', label: 'Target Age Group', type: 'select', options: ['Elementary (K-5)', 'Middle School (6-8)', 'High School (9-12)', 'College/Adult'] },
          { id: 'style', label: 'Visual Style', type: 'select', options: ['Cartoon/Friendly', 'Semi-realistic', 'Professional/Academic', 'Minimalist/Clean', 'Textbook Quality'] },
          { id: 'platform', label: 'AI Platform', type: 'select', options: ['DALL-E 3', 'Midjourney', 'Stable Diffusion', 'Adobe Firefly'] },
          { id: 'specifications', label: 'Specific Requirements', type: 'textarea' },
          { id: 'accessibility', label: 'Accessibility Needs', type: 'select', options: ['Standard', 'High Contrast', 'Simple/Clear for Learning Disabilities', 'Large Text/Elements'] }
        ]
      },
      'Educational Infographics': {
        description: 'Create detailed infographics and visual explanations',
        questions: [
          { id: 'concept', label: 'Concept to Illustrate', type: 'text' },
          { id: 'dataPoints', label: 'Key Data Points/Steps', type: 'textarea' },
          { id: 'colorScheme', label: 'Color Preferences', type: 'select', options: ['Professional Blues/Greens', 'Warm Educational Colors', 'High Contrast', 'Monochrome', 'Institution Brand Colors'] },
          { id: 'layout', label: 'Layout Style', type: 'select', options: ['Horizontal Flow', 'Vertical Timeline', 'Circular Process', 'Hierarchical Tree', 'Comparison Chart'] },
          { id: 'ageGroup', label: 'Target Age Group', type: 'select', options: ['Elementary (K-5)', 'Middle School (6-8)', 'High School (9-12)', 'College/Adult'] }
        ]
      }
    }
  },
  'Video Content Creation': {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"/>
      <rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>
    </svg>`,
    tasks: {
      'Educational Videos': {
        description: 'Generate educational video content with AI tools',
        questions: [
          { id: 'videoType', label: 'Type of Video', type: 'select', options: ['Scientific Process/Experiment', 'Historical Recreation', 'Mathematical Visualization', 'Language Learning Scene', 'Art Technique Demo', 'Virtual Field Trip', 'Concept Explanation'] },
          { id: 'platform', label: 'AI Video Platform', type: 'select', options: ['Sora (OpenAI)', 'RunwayML', 'Google VEO 3', 'Pika Labs'] },
          { id: 'subject', label: 'Subject/Topic', type: 'text' },
          { id: 'duration', label: 'Target Duration', type: 'select', options: ['30 seconds', '60 seconds', '90 seconds', '2 minutes', '3+ minutes'] },
          { id: 'setting', label: 'Setting/Environment', type: 'text' },
          { id: 'ageGroup', label: 'Target Age Group', type: 'select', options: ['Elementary (K-5)', 'Middle School (6-8)', 'High School (9-12)', 'College/Adult'] },
          { id: 'style', label: 'Video Style', type: 'select', options: ['Documentary Style', 'Animated/Cartoon', 'Professional Tutorial', 'Cinematic Recreation', 'Simple Demonstration'] },
          { id: 'requirements', label: 'Specific Requirements', type: 'textarea' }
        ]
      },
      'Animation Concepts': {
        description: 'Create animated explanations of complex concepts',
        questions: [
          { id: 'concept', label: 'Concept to Animate', type: 'text' },
          { id: 'complexity', label: 'Concept Complexity', type: 'select', options: ['Basic/Elementary', 'Intermediate', 'Advanced/Technical'] },
          { id: 'animationStyle', label: 'Animation Style', type: 'select', options: ['2D Flat Design', '3D Visualization', 'Abstract Geometric', 'Character-based', 'Realistic Simulation'] },
          { id: 'keyPoints', label: 'Key Points to Illustrate', type: 'textarea' },
          { id: 'duration', label: 'Target Duration', type: 'select', options: ['30 seconds', '60 seconds', '90 seconds', '2 minutes'] }
        ]
      }
    }
  },
  'Interactive Activities': {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="m22 21-3-3"/>
      <path d="M16 16l-6-6 9-9"/>
      <path d="m21 21-9-9"/>
    </svg>`,
    tasks: {
      'Activity Design': {
        description: 'Create engaging interactive activities for learners',
        questions: [
          { id: 'topic', label: 'Activity Topic', type: 'text' },
          { id: 'objectives', label: 'Learning Objectives', type: 'textarea' },
          { id: 'subject', label: 'Course Subject', type: 'text' },
          { id: 'mainTopics', label: 'Main Topics Covered', type: 'textarea' }
        ]
      },
      'Quiz Creation': {
        description: 'Generate quiz questions for assessment',
        questions: [
          { id: 'lessonTitle', label: 'Lesson Title', type: 'text' },
          { id: 'keyPoints', label: 'Key Points Covered', type: 'textarea' },
          { id: 'outcomes', label: 'Learning Outcomes', type: 'textarea' },
          { id: 'questionCount', label: 'Number of Questions', type: 'number' },
          { id: 'questionType', label: 'Question Type', type: 'select', options: ['Multiple Choice', 'True/False', 'Short Answer', 'Essay'] }
        ]
      }
    }
  },
  'Content Enhancement': {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
      <path d="M3 3v5h5"/>
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
      <path d="M16 16h5v5"/>
    </svg>`,
    tasks: {
      'Multimedia Integration': {
        description: 'Enhance lessons with multimedia elements',
        questions: [
          { id: 'lessonPlan', label: 'Current Lesson Plan', type: 'textarea' },
          { id: 'objectives', label: 'Learning Objectives', type: 'textarea' },
          { id: 'poorEngagement', label: 'Lessons with Poor Engagement', type: 'textarea' }
        ]
      },
      'Content Repurposing': {
        description: 'Transform existing content into courses',
        questions: [
          { id: 'contentType', label: 'Source Content Type', type: 'select', options: ['YouTube Videos', 'Podcast Episodes', 'eBook', 'Blog Posts', 'Webinars'] },
          { id: 'contentList', label: 'List of Content (titles and descriptions)', type: 'textarea' }
        ]
      }
    }
  },
  'Learner Support': {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>`,
    tasks: {
      'Discussion Topics': {
        description: 'Create engaging discussion prompts for lessons',
        questions: [
          { id: 'lessonTitles', label: 'Lesson Titles and Descriptions', type: 'textarea' },
          { id: 'topicsPerLesson', label: 'Number of Discussion Topics per Lesson', type: 'number' }
        ]
      },
      'Progress Reports': {
        description: 'Design learner progress tracking reports',
        questions: [
          { id: 'courseName', label: 'Course Name', type: 'text' },
          { id: 'learnerData', label: 'Learner Data/Performance Metrics', type: 'textarea' }
        ]
      }
    }
  },
  'Communication': {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>`,
    tasks: {
      'Course Emails': {
        description: 'Create various course-related emails',
        questions: [
          { id: 'emailType', label: 'Email Type', type: 'select', options: ['Inactivity Reminder', 'Course Completion', 'Milestone Recognition', 'Welcome Email'] },
          { id: 'courseTopic', label: 'Course Topic/Name', type: 'text' },
          { id: 'objectives', label: 'Learning Objectives (if applicable)', type: 'textarea' },
          { id: 'benefits', label: 'Course Benefits/Completion Benefits', type: 'textarea' }
        ]
      },
      'Feedback Collection': {
        description: 'Design feedback forms and surveys',
        questions: [
          { id: 'courseName', label: 'Course Name', type: 'text' },
          { id: 'questionCount', label: 'Number of Questions', type: 'number' },
          { id: 'aspects', label: 'Aspects to Assess', type: 'textarea' },
          { id: 'questionTypes', label: 'Question Types', type: 'text' }
        ]
      }
    }
  },
  'Assessment & Analysis': {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 3v5h5"/>
      <path d="M3 21v-5h5"/>
      <path d="M21 3v5h-5"/>
      <path d="M21 21v-5h-5"/>
      <path d="M7 8l4 4 4-4"/>
      <path d="M7 16l4-4 4 4"/>
    </svg>`,
    tasks: {
      'Performance Analysis': {
        description: 'Analyze course performance and suggest improvements',
        questions: [
          { id: 'courseName', label: 'Course Name', type: 'text' },
          { id: 'performanceData', label: 'Performance Data', type: 'textarea' },
          { id: 'completionRates', label: 'Completion Rates', type: 'text' },
          { id: 'assessmentScores', label: 'Assessment Scores', type: 'text' },
          { id: 'engagementMetrics', label: 'Engagement Metrics', type: 'text' }
        ]
      }
    }
  }
};

// Steps for the wizard
const steps = [
  'Select Category',
  'Choose Task',
  'Provide Details',
  'Generate Prompt'
];
