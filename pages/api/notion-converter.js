
const notionKey = process.env.NOTION_KEY

export default function handler(req, res) {
  res.status(200).json({notionKey})
}
