/*CMD
  command: /test3
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

// It is just List
// you can order, paginate it!
// https://help.bots.business/bjs/lists#getting-data
let list = RefLib.getTopList();

list.order_by = "integer_value";
// olso it is possible get newest members:
list.order_ascending = false;

var items = list.get();
//Bot.inspect(items);

var msg = 'Top list: ';
var prop;
for(var ind in items){
  prop = items[ind]
  msg = msg + "\n" +
    String( parseInt(ind) + 1 ) + ". " +
    Libs.commonLib.getNameFor() + ": 👨" +
    String(prop.value)
}

Bot.sendMessage(msg);
