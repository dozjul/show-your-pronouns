import {PronounsUser} from "@rye/pronouns-user-framework";
import {Language} from "@rye/pronouns-base";
import {PronounsProvider} from "@rye/pronouns-user-framework";
import {getPronounsUser} from "@rye/pronouns-user-providers";
export var users = new Map();
export async function newUser(username:string, language:Language = Language.en, provider:PronounsProvider = PronounsProvider.pronounsPage):Promise<PronounsUser>{
    if(users.has(username)){
        users.get(username).setLanguage(language);
        return users.get(username);
    } else {
        users.set(username, getPronounsUser(provider, username, language));
        await users.get(username).fetchPronouns();
        return users.get(username);
    }
}
