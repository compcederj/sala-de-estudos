export default async function handler(req, res) {
  const { slug } = req.query

  const options = {
    telegramStudentGroup: 'https://t.me/SistComputacao_UFF',
    telegramInfoGroup: 'https://t.me/computacao_UFF',
    discordCommunity: 'https://discord.com/invite/V72N5wXX4c',
  }

  try {
    res.redirect(307, options[slug])
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
