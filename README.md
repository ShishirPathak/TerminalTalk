# TerminalAI: Chatbot Using OpenAI GPT-3.5

TerminalAI is a simple chatbot that leverages OpenAI's GPT-3.5 model to interact with users through the command line. The chatbot maintains conversation history to provide context-aware responses.

## Features
- Interactive command-line interface
- Maintains conversation history for context-aware responses
- Easy setup and configuration

## Prerequisites
- Node.js installed on your system
- An OpenAI API key

## Setup Instructions

First, clone the repository to your local machine:
```sh
git clone https://github.com/ShishirPathak/TerminalTalk.git
cd TerminalAI

###  Install Dependencies
npm install

### Configure Environment Variables
Create a .env file in the root directory:
    Open the .env file and paste the below text and update your OpenAI API key:
    
    OPENAI_API_KEY=your-api-key-here

    Your .env file should look like sample .env file available in the root folder:
    
### Project Structure

TerminalAI/
├── config/
│   └── open-ai.js
├── .env.example
├── .gitignore
├── your-main-file.js
├── package.json
├── README.md
├── sample .env file.png
