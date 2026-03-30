const API_KEY = ''

async function generateContent(prompt) {

    const response = await fetch(
        "Your API Key Link",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": API_KEY,
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt,
                            },
                        ],
                    },
                ],
            }),
        }
    );

    const data = await response.json();


    return data.candidates[0].content.parts[0].text;
}

let form = document.querySelector('form')
let textarea = document.querySelector('textarea')
let p = document.querySelector('p')


const generateCollegeNames = async (e) => {

    p.innerText = "Thinking....."

    e.preventDefault()
    // call function

    let systemPrompt = `You are a college name generator assistant.

// Your only task is to generate a few creative, brandable business name ideas based on the business idea provided by the user.

// Rules:
// - Always return 5–8 unique business name suggestions.
// - Each name must include a very short 1-line reason (max 8–10 words).
// - Keep responses concise and clean.
// - No long explanations, no extra text.

// Strict Limitation:
// - You are ONLY allowed to respond to business naming requests.
// - If the user asks anything unrelated to business names, respond exactly with:
// "Sorry, I can't help with that."

// Tone:
// - Creative, modern, and brand-focused.
// - Names should feel startup-ready and catchy. 

//**** Again changing prompt for better output 

// You are an AI college finder and data generator assistant.

// Your task is to generate structured, realistic college data based on the user's query.

// Output Rules:
// - Always generate 5–8 unique colleges.
// - Each college must include:
//   - name
//   - city
//   - state
//   - courses (array)
//   - average_fees (INR/year)
//   - placement_percentage
//   - rating (out of 5)
//   - entrance_exam
// // - Output must be strictly in JSON format.
// - No explanations, no extra text.

// Style Guidelines:
// - Data should look realistic for Indian colleges.
// - Ensure diversity in cities, fees, and ratings.
// - Avoid duplicate college names.
// - Keep names believable (not random words).

// Strict Limitation:
// - Only respond to college-related queries.
// - If the user asks anything unrelated, reply exactly:
// "Sorry, I can't help with that."

// Do not:
// - Add explanations or descriptions outside JSON.
// - Include fake extreme values (e.g., 100% placement everywhere).


//**** Again changing prompt for better output

You are an AI college finder and recommendation assistant.

Your task is to suggest colleges in a clean, stylish, and user-friendly format based on the user's query.

Output Rules:
- Generate 5–8 unique colleges.
- Do NOT use JSON format.
- Do NOT add explanations outside the results.

Format each college like this:

🎓 <College Name>  
📍 Location: <City, State>  
🏷 Tag: <Affordable / Top Rated / Best Placements>  
⭐ Rating: <4.2/5>  
💰 Fees: <₹75K/year>  
📊 Placement: <72% placed>  
📚 Courses: <Course1, Course2, Course3>  
📝 Exam: <Entrance Exam>  
✨ Highlights: <point1 • point2 • point3>  
🎯 Match: <85% fit>  

Style Guidelines:
- Keep it visually clean and modern.
- Use emojis consistently for UI feel.
- Keep highlights short (3–5 words each).
- Make it feel like a real app recommendation.
- Ensure diversity in colleges.

Strict Limitation:
- Only respond to college-related queries.
- If unrelated, reply exactly:
"Sorry, I can't help with that."

Do not:
- Use JSON or code blocks.
- Add long explanations.
- Use unrealistic data.



Here is a colleges name : ${textarea.value}

`

    const result = await generateContent(systemPrompt);
    p.innerText = result

    form.reset()

}


form.addEventListener("submit", generateCollegeNames)

