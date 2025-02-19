/*CMD
  command: /bita
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

// get current cooldown Res - see ResourcesLib
let cooldown = Libs.CooldownLib.chat.getCooldown("TemBonusCooldown");

// for user:
// let cooldown = Libs.CooldownLib.user.getCooldown("GemBonusCooldown");

// global
// let cooldown = Libs.CooldownLib.getCooldown("GemBonusCooldown");

var curValue = cooldown.value(); // current cooldown in second
cooldown.set(curValue - 40) // reduce 40 sec from cooldown
