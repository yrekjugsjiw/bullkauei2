/*CMD
  command: /helprft
  help: 
  need_reply: false
  auto_retry_time: 
  folder: реф игра
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.sendMessage("Твоя задача: набрать больше всех рефералов до окончания конкурса. После окончания конкурса, победители получат призы. Подробнее о сроках конкурса и о призах смотри в телеграмм канале ➡️ @bulldropsoft                                                                                            ❗️Накручивать рефералов запрещено! Мы все видем, обнулим")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
