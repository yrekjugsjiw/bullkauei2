/*CMD
  command: /joinede
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var channels = ["@bulldropsoft"];  // Array of your multiple channels
HTTP.get({
  url: "https://membership.bjcoderx.workers.dev/?bot_token=" + bot.token + "&user_id=" + user.telegramid + "&chat_id=" + encodeURIComponent(JSON.stringify(channels)),
  success: "/checke"
});
