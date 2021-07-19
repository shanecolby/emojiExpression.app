const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")

function renderEmojis() {
  emojiContainer.innerHTML = ""
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span")
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
  }

}

renderEmojis()
