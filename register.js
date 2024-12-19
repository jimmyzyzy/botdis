import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const commands = [
  {
    name: 'table',
    description: 'Table Checker',
  },
  {
    name: 'menu',
    description: 'Random food',
  },
  {
    name: 'homework',
    description: 'Homework Checker',
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(process.env.ClientID, process.env.ChannelID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}