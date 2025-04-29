import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import fs from "fs/promises";
import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";

dotenv.config();
const TOKEN = process.env.T_O_K_E_N;
const Cred = await fs.readFile("credentials.json", "utf-8");
const Credentials = JSON.parse(Cred);

const auth = new GoogleAuth({
  credentials: Credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const authClient = await auth.fromJSON(Credentials);
const sheets = google.sheets({ version: "v4", auth: authClient });

console.log(Credentials);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  try {
    const regex = /expense:(\d+)\s+description:(.+)/i;
    const match = message.content.match(regex);

    if (!match) {
      await message.reply(
        "Invalid format. Use `!add expense:<amount> description:<desc>`"
      );
      return;
    }

    const expense = parseFloat(match[1]);
    const description = match[2].trim();

    await sheets.spreadsheets.values.append({
      auth: authClient,
      spreadsheetId: "18HiPNSolagkBITyjtkaqGDyNYsAPSWyIfgDfTuAnlbo",
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      resource: {
        values: [[description, expense]],
      },
    });

    await message.reply(`Expense added✅ : ₹${expense} for "${description}"`);
  } catch (err) {
    console.error(err);
    await message.reply("Error⚠️  adding to sheet. Check the logs.");
  }
});

client.login(TOKEN);
