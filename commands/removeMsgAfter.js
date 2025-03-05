/*CMD
  command: removeMsgAfter
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
if(!options.result.message_id){ return }

let runAfter = parseInt(params);

// run message removing after "runAfter" minutes
Bot.run({
  command: "removeMsg",
  options: { message_id: options.result.message_id },
  run_after: 60*runAfter // in minutes
})
