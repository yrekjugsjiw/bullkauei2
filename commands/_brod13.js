/*CMD
  command: /brod13
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Делаййййй
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.sendMessage("Отправлено всем")

Bot.runAll({
command: "/mssage9",
options: {chat_id: request.chat.id,message_id: request.message_id}
})
