// Application state
let currentStep = 0;
let selectedCategory = '';
let selectedTask = '';
let responses = {};
let generatedPrompt = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProgressIndicator();
    renderStepContent();
    updateNavigation();
});

// Render progress indicator
function renderProgressIndicator() {
    const progressContainer = document.getElementById('progress-indicator');
    progressContainer.innerHTML = '';
    
    steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'progress-step';
        
        const circle = document.createElement('div');
        circle.className = `progress-circle ${index <= currentStep ? 'active' : 'inactive'}`;
        circle.textContent = index + 1;
        
        const label = document.createElement('span');
        label.className = 'progress-label';
        label.textContent = step;
        
        stepDiv.appendChild(circle);
        stepDiv.appendChild(label);
        
        if (index < steps.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'progress-arrow';
            arrow.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
            </svg>`;
            stepDiv.appendChild(arrow);
        }
        
        progressContainer.appendChild(stepDiv);
    });
}

// Render step content based on current step
function renderStepContent() {
    const container = document.getElementById('step-content');
    container.className = 'fadeInUp';
    
    switch (currentStep) {
        case 0:
            renderCategorySelection(container);
            break;
        case 1:
            renderTaskSelection(container);
            break;
        case 2:
            renderQuestionForm(container);
            break;
        case 3:
            renderPromptResult(container);
            break;
        default:
            container.innerHTML = '<p>Unknown step</p>';
    }
}

// Render category selection (step 0)
function renderCategorySelection(container) {
    container.innerHTML = `
        <h3 class="card-title">What type of educational content do you want to create?</h3>
        <div class="button-grid" id="category-grid"></div>
    `;
    
    const grid = document.getElementById('category-grid');
    
    Object.entries(categories).forEach(([categoryName, categoryData]) => {
        const button = document.createElement('button');
        button.className = 'glow-button';
        button.onclick = () => selectCategory(categoryName);
        
        const taskList = Object.keys(categoryData.tasks).join(', ');
        
        button.innerHTML = `
            <div style="opacity: 0.9;">${categoryData.icon}</div>
            <div style="text-align: center;">
                <div style="font-weight: 700; margin-bottom: 6px;">${categoryName}</div>
                <div style="font-size: 0.85rem; opacity: 0.8; line-height: 1.3;">${taskList}</div>
            </div>
        `;
        
        grid.appendChild(button);
    });
}

// Render task selection (step 1)
function renderTaskSelection(container) {
    const categoryData = categories[selectedCategory];
    if (!categoryData) return;
    
    container.innerHTML = `
        <h3 class="card-title">Choose your specific task:</h3>
        <div class="button-grid" id="task-grid"></div>
    `;
    
    const grid = document.getElementById('task-grid');
    
    Object.entries(categoryData.tasks).forEach(([taskName, taskData]) => {
        const button = document.createElement('button');
        button.className = 'glow-button task-button';
        button.onclick = () => selectTask(taskName);
        
        button.innerHTML = `
            <div class="task-title">${taskName}</div>
            <div class="task-description">${taskData.description}</div>
        `;
        
        grid.appendChild(button);
    });
}

// Render question form (step 2)
function renderQuestionForm(container) {
    const taskData = categories[selectedCategory]?.tasks[selectedTask];
    if (!taskData) return;
    
    container.innerHTML = `
        <h3 class="card-title">Provide details for: ${selectedTask}</h3>
        <div class="form-container" id="question-form"></div>
    `;
    
    const form = document.getElementById('question-form');
    
    taskData.questions.forEach(question => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.className = 'form-label';
        label.textContent = question.label;
        
        let input;
        
        switch (question.type) {
            case 'text':
                input = document.createElement('input');
                input.type = 'text';
                input.className = 'form-input';
                input.placeholder = `Enter ${question.label.toLowerCase()}`;
                break;
                
            case 'textarea':
                input = document.createElement('textarea');
                input.className = 'form-input form-textarea';
                input.placeholder = `Enter ${question.label.toLowerCase()}`;
                input.rows = 3;
                break;
                
            case 'number':
                input = document.createElement('input');
                input.type = 'number';
                input.className = 'form-input';
                input.placeholder = `Enter ${question.label.toLowerCase()}`;
                break;
                
            case 'select':
                input = document.createElement('select');
                input.className = 'form-input';
                
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = `Select ${question.label}`;
                input.appendChild(defaultOption);
                
                question.options.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    input.appendChild(optionElement);
                });
                break;
        }
        
        input.value = responses[question.id] || '';
        input.addEventListener('change', (e) => {
            responses[question.id] = e.target.value;
        });
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        form.appendChild(formGroup);
    });
}

// Render prompt result (step 3)
function renderPromptResult(container) {
    container.innerHTML = `
        <h3 class="card-title">Your Generated Prompt</h3>
        <div class="result-card">
            <div class="result-header">
                <h4 class="result-title">Copy this prompt to use with ChatGPT or Claude:</h4>
                <button class="copy-button" onclick="copyPrompt()">Copy Prompt</button>
            </div>
            <pre class="result-content">${generatedPrompt}</pre>
        </div>
        <button class="create-another-button" onclick="resetApp()">Create Another Prompt</button>
    `;
}

// Navigation functions
function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        renderProgressIndicator();
        renderStepContent();
        updateNavigation();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderProgressIndicator();
        renderStepContent();
        updateNavigation();
    }
}

// Selection functions
function selectCategory(categoryName) {
    selectedCategory = categoryName;
    nextStep();
}

function selectTask(taskName) {
    selectedTask = taskName;
    nextStep();
}

// Generate prompt based on selected task and responses
function generatePrompt() {
    switch (selectedTask) {
        case 'Course Design':
            generatedPrompt = generateCourseDesignPrompt();
            break;
        case 'Lesson Planning':
            generatedPrompt = generateLessonPlanningPrompt();
            break;
        case 'Educational Images':
            generatedPrompt = generateEducationalImagesPrompt();
            break;
        case 'Educational Infographics':
            generatedPrompt = generateEducationalInfographicsPrompt();
            break;
        case 'Educational Videos':
            generatedPrompt = generateEducationalVideosPrompt();
            break;
        case 'Animation Concepts':
            generatedPrompt = generateAnimationConceptsPrompt();
            break;
        case 'Activity Design':
            generatedPrompt = generateActivityDesignPrompt();
            break;
        case 'Quiz Creation':
            generatedPrompt = generateQuizCreationPrompt();
            break;
        case 'Multimedia Integration':
            generatedPrompt = generateMultimediaIntegrationPrompt();
            break;
        case 'Discussion Topics':
            generatedPrompt = generateDiscussionTopicsPrompt();
            break;
        default:
            generatedPrompt = 'Please provide more specific details about your educational content needs.';
    }
    
    nextStep();
}

// Prompt generation functions
function generateCourseDesignPrompt() {
    return `You are an expert course creator. Your task is to develop a comprehensive course outline for a course titled "${responses.title || '[Course Title]'}". This course is aimed at ${responses.audience || '[Target Audience]'}.

The learning objectives for this course are:
1. ${responses.objective1 || '[Learning Objective 1]'}
2. ${responses.objective2 || '[Learning Objective 2]'}
3. ${responses.objective3 || '[Learning Objective 3]'}

Here are some key topics this course should cover:
- ${responses.topic1 || '[Key Topic 1]'}
- ${responses.topic2 || '[Key Topic 2]'}
- ${responses.topic3 || '[Key Topic 3]'}

Using the principles of the ${responses.framework || '[Course Creation Framework]'}, please create a course outline including the following sections:

Course Title: ${responses.title || '[Course Title]'}
Learning Objectives: As stated above
Key Topics: As stated above
Course Content: Detailed content covering the learning objectives and key topics
Activity Suggestions: Engaging activities to reinforce the learned concepts
Assessment Methods: Methods to assess the understanding and knowledge retention of the learners.`;
}

function generateLessonPlanningPrompt() {
    return `Create a lesson plan based on the following details:

Lesson Topic: ${responses.topic || '[Lesson Topic]'}
Lesson Objectives: ${responses.objectives || '[Enter the specific learning objectives for this lesson, including what students should know or be able to do by the end of the lesson.]'}
Student Background: ${responses.background || '[Provide information about the student\'s prior knowledge, skills, learning styles, and any special needs.]'}
Content to be Covered: ${responses.content || '[Specify the topic or skills that will be taught in this lesson, including key concepts, ideas, or skills.]'}
Teaching Strategies: ${responses.strategies || '[Describe the teaching methods that will be used during the lesson, such as lecture, group activity, hands-on experiment, discussion, etc.]'}
Resources and Materials: ${responses.resources || '[List any resources or materials that will be used during the lesson, like textbooks, videos, handouts, software, etc.]'}
Assessment Methods: ${responses.assessment || '[Explain the formative and summative assessment methods that will be used to gauge students\' understanding during and after the lesson.]'}
Lesson Timeline: ${responses.timeline || '[Provide the duration of the lesson and an estimate of how much time each section of the lesson plan should take.]'}`;
}

function generateEducationalImagesPrompt() {
    const imageStyle = responses.style || 'professional';
    const accessibilityNote = responses.accessibility !== 'Standard' ? ` Create a ${responses.accessibility.toLowerCase()} version for accessibility.` : '';
    
    if (responses.platform === 'DALL-E 3') {
        return `Create an educational ${responses.imageType?.toLowerCase() || 'illustration'} about "${responses.subject || '[Subject]'}" suitable for ${responses.ageGroup || '[Age Group]'} students.

Style: ${imageStyle} illustration with ${responses.style?.toLowerCase() || 'clean'} design
Setting: Educational/classroom appropriate
Requirements: ${responses.specifications || 'Clear, engaging, and pedagogically sound'}
Quality: High resolution, suitable for classroom projection or textbook use${accessibilityNote}

Make it visually engaging while maintaining educational accuracy and age-appropriateness.`;
    } else if (responses.platform === 'Midjourney') {
        return `/imagine prompt: Educational ${responses.imageType?.toLowerCase() || 'illustration'} of ${responses.subject || '[subject]'}, ${imageStyle} style, suitable for ${responses.ageGroup?.toLowerCase() || 'students'}, classroom appropriate, high detail, professional quality --ar 16:9 --quality 2${accessibilityNote ? ' --accessibility-optimized' : ''}`;
    } else {
        return `Educational ${responses.imageType?.toLowerCase() || 'illustration'}: ${responses.subject || '[Subject]'}, ${imageStyle} art style, ${responses.ageGroup?.toLowerCase() || 'age-appropriate'}, ${responses.specifications || 'clear and engaging'}, high quality educational content${accessibilityNote}`;
    }
}

function generateEducationalInfographicsPrompt() {
    return `Create a comprehensive educational infographic explaining "${responses.concept || '[Concept]'}" for ${responses.ageGroup || '[Age Group]'} students.

Layout: ${responses.layout || 'Clear sequential flow'}
Color Scheme: ${responses.colorScheme || 'Professional and accessible'}
Content to Include:
${responses.dataPoints || '[Key points and data to visualize]'}

Design Requirements:
- Clean, professional layout suitable for educational use
- Clear typography readable from distance
- Logical information hierarchy
- Appropriate use of icons and visual elements
- High contrast for accessibility
- Suitable for both digital display and printing

Make it engaging while maintaining educational effectiveness and visual clarity.`;
}

function generateEducationalVideosPrompt() {
    const videoPlatform = responses.platform || 'Sora (OpenAI)';
    
    if (videoPlatform.includes('Sora')) {
        return `A ${responses.duration || '60-second'} educational video showing ${responses.subject || '[subject/topic]'}. ${responses.style || 'Documentary'} style shot in ${responses.setting || 'classroom/laboratory setting'} with professional lighting. Educational quality suitable for ${responses.ageGroup || '[age group]'} students. ${responses.requirements || 'Clear demonstration of key concepts'}.`;
    } else if (videoPlatform.includes('RunwayML')) {
        return `Educational demonstration video: ${responses.subject || '[subject/topic]'}. ${responses.videoType || 'Concept explanation'} format, ${responses.duration || '60 seconds'} duration. ${responses.style || 'Professional tutorial'} style in ${responses.setting || 'educational environment'}. Suitable for ${responses.ageGroup || '[age group]'} learning. ${responses.requirements || 'Clear visual progression and educational value'}.`;
    } else if (videoPlatform.includes('VEO')) {
        return `Create an educational video about ${responses.subject || '[subject/topic]'} in ${responses.style?.toLowerCase() || 'documentary'} style. Duration: ${responses.duration || '60 seconds'}. Setting: ${responses.setting || 'Educational environment'}. Target audience: ${responses.ageGroup || '[Age group]'} students. Style: Professional educational content with clear visual storytelling. ${responses.requirements || 'Engaging and pedagogically sound'}.`;
    }
    return `Educational video prompt for ${responses.platform || 'selected platform'}: ${responses.subject || '[subject/topic]'}`;
}

function generateAnimationConceptsPrompt() {
    return `Create an animated educational video explaining "${responses.concept || '[Concept]'}" using ${responses.animationStyle || '2D animation'} style.

Concept Complexity: ${responses.complexity || 'Intermediate level'}
Duration: ${responses.duration || '60 seconds'}
Key Elements to Animate:
${responses.keyPoints || '[Key points and transitions to illustrate]'}

Animation Requirements:
- Clear visual progression showing concept development
- Smooth transitions between key points
- Educational pacing appropriate for learning
- Clean, professional animation style
- Suitable for classroom or online learning use
- Visual metaphors that enhance understanding

Focus on making complex concepts accessible through effective visual storytelling and clear animated sequences.`;
}

function generateActivityDesignPrompt() {
    return `Design an interactive activity for learners on the topic of "${responses.topic || '[Activity Topic]'}" based on the following lesson objectives: ${responses.objectives || '[Learning Objectives]'}.

ChatGPT, I'd like to incorporate more interactive activities into my course on ${responses.subject || '[Course Subject]'}. Here are the main topics we cover: ${responses.mainTopics || '[List of Main Topics]'}. Here are the learning objectives: ${responses.objectives || '[Learning Objectives]'}.

Can you help me design two interactive activities that will allow learners to apply and deepen their understanding of these topics?`;
}

function generateQuizCreationPrompt() {
    return `ChatGPT, I need your help in creating a set of quiz questions based on the following lesson in my course:

Lesson Title: ${responses.lessonTitle || '[Lesson Title]'}
Key Points Covered: ${responses.keyPoints || '[Key Points Covered in Lesson]'}
Key learning outcomes needed: ${responses.outcomes || '[Key Learning Outcomes]'}

Could you generate ${responses.questionCount || 'five'} ${responses.questionType || 'multiple-choice'} questions to test learners' understanding of the key points?`;
}

function generateMultimediaIntegrationPrompt() {
    return `How can I integrate multimedia elements into the following lesson plan to enhance learner engagement: ${responses.lessonPlan || '[Input Lesson Plan]'}? 

Here's some information to help you:
Learning objectives: ${responses.objectives || '[Learning Objectives]'}
Lessons that have poor engagement: ${responses.poorEngagement || '[Poor Engagement Lessons]'}`;
}

function generateDiscussionTopicsPrompt() {
    return `ChatGPT, I'd like to create some discussion topics for each lesson in my course. Here are the lesson titles and their brief descriptions:

${responses.lessonTitles || '[Lesson Title: Description pairs]'}

Can you help generate ${responses.topicsPerLesson || 'two'} engaging discussion topics for each lesson?`;
}

// Utility functions
function updateNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const generateBtn = document.getElementById('generate-btn');
    
    // Update previous button
    prevBtn.disabled = currentStep === 0;
    
    // Update next/generate buttons
    nextBtn.style.display = 'none';
    generateBtn.style.display = 'none';
    
    if (currentStep < 2 && selectedCategory && (currentStep === 0 || selectedTask)) {
        nextBtn.style.display = 'flex';
    } else if (currentStep === 2) {
        generateBtn.style.display = 'flex';
    }
}

function copyPrompt() {
    navigator.clipboard.writeText(generatedPrompt).then(() => {
        // Temporarily change button text to show feedback
        const button = document.querySelector('.copy-button');
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = generatedPrompt;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}

function resetApp() {
    currentStep = 0;
    selectedCategory = '';
    selectedTask = '';
    responses = {};
    generatedPrompt = '';
    
    renderProgressIndicator();
    renderStepContent();
    updateNavigation();
}
