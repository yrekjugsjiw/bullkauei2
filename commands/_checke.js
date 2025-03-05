/*CMD
  command: /checke
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (content) {
  const { status, is_joined } = JSON.parse(content);

  if (status === "false") {
    return Bot.sendMessage("*Please make the bot an admin on your All channels*");
  }

  if (is_joined) {
    Bot.runCommand("/maine")
  } else {
    Bot.sendMessage("*⚠️ Вы не подписались на канал!*");
    Bot.runCommand("/start")
  }
}
