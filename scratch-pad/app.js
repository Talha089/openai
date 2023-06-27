const API_KEY = "";
async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/chat/completions",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{
                    role: "user",
                    content: "Hello!"
                }],
                max_tokens: 7 // optional-field
            })
        })

    const data = await response.json();
    console.log(`**** data: `, data)
}

fetchData()