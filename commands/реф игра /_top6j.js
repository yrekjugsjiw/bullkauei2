/*CMD
  command: /top6j
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

// It is just List
// you can order, paginate it!
// https://help.bots.business/bjs/lists#getting-data
let list = RefLib.getTopList();

list.order_by = "integer_value";
// olso it is possible get newest members:
list.order_ascending = false;

var items = list.get();
//Bot.inspect(items);

var msg = 'Список лидеров: ';
var prop;
for(var ind in items){
  prop = items[ind]
  msg = msg + "\n" +
    String( parseInt(ind) + 1 ) + " " +
    Libs.commonLib.getNameFor() + String(prop.value) + "👤"
}

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


