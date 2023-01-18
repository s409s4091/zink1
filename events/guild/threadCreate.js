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
 * Bot Coded by S409#7733 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://https://sites.google.com/view/zink-bot
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
