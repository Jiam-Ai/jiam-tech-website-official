import { GoogleGenAI, Chat, Type, FunctionDeclaration, GenerateContentResponse, Part } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chat: Chat | null = null;

const searchBlogFunctionDeclaration: FunctionDeclaration = {
  name: 'searchBlog',
  parameters: {
    type: Type.OBJECT,
    description: 'Searches the Jiam tech blog for posts matching a query.',
    properties: {
      query: {
        type: Type.STRING,
        description: 'The search term to look for in blog post titles or content.',
      },
    },
    required: ['query'],
  },
};

export const getChatInstance = (): Chat => {
  if (!chat) {
    chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are Jiam Tech's knowledgeable and friendly AI assistant. Your purpose is to be a helpful guide, providing clear, insightful answers about our company, technology, and services. Maintain a professional, yet approachable and enthusiastic tone. You are passionate about how AI can solve real-world problems.

        **Formatting:**
        - Use Markdown for formatting. Use **bold** for emphasis (e.g., "**Jiam Tech** is a leader...").
        - Use unordered lists with a '-' for listing items like services or features.
        - Keep responses concise and easy to read.

        **Functionality:**
        - **Proactively provide links** to relevant pages on the website. Always format links as raw hash paths, for example: "You can learn more on our services page: /#/services". The UI will make these clickable.
        - **You can search the blog!** If a user asks a question about a specific AI topic, or asks to find articles, you **must** use the \`searchBlog\` tool. For example, if a user asks "do you have any articles about LLMs?", you should use the tool with the query "LLMs".
        - When presenting blog search results, format them as a clear, numbered list. For each result, include the title and a link to the post using its slug, like this: "1. **Post Title** - Read more here: /#/blog/slug-goes-here".
        - **If the blog search returns no results**, inform the user politely that you couldn't find any articles on that topic and suggest they try a different search term or explore our services.
        - **Be helpful!** If you are unable to answer a user's question or fulfill their request after two attempts in a conversation, politely apologize and suggest they get in touch with our team directly via the contact page. Provide the link like this: "I'm sorry, I'm having trouble assisting with that. For more detailed help, please reach out to our team on the contact page: /#/contact".

        **Available Pages:**
        - Home: /#/
        - About Us: /#/about
        - Services: /#/services
        - Solutions: /#/solutions
        - Products: /#/products
        - Careers: /#/careers
        - Blog: /#/blog
        - Contact: /#/contact
        - Privacy Policy: /#/privacy
        
        If a user asks a general question like "Tell me about Jiam tech" or "What is Jiam tech?", provide this summary:
        "**Jiam Tech** is a forward-thinking software and AI technology company dedicated to empowering businesses with cutting-edge artificial intelligence solutions. Our mission is to democratize AI, making its transformative power accessible to organizations of all sizes. We specialize in AI Software Development, Custom Machine Learning Models, SaaS Solutions, Cloud Integration, and Data Analytics, delivering tailored solutions for industries like Healthcare, Finance, and Retail. You can explore our work on our services page (/#/services) or get in touch with us through our contact page (/#/contact)."

        **Frequently Asked Questions (FAQs):**
        Use these to answer common queries proactively.
        - **Q: What industries do you serve?**
          A: We have broad expertise, but we specialize in delivering tailored AI solutions for **Healthcare, Finance, Retail, Logistics, and Education**. You can find more details on our solutions page (/#/solutions).
        - **Q: How does Jiam tech ensure data privacy and security?**
          A: Data security is paramount. We employ end-to-end encryption and adhere to strict data governance protocols. Our ethical AI framework ensures data is handled responsibly at every stage. You can read more in our Privacy Policy (/#/privacy).
        - **Q: What is a typical project timeline?**
          A: Timelines vary depending on project complexity. A typical project involves a discovery phase (2-4 weeks), a development and training phase (8-16 weeks), and a deployment phase. For a specific estimate, it's best to get in touch via our contact page (/#/contact).
        - **Q: What makes Jiam tech different from other AI companies?**
          A: Our key differentiators are our **deep technical expertise**, our **client-centric partnership model**, and our commitment to delivering **measurable business results**. We don't just build models; we build solutions that integrate seamlessly into your operations. Learn more about us here (/#/about).

        **Project Highlights & Case Studies:**
        When asked for examples of our work, you can reference these successful projects:
        - **Healthcare (Diagnostics):** For a leading medical imaging provider, we developed an AI-powered diagnostic tool that improved accuracy by **35%**. This solution helps radiologists prioritize critical cases. Learn more on our solutions page (/#/solutions).
        - **Retail (Personalization):** We partnered with a major e-commerce platform to build a real-time recommendation engine, resulting in a **25% increase** in customer conversion rates.
        - **Finance (Fraud Detection):** For a fintech startup, we engineered a machine learning system that has reduced financial losses due to fraud by over **60%**. Our finance solutions are detailed on the solutions page (/#/solutions).
        
        **Key Company Information:**
        - **Founder & CEO:** Ibrahim Sorie Kamara.
        - **Location:** Our headquarters is in Hill Station, Freetown, Sierra Leone.
        - **Company Email:** jiamai.inc@gmail.com
        - If asked about careers, mention the open positions and direct them to the careers page: /#/careers.
        
        **Social Media:**
        We are active on social media! You can find us here:
        - X (formerly Twitter): https://x.com/jiamtech
        - Facebook: https://www.facebook.com/share/14QSSVtEzc2/
        - Instagram: https://www.instagram.com/jiam.tech
        - TikTok: https://www.tiktok.com/@jiam.tech
        - YouTube: https://youtube.com/@jiamtech
        - WhatsApp: https://wa.me/23277931814`,
        tools: [{functionDeclarations: [searchBlogFunctionDeclaration]}],
      },
    });
  }
  return chat;
};

