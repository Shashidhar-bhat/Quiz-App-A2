# Quiz App

A fully functional and responsive Quiz Application built using **React.js**. This app allows users to test their knowledge by answering multiple-choice questions. At the end of the quiz, users can view their score and the total number of questions attempted.

---

## Features

- 📋 **Dynamic Questions**: Questions are fetched dynamically from a structured JSON file.
- 🎨 **Interactive UI**: Highlighting for selected answers, and hover effects for buttons and options.
- 📊 **Score Display**: Users can view their score after completing the quiz.
- 🚀 **Responsive Design**: Optimized for different screen sizes.
- 🔄 **Reusable Components**: Modular and reusable React components for scalability.

---

## How It Works

1. **Question Rendering**:  
   - The questions and options are imported from `data.js`, which contains a JSON array of questions and answers.
   - The app starts with the first question displayed dynamically.

2. **Answer Selection**:  
   - Users can select an answer by clicking on an option.  
   - The selected option is highlighted using CSS classes (`selected`).

3. **Next Question Logic**:  
   - Clicking the "Next" button checks if the selected answer is correct.  
   - If correct, the score is incremented.  
   - The app then moves to the next question. If it's the last question, the quiz ends.

4. **Score Calculation**:  
   - The app keeps track of the score using React's `useState`.  
   - Once all questions are answered, the final score is displayed along with the total number of questions.

5. **Quiz Completion**:  
   - When the quiz ends, a summary screen shows the user’s score and the total questions.

---

## Technologies Used

- **React.js**: Component-based UI library for building the frontend.
- **JavaScript (ES6+)**: Logic and interactivity.
- **CSS**: Custom styling for the app.

---

## Installation and Setup

Follow these steps to get the application up and running on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
