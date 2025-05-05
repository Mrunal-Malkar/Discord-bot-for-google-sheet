# 💸 Discord Expense Tracker Bot

A simple Discord bot that lets users log expenses directly into **Google Sheets** using chat commands.

You can check out full demo video on:
[https://www.linkedin.com/posts/mrunal-malkar_made-a-discord-bot-what-does-it-do-adds-activity-7323219034634629121-fF9x?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFO_2iEBJ05LyWDbba3IKD1CaJ46wvY-sqg]
---

## 📌 What It Does

Once added to your server, you can log expenses in real time by sending messages in this format:

```
!add expense:<your expense here> description:<your description here>
```

✅ Example:
```
!add expense:200 description:Groceries
```

The bot will append this entry to a Google Sheet automatically!

---

## ⚙️ Prerequisites

To use the bot, you must set up access to the Google Sheets API:

### 1. Create a Google Cloud Project
- Visit [Google Cloud Console](https://console.cloud.google.com/)
- Enable the **Google Sheets API**
- Create a **Service Account** under "IAM & Admin"
- Generate and download a `credentials.json` file

### 2. Share Your Google Sheet
- Create a new Google Sheet
- Share it with your service account's email (found in `credentials.json`)
- Give **Editor** access

---

## 🚀 Setup Instructions

1. Clone this repository:
```bash
git clone https://github.com/your-username/discord-expense-bot.git
cd discord-expense-bot
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root with your Discord bot token:
```
T_O_K_E_N=your-bot-token-here
```

4. Place your downloaded `credentials.json` file in the root directory.

5. Run the bot:
```bash
node index.js
```

---

## 📝 Customization

- Spreadsheet ID and sheet name are hardcoded — modify them in `index.js` as needed:
```js
spreadsheetId: "your-spreadsheet-id",
range: "Sheet1!A1"
```

---

## 💡 Example Use Cases

- Group expense sharing (roommates, clubs, events)
- Personal budget logging
- Team purchases tracking

---

## 🛠 Tech Stack

- Node.js
- discord.js
- Google Sheets API
- dotenv

---

## 📬 Contact & Contributions

Feel free to fork, clone, or submit pull requests!

---

## 📄 License

[MIT](LICENSE)

