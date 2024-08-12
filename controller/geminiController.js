const dotenv = require("dotenv");
dotenv.config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.summaryController = async (req, res) => {
    try {
        const { text } = req.body
        const prompt = `Summarize this\n${text}`;

        const result = await model.generateContent(prompt);
        const data = result.response.text();
        console.log(data)
        if (data) {

            return res.status(200).json(data)
        }

    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message: err.message

        })
    }
}