/*CMD
  command: /flee
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

Bot.sendMessage("[ ░░░░░░░░░░░░░░░░░░░░░░░░░ ] 0%",
{
on_result: "/upd",parse_mode:"html", is_reply: false}
);
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs


