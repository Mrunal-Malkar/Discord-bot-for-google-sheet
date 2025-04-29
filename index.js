import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";


dotenv.config();
const TOKEN = process.env.T_O_K_E_N;

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

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply(`You said: "${message.content}"`);
});

client.login(TOKEN);
