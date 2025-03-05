/*CMD
  command: removeMsg
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(!options){ return }

Api.deleteMessage({
  message_id: options.message_id
})
