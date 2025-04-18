
const aiInput = document.getElementById('ai-input');
const sendMessage = document.getElementById('send-message');
const chatMessages = document.getElementById('chat-messages');

// Add Event Listeners
sendMessage.addEventListener('click', () => sendAiMessage());
aiInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // 
        sendAiMessage();
    }
});

// Main send function
async function sendAiMessage() {
    const message = aiInput.value.trim();
    if (!message) return;

    // Add user message
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user');
    userMessageElement.textContent = message;
    console.log("messeages",message)
    chatMessages.appendChild(userMessageElement);

    // Clear input
    aiInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

  
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        const response = await fetch('https://n8n.dev.quantumos.ai/webhook/97a8fdef-d6dc-4a0a-ad0b-0a585ed1fbdd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        });

       

       
        const contentType = response.headers.get('content-type') || '';
        let aiReply = 'No response received.';

        if (response.ok) {
            if (contentType.includes('application/json')) {
                const data = await response.json();
                console.log('Parsed JSON:', data);
                aiReply = data.output || 'No "output" field found in response.';
            } else {
                const text = await response.text();
                aiReply = text || 'Empty response body.';
            }
        } else {
            const errorText = await response.text();
            aiReply = `Error ${response.status}: ${errorText || 'Unknown error'}`;
        }

        // Remove typing indicator
        chatMessages.removeChild(typingIndicator);

        // Add AI response
        const aiMessageElement = document.createElement('div');
        aiMessageElement.classList.add('message', 'bot');
        aiMessageElement.textContent = aiReply;
        chatMessages.appendChild(aiMessageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;

    } catch (error) {
        console.error('Fetch error:', error);
        chatMessages.removeChild(typingIndicator);

        const errorMessage = document.createElement('div');
        errorMessage.classList.add('message', 'bot');
        errorMessage.textContent = 'Error: ' + error.message;
        chatMessages.appendChild(errorMessage);
    }
}
