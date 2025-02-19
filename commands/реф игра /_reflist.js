/*CMD
  command: /reflist
  help: 
  need_reply: false
  auto_retry_time: 
  folder: реф игра 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let refList = RefLib.getRefList();

if (!refList.exist) {
  Bot.sendMessage("*Перешли по твоей рефке:* 0");
  return
}

let users_rows = ""

// only 100 first users here
// for other users you need use pagination:
// https://help.bots.business/bjs/lists#paginating
let users = refList.getUsers();

for (var ind in users) {
  users_rows = users_rows + "\n👤 " + Libs.commonLib.getLinkFor( users[ind] )
}

let msg =
  "*Всего рефералов:* " +
  RefLib.getRefCount() 
  
  

Bot.sendMessage(msg);

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs





