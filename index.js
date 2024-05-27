import openai from "./config/open-ai.js";
import readLineAsync from "readline-sync"
import colors from "colors";

async function main() {
const chatHistory = [];
while(true)
{
    const userInput= readLineAsync.question(colors.green('You: '));
    try {
        if(userInput.toLowerCase() === 'exit')
        {
            return;
        }
        // construct messages iterating over history
        const messages = chatHistory.map(([role,content])=>({role,content}));
        // add latest message
        messages.push({ role: 'user', content: userInput });
        
        // console.log(messages);
        const chatCompletion = await openai.chat.completions.create({
                messages: messages,
                model: 'gpt-3.5-turbo',
              });

        const responseMessage = chatCompletion.choices[0].message.content;
        console.log(colors.blue('  Bot: ')+responseMessage);
       
        chatHistory.push(['user', userInput ]);
       chatHistory.push(['assistant', responseMessage ]);
    } catch (error) {
        console.log("Error: "+error);
    }
   
}

}

main();

