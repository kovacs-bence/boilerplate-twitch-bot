/** 
 * An example command demonstrating every property
 * 
 * name: name of our command, required, string
 * aliases: alternative names for our command, optional, string array
 * permissions: badges/permissions that can use this command, no permission check happens if undefined/empty/exempt, optional, string array
 * run: what happens when we run the command, required with these parameters, (async) function
 * 
*/
module.exports = {
    name: 'example', 
    aliases: ['ex'], 
    permissions: ['moderator', 'vip'], 
    run: async(client, channel, userstate, context) => { 
        await client.say(channel, 'Testing command worked!');
    }
}