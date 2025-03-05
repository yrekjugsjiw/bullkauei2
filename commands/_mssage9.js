/*CMD
  command: /mssage9
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Api.copyMessage({
chat_id: user.telegramid,
from_chat_id: options.chat_id,
message_id: options.message_id,
})
