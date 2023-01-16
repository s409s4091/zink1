//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/https://sites.google.com/view/zink-bot/home?pli=1
 * @INFO
 * Work for https://sites.google.com/view/zink-bot/home?pli=1 Development | https://https://sites.google.com/view/zink-bot/home?pli=1.eu
 * @INFO
 * Please mention him / https://sites.google.com/view/zink-bot/home?pli=1 Development, when using this Code!
 * @INFO
 */