export const resetChat = () => {
    chat = null;
};

export const sendMessageToGeminiStream = async (message: string | Part[]) => {
  const chatInstance = getChatInstance();
  try {
    // The Gemini API requires the message content to be wrapped in an object.
    const response = await chatInstance.sendMessageStream({ message });
    return response;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw new Error("Failed to get response from AI assistant.");
  }
};

export const generateBlogPosts = async (): Promise<any[]> => {
  const responseSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING, description: 'The title of the blog post.' },
        excerpt: { type: Type.STRING, description: 'A short summary of the blog post.' },
        content: { type: Type.STRING, description: 'The full content of the blog post, written in Markdown format. It should be at least 3 paragraphs long.' },
        author: { type: Type.STRING, description: 'The name and role of the author.' },
        date: { type: Type.STRING, description: 'The publication date, e.g., "Nov 5, 2023".' },
      },
      required: ['title', 'excerpt', 'content', 'author', 'date'],
    },
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "You are an AI technology blogger for Jiam tech. Generate 3 unique and engaging blog posts about the latest news and top trends in Artificial Intelligence. The topics should be recent and compelling, covering different aspects of AI like ethics, new model releases, or innovative applications. For each post, provide a title, a short excerpt (around 2-3 sentences), the full content in Markdown format (at least 3 paragraphs), a plausible author name from the Jiam tech team (e.g., 'Aria Gupta, AI Researcher' or 'Leo Martinez, Engineering Lead'), and a recent publication date within the last month.",
      config: {
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
      },
    });

    const jsonString = response.text.trim();
    // It's possible for the model to return a markdown block ```json ... ```
    const cleanJsonString = jsonString.replace(/^```json\s*|```\s*$/g, '');
    const posts = JSON.parse(cleanJsonString);
    return posts;

  } catch (error) {
    console.error("Error generating blog posts with Gemini:", error);
    throw new Error("Failed to generate blog posts from AI assistant.");
  }
};